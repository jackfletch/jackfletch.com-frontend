import styled from 'styled-components';
import {PipelineStep, Recipe} from '../data/recipes';

const Table = styled.table`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding: 0px 0px 0px 0px;
  border-collapse: separate;
  border-spacing: 0px;
`;

const Td = styled.td`
  border-right: 1px solid black;
  border-top: 1px solid black;
  padding: 3px;
  text-align: center;
`;

// ---------------------------------------------------------------------------
// Compile: pipeline + branches  →  nested tree rooted at the sink
// ---------------------------------------------------------------------------

type StepInput = string | StepNode;

interface StepNode {
  action: string;
  inputs: StepInput[];
}

/**
 * Fold a pipeline top-down into a single tree. Each step implicitly consumes
 * the previous step's output, plus any `add`ed ingredients and `merge`d
 * branches.
 */
function compilePipeline(
  pipeline: PipelineStep[],
  branches: Record<string, StepNode>,
  label: string
): StepNode {
  let current: StepInput | null = null;
  for (const step of pipeline) {
    const inputs: StepInput[] = [];
    if (current !== null) inputs.push(current);
    for (const ing of step.add ?? []) inputs.push(ing);
    for (const name of step.merge ?? []) {
      const branch = branches[name];
      if (!branch) {
        throw new Error(
          `${label}: step "${step.then}" merges unknown branch "${name}"`
        );
      }
      inputs.push(branch);
    }
    if (inputs.length === 0) {
      throw new Error(
        `${label}: first step "${step.then}" needs at least one add or merge`
      );
    }
    current = {action: step.then, inputs};
  }
  if (current === null || typeof current === 'string') {
    throw new Error(`${label}: pipeline is empty`);
  }
  return current;
}

function compile(recipe: Recipe): StepNode {
  const branches: Record<string, StepNode> = {};
  for (const [name, branch] of Object.entries(recipe.branches ?? {})) {
    branches[name] = compilePipeline(
      branch,
      branches,
      `${recipe.title}/${name}`
    );
  }
  return compilePipeline(recipe.pipeline, branches, recipe.title);
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

interface Placed {
  kind: 'ingredient' | 'action';
  label: string;
  rowStart: number;
  rowEnd: number;
  col: number;
  colSpan: number;
}

interface TreeNode {
  placed: Placed;
  children?: TreeNode[];
}

interface Layout {
  totalRows: number;
  totalCols: number;
  ingredients: Placed[];
  actions: Placed[];
}

/**
 * Walk the recipe tree and assign each node a position on the table grid.
 *
 * Ingredients get their row by DFS order. Each action's row range is the union
 * of its inputs' row ranges (contiguous by construction of the DFS), its column
 * is `max(input cols) + 1`, and its colSpan is chosen so the cell visually
 * reaches its consumer's column.
 *
 * Because the DAG converges to a single sink (the root of the passed tree),
 * the sink has colSpan = 1 and sits at the rightmost column.
 */
function computeLayout(root: StepNode): Layout {
  const ingredients: Placed[] = [];
  const actions: Placed[] = [];

  function visit(node: StepInput): TreeNode {
    if (typeof node === 'string') {
      const row = ingredients.length;
      const placed: Placed = {
        kind: 'ingredient',
        label: node,
        rowStart: row,
        rowEnd: row,
        col: 0,
        colSpan: 1,
      };
      ingredients.push(placed);
      return {placed};
    }
    const children = node.inputs.map(visit);
    const childPlaced = children.map(c => c.placed);
    const placed: Placed = {
      kind: 'action',
      label: node.action,
      rowStart: Math.min(...childPlaced.map(c => c.rowStart)),
      rowEnd: Math.max(...childPlaced.map(c => c.rowEnd)),
      col: Math.max(...childPlaced.map(c => c.col)) + 1,
      colSpan: 1,
    };
    actions.push(placed);
    return {placed, children};
  }

  const rootTree = visit(root);

  // Top-down pass: each action's colSpan is the distance to its consumer.
  // The sink has no consumer, so its colSpan stays at 1.
  function setColSpans(tree: TreeNode, consumerCol: number) {
    if (tree.placed.kind !== 'action') return;
    tree.placed.colSpan = consumerCol - tree.placed.col;
    for (const child of tree.children ?? []) {
      setColSpans(child, tree.placed.col);
    }
  }
  for (const child of rootTree.children ?? []) {
    setColSpans(child, rootTree.placed.col);
  }

  return {
    totalRows: ingredients.length,
    totalCols: rootTree.placed.col + 1,
    ingredients,
    actions,
  };
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

type GridCell =
  | null
  | 'covered'
  | {
      kind: 'ingredient' | 'action';
      label: string;
      rowSpan: number;
      colSpan: number;
    }
  | {kind: 'empty'; colSpan: number};

/**
 * Build a 2D grid of cells from the layout, then emit table rows.
 *
 * Empty cells are only emitted when the set of uncovered columns *changes*
 * from the previous row. Rows where the uncovered region is unchanged are
 * left as just the ingredient cell — the browser happily renders the
 * implicitly missing cells as borderless blank space, matching the original
 * hummus table's aesthetic.
 */
function renderCells(layout: Layout): React.ReactNode[] {
  const {totalRows, totalCols, ingredients, actions} = layout;
  const grid: GridCell[][] = Array.from({length: totalRows}, () =>
    Array<GridCell>(totalCols).fill(null)
  );

  const place = (p: Placed) => {
    const rowSpan = p.rowEnd - p.rowStart + 1;
    grid[p.rowStart][p.col] = {
      kind: p.kind,
      label: p.label,
      rowSpan,
      colSpan: p.colSpan,
    };
    for (let r = p.rowStart; r <= p.rowEnd; r++) {
      for (let c = p.col; c < p.col + p.colSpan; c++) {
        if (r === p.rowStart && c === p.col) continue;
        grid[r][c] = 'covered';
      }
    }
  };
  ingredients.forEach(place);
  actions.forEach(place);

  const uncoveredSig = (r: number) =>
    grid[r]
      .map((cell, c) => (cell === null ? c : -1))
      .filter(c => c >= 0)
      .join(',');

  const rows: React.ReactNode[] = [];
  let prevSig = '';
  for (let r = 0; r < totalRows; r++) {
    const sig = uncoveredSig(r);
    const emitEmpty = sig !== '' && sig !== prevSig;
    prevSig = sig;

    const cells: React.ReactNode[] = [];
    let c = 0;
    while (c < totalCols) {
      const cell = grid[r][c];
      if (cell === null) {
        if (emitEmpty) {
          let extent = 1;
          while (c + extent < totalCols && grid[r][c + extent] === null)
            extent++;
          cells.push(
            <Td
              key={`e-${r}-${c}`}
              colSpan={extent}
              style={{borderRight: 'hidden'}}
            />
          );
          c += extent;
        } else {
          c++;
        }
      } else if (cell === 'covered') {
        c++;
      } else {
        cells.push(
          <Td
            key={`${r}-${c}`}
            rowSpan={cell.kind === 'action' ? cell.rowSpan : undefined}
            colSpan={cell.colSpan > 1 ? cell.colSpan : undefined}
          >
            {'label' in cell ? cell.label : null}
          </Td>
        );
        c++;
      }
    }
    rows.push(<tr key={r}>{cells}</tr>);
  }
  return rows;
}

const RecipeTable = ({recipe}: {recipe: Recipe}) => {
  const layout = computeLayout(compile(recipe));
  return (
    <Table>
      <tbody>{renderCells(layout)}</tbody>
    </Table>
  );
};

export default RecipeTable;
