# posthtml-md-element

A plugin for PostHTML to render markdown file into html.

Differences from other PostHTML markdown plugins

- markdown-it is used instead of marked
- a dash is included in the element name `<posthtml-md>`, which follows the naming convention of custom element

## Install

```
yarn add --dev @nonbili/posthtml-md-element
```

## Usage

HTML

```html
<body>
  <posthtml-md src="docs/element.html"></posthtml-md>
</body>
```

NodeJS

```js
posthtml()
  .use(require("@nonbili/posthtml-md-element")())
  .process(html)
  .then((result) => console.log(result.html))
```

Or `postcss.config.js`

```js
module.exports = {
  plugins: {
    "@nonbili/posthtml-md-element": {
    }
  }
}
```

## Optional Configs

- `root`: root path. Default to `./`
- `encoding`: default to `utf-8`
- `withMd`: a function `(md: MarkdownIt) => ()` to further customize MarkdownIt.

All other options are passed to [markdown-it](https://github.com/markdown-it/markdown-it#init-with-presets-and-options).
