const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

module.exports = ({ root = "./", encoding = "utf-8", ...mdOptions } = {}) => {
  const md = new MarkdownIt(mdOptions);

  return tree => {
    if (!tree.parser) tree.parser = require("posthtml-parser");

    tree.match({ tag: "posthtml-md" }, node => {
      const src = path.resolve(root, node.attrs.src);
      const source = fs.readFileSync(src, encoding);
      const html = md.render(source);
      return {
        tag: false,
        content: tree.parser(html)
      };
    });
    return tree;
  };
};
