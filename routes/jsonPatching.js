const jsonpatch = require("jsonpatch");
let mydoc = {
    "baz": "qux",
    "foo": "bar"
  };
  thepatch = [
    { "op": "replace", "path": "/baz", "value": "boo" }
  ]
  patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
  console.log(patcheddoc);