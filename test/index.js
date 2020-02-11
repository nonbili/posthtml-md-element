const assert = require("assert");
const posthtml = require("posthtml");

const plugin = require("..");

const input = `
before
<posthtml-md src="./test/fixture.md"></posthtml-md>
after
`;

const output = `
before
<h1>heading1</h1>
<pre><code>console.log()
</code></pre>

after
`;

async function test() {
  const res = await posthtml([plugin()]).process(input);
  assert.strictEqual(output, res.html);
  console.log("Test passed.");
}

test();
