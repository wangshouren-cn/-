function mockNew(constructor, ...args) {
  const _this = Object.create(constructor.prototype);
  const execRes = constructor.call(_this, ...args);
  if (execRes != null && typeof execRes === "object") return execRes;
  return _this;
}
