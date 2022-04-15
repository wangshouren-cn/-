// function* read() {
//   var a = yield 1;
//   console.log("a", a);
//   var b = yield 2;
//   console.log("b", b);
//   var c = yield 3;
//   console.log("c", c);
// }
// let it = read();

// {
//   let { value, done } = it.next(0); //第一次传的参数无意义
//   console.log(value, done); //1 false
// }
// {
//   let { value, done } = it.next(1); //a 1
//   console.log(value, done); //2 false
// }
// {
//   let { value, done } = it.next(2); //b 2
//   console.log(value, done); //3 false
// }
// {
//   let { value, done } = it.next(3); //c 3
//   console.log(value, done); //undefined true
// }

"use strict";

// const regeneratorRuntime = {
//   mark(fn) {
//     return fn;
//   },
//   wrap(fn, mark) {
//     let context = {
//       prev: 0,
//       next: 0,
//       stop() {
//         this.done = true;
//       },
//       done: false,
//     };
//     return {
//       next(arg) {
//         context.sent = arg;
//         const value = fn(context);
//         return {
//           value,
//           done: context.done,
//         };
//       },
//     };
//   },
// };

// var _marked = /*#__PURE__*/ regeneratorRuntime.mark(read);

// function read() {
//   var a, b, c;
//   return regeneratorRuntime.wrap(function read$(_context) {
//     while (1) {
//       switch ((_context.prev = _context.next)) {
//         case 0:
//           _context.next = 2;
//           return 1;

//         case 2:
//           a = _context.sent;
//           console.log("a", a);
//           _context.next = 6;
//           return 2;

//         case 6:
//           b = _context.sent;
//           console.log("b", b);
//           _context.next = 10;
//           return 3;

//         case 10:
//           c = _context.sent;
//           console.log("c", c);

//         case 12:
//         case "end":
//           return _context.stop();
//       }
//     }
//   }, _marked);
// }

// function* read() {
//   var a = yield 1;
//   console.log("a", a);
//   var b = yield 2;
//   console.log("b", b);
//   var c = yield 3;
//   console.log("c", c);
// }

function read() {
  let next = 0;
  var a, b, c;
  
  return {
    next(arg) {
      switch (next) {
        case 0:
          next = 1;
          return { value: 1, done: false };
        case 1:
          a = arg;
          console.log("a", a);
          next = 2;
          return { value: 2, done: false };
        case 2:
          b = arg;
          console.log("b", b);
          next = 3;
          return { value: 3, done: false };
        case 3:
          c = arg;
          console.log("c", c);
          next = null;
          return { value: undefined, done: true };
        default:
          return { value: undefined, done: true };
      }
    },
  };
}

var it = read();
{
  var _it$next = it.next(0),
    value = _it$next.value,
    done = _it$next.done; //第一次传的参数无意义

  console.log(value, done); //1 false
}
{
  var _it$next2 = it.next(1),
    _value = _it$next2.value,
    _done = _it$next2.done; //a 1

  console.log(_value, _done); //2 false
}
{
  var _it$next3 = it.next(2),
    _value2 = _it$next3.value,
    _done2 = _it$next3.done; //b 2

  console.log(_value2, _done2); //3 false
}
{
  var _it$next4 = it.next(3),
    _value3 = _it$next4.value,
    _done3 = _it$next4.done; //c 3

  console.log(_value3, _done3); //undefined true
}
