// CURRY FUNC
export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);


// IMMEDIATE FUNC
export const range = l => {
  let i = -1;
  let res = [];
  while (++i < l) res.push(i);
  return res;
};

export const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) res.push(f(a));
  return res;
});

export const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) if(f(a)) res.push(a)
  return res
});


// LAZY FUNC
export const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
  for (const a of iter) yield f(a);
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) if(f(a)) yield a;
});







// TAKE affiliation
export const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if(res.length == l) return res;
  }
  return res;
});

export const find = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(3),
  ([a]) => a
));

// REDUCE affiliation
export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) acc = f(acc, a);
  return acc
});

export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));


// COMMON FUNCs
export const add = (a, b) => a + b;


// GO & PIPE FUNC
export const go = (...args) => reduce((a, f) => f(a), args);//앞선 함수의 결과 값을 뒷 함수에 인자로 전달하는 함수
export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);











