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

const recipes: Recipe[] = [
  {
    title: "Hummus",
    slug: "hummus",
    source: {
      kind: "original",
      text: "Julie McLemore",
    },
    pipeline: [
      {
        add: ["1 c chickpeas", "1 T cumin", "2 t salt", "1 t pepper", "2 t garlic"],
        then: "blend",
      },
      { add: ["½ c tahini"], then: "blend" },
      {
        add: ["2 T lemon juice", "cold water"],
        then: "blend, adding water until desired consistency",
      },
      { add: ["zatar", "sumac"], then: "add spice topping" },
    ],
  },
  {
    title: "Loubia",
    slug: "loubia",
    source: {
      kind: "stolen",
      text: "NYT Cooking",
      url: "https://cooking.nytimes.com",
    },
    pipeline: [
      {
        add: ["3 T olive oil", "2 medium yellow onions, halved and sliced"],
        then: "saute until translucent, ~7 mins",
      },
      {
        add: [
          "1 lb cannellini beans, soaked overnight and drained",
          "½ (14 oz) can crushed San Marzano tomatoes (or 2 medium tomatoes, cored and diced)",
          "4 cloves garlic, peeled and grated",
          "3 T finely chopped parsley",
          "2 t sweet paprika",
          "1 t ground ginger",
          "1 t ground turmeric",
          "1½ t sea salt",
          "2½ c vegetable stock",
        ],
        then: "simmer 75-85 mins, until beans are fully cooked and soft",
      },
      {
        add: [],
        then: "adjust seasoning",
      },
      {
        add: ["bread"],
        then: "serve",
      },
    ],
  },
];

export default recipes;
