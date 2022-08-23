// CURRY & GO & PIPE
export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
export const go = (...args) => reduce((a, f) => f(a), args);//앞선 함수의 결과 값을 뒷 함수에 인자로 전달하는 함수
export const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs);


// COMMON FUNCs
export const add = (a, b) => a + b;
const isIterable = a => a && a[Symbol.iterator];



// TAKE affiliation (take, find)
export const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if(res.length == l) return res;
  }
  return res;
});

export const takeAll = take(Infinity)

export const find = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(3),
  ([a]) => a
));


// REDUCE affiliation (reduce, join)
export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) acc = f(acc, a);
  return acc
});

export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));













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

L.entries = function* (obj) {
  for (const k in obj) yield [k, obj[k]];
}

L.flatten = function* (iter){
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
}

L.deepFlat = function* f(iter){
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
}

L.flatMap = curry(pipe(L.map, L.flatten));









// IMMEDIATE FUNC
export const range = l => {
  let i = -1;
  let res = [];
  while (++i < l) res.push(i);
  return res;
};

/**
 * ### L.map, L.filter 사용하여 map, filter 만들기###
 *  - 인수 받는 부분 go 함수로 대체
 *  - 첫 인수 다음 함수 내부로 정리
 *  - curry 인수 = L.map 인수
 *     >> (curry 인수 + go 함수) 합쳐서 pipe 함수로 변경 가능
 *  - pipe로 변경 후 중복되는 take(Infinity) 부분 공통함수로 묶기
 */
// export const map = curry((f, iter) => {
//   let res = [];
//   for (const a of iter) res.push(f(a));
//   return res;
// });
// export const map = curry((f, iter) => go(
//   iter,
//   L.map(f),
//   take(Infinity)
// ));
// export const map = curry((f, iter) => go(
//   L.map(f, iter),
//   take(Infinity)
// ));
export const map = curry(pipe(L.map, takeAll));
// console.log(map(a => a + 10, L.range(4)));


// export const filter = curry((f, iter) => {
//   let res = [];
//   for (const a of iter) if(f(a)) res.push(a)
//   return res
// });
export const filter = curry(pipe(L.filter, takeAll));
// console.log(filter(a => a % 2, range(4)));


export const flatten = pipe(L.flatten, takeAll);
export const flatMap = curry(pipe(L.map, flatten));