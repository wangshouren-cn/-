//这里源码是有柯里化了的
function applyMiddleware(createStore, reducer, ...middleares) {
  let store = createStore(reducer),
    dispatch,
    MiddlewareAPI = {
      ...store,
      dispatch: () => dispatch(),
    };
  chain = middleares.map((m) => m(MiddlewareAPI));
  dispatch = compose(...chain)(store.dispatch);
  store.dispatch = dispatch;
  return store;
}
function promiseMiddleware(MiddlewareAPI) {
  return function (next) {
    return function (action) {/*...*/};
  };
}
function thunkMiddleware(MiddlewareAPI) {
  return function (next) {
    return function (action) {/*...*/};
  };
}

function loggerMiddleware(MiddlewareAPI) {
  return function (next) {
    return function (action) {/*...*/};
  };
}

const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((val, fn) => fn(val), fns.pop()(...args));
