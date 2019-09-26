const visit = require('unist-util-visit');

let codeSnippetIndex = 0;

function getCodeSnippetIndex() {
  return codeSnippetIndex++;
}

function resetCodeSnippetIndex() {
  codeSnippetIndex = 0;
}

module.exports = () => (tree, file) => {
  resetCodeSnippetIndex();
  visit(tree, 'element', node => {
    if (node.tagName === 'pre') {
      node.properties.id = `snippet-${getCodeSnippetIndex()}`;
    }
  });
  return tree;
};
