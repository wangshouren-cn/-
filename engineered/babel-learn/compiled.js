import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";

var fn = function fn(num) {
  return num + 2;
};

new Promise(function () {
  console.log(1);
});
