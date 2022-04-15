//判断类型的方法 typeof instanceof Object.toString.call constructor

function deepClone(obj, weakMap = new WeakMap()) {
  //weakMap用来防止环状的对象出现死循环
  if (obj == null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new Regexp(obj);

  if (typeof obj !== "object") return obj;

  if (weakMap.has(obj)) return weakMap.get(obj); //检查缓存
  const newObj = new obj.constructor();
  weakMap.set(obj, newObj); //设置缓存

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    newObj[key] = deepClone(obj[key], weakMap);
  }
  return newObj;
}

const a = { b: {}, c: 1 };
a.d = a;
console.log(deepClone(a));
