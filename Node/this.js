console.log(a, fn);
function fn() {
  console.log("this", this);
}
var a = 1;
fn();
