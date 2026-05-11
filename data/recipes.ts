/**
 * A recipe is a pipeline of steps. Each step's output feeds the next step
 * implicitly, so a linear recipe reads top-to-bottom with no cross-references.
 *
 * For recipes with parallel prep (whisk the dry while you cream the wet),
 * declare named `branches` — each branch is itself a mini pipeline — and
 * `merge` them back into the main pipeline at the step where they join.
 *
 * A step may:
 *   - `add` ingredients (literal strings),
 *   - `merge` named branches,
 *   - both,
 *   - or neither (just apply `then` to the running output, e.g. "crumble").
 *
 * The first step of any pipeline must have at least one `add` or `merge`
 * (there's no prior output to consume).
 */
export interface PipelineStep {
  add?: string[];
  merge?: string[];
  then: string;
}

export type Branch = PipelineStep[];

/**
 * Attribution for where a recipe came from. `kind` controls the prefix shown
 * to the reader ("Stolen from", "Adapted from", etc.) so the relationship to
 * the source is explicit.
 */
export type SourceKind = 'stolen' | 'adapted' | 'influenced' | 'original';

export interface Source {
  kind: SourceKind;
  text: string;
  url?: string;
}

export interface Recipe {
  title: string;
  slug: string;
  source: Source;
  branches?: Record<string, Branch>;
  pipeline: PipelineStep[];
}

const recipes: Recipe[] = [];

export default recipes;
