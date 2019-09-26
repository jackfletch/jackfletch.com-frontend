const visit = require(`unist-util-visit`);
const toHAST = require(`mdast-util-to-hast`);
const hastToHTML = require(`hast-util-to-html`);
const prune = require(`underscore.string/prune`);
const {
  getConcatenatedValue,
  cloneTreeUntil,
  findLastTextNode,
} = require(`./hast-processing`);

/**
 * Set of all Markdown node types which, when encountered, generate an extra to
 * separate text.
 *
 * @type {Set<string>}
 */
const SpaceMarkdownNodeTypesSet = new Set([
  `paragraph`,
  `heading`,
  `tableCell`,
  `break`,
]);

function getAST(markdownNode, remark) {
  const AST = getMarkdownAST(markdownNode, remark);
  return AST;
}

function getHTMLAst(markdownNode, remark) {
  const ast = getAST(markdownNode, remark);
  const htmlAst = toHAST(ast, {
    allowDangerousHTML: true,
    // handlers: { code: codeHandler }
  });

  return htmlAst;
}

function getExcerptAst(markdownNode, remark, {pruneLength}) {
  const fullAST = getHTMLAst(markdownNode, remark);
  if (!fullAST.children.length) {
    return fullAST;
  }

  const excerptAST = cloneTreeUntil(fullAST, ({root}) => {
    const totalExcerptSoFar = getConcatenatedValue(root);
    return totalExcerptSoFar && totalExcerptSoFar.length > pruneLength;
  });
  const unprunedExcerpt = getConcatenatedValue(excerptAST);
  if (
    !unprunedExcerpt ||
    (pruneLength && unprunedExcerpt.length < pruneLength)
  ) {
    return excerptAST;
  }

  const lastTextNode = findLastTextNode(excerptAST);
  const amountToPruneLastNode =
    pruneLength - (unprunedExcerpt.length - lastTextNode.value.length);
  lastTextNode.value = prune(lastTextNode.value, amountToPruneLastNode, `…`);
  return excerptAST;
}

function getExcerptHtml(markdownNode, remark, pruneLength) {
  const excerptAST = getExcerptAst(markdownNode, remark, {
    pruneLength,
  });
  const html = hastToHTML(excerptAST, {
    allowDangerousHTML: true,
  });
  return html;
}

function getExcerptMarkdown(markdownNode, pruneLength) {
  // TODO truncate respecting markdown AST
  const excerptText = markdownNode;
  return prune(excerptText, pruneLength, `…`);
}

function getMarkdownAST(markdownNode, remark) {
  const markdownAST = remark.parse(markdownNode);
  return markdownAST;
}

function getExcerptPlain(markdownNode, remark, pruneLength) {
  const ast = getAST(markdownNode, remark);
  const excerptNodes = [];
  visit(ast, node => {
    // don't show footnotes in plain text
    if (node.type === `footnoteDefinition`) {
      return visit.SKIP;
    }

    if (node.type === `text` || node.type === `inlineCode`) {
      excerptNodes.push(node.value);
    } else if (node.type === `image`) {
      excerptNodes.push(node.alt);
    } else if (SpaceMarkdownNodeTypesSet.has(node.type)) {
      // Add a space when encountering one of these node types.
      excerptNodes.push(` `);
    }
  });

  const excerptText = excerptNodes
    .join(``)
    .trim()
    .replace(/\n/gm, ' ');

  return prune(excerptText, pruneLength, `…`);
}

function getExcerpt(markdownNode, remark, {format, pruneLength}) {
  if (format === `HTML`) {
    return getExcerptHtml(markdownNode, remark, pruneLength);
  } else if (format === `MARKDOWN`) {
    return getExcerptMarkdown(markdownNode, pruneLength);
  }
  return getExcerptPlain(markdownNode, remark, pruneLength);
}

module.exports = getExcerpt;
