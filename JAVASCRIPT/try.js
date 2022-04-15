function foo() {
  throw new Error("error");
}

try {
  foo();
} catch (e) {
  console.log("***************", e);
}
