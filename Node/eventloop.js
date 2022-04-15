const fs = require("fs");
fs.readFile("./note.md", "utf8", () => {
  setTimeout(() => {
    console.log(5);
  });
  setImmediate(() => {
    console.log(3);
  });
  setImmediate(() => {
    console.log(4);
  });
});

setTimeout(() => {
  console.log(1);
}, 0);
setImmediate(() => {
  console.log(2);
});
