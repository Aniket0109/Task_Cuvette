const jsonpatch = require("jsonpatch");
mydoc = {
    "baz": "qux",
    "foo": "bar"
  };
  thepatch = [
    { "op": "replace", "path": "/baz", "value": "boo" }
  ]
  patcheddoc = jsonpatch.apply_patch(mydoc, thepatch);
  console.log(patcheddoc);
  // patcheddoc now equals {"baz": "boo", "foo": "bar"}}