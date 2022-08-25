// CURRY
export const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// GO
export const go = (...args) => reduce((a, f) => f(a), args);//앞선 함수의 결과 값을 뒷 함수에 인자로 전달하는 함수
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);

// PIPE
export const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs);

// COMMON FUNCs
export const add = (a, b) => a + b;
const isIterable = a => a && a[Symbol.iterator];
const nop = Symbol('nop');




// TAKE affiliation (take, find)
export const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  return function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => (res.push(a), res).length == l ? res : recur())
          .catch(e => e == nop ? recur() : Promise.reject(e))
      }
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  }();
});

export const takeAll = take(Infinity)

export const find = curry((f, iter) => go(
  iter,
  L.filter(f),
  take(3),
  ([a]) => a
));


const reduceF = (acc, a, f) =>
  a instanceof Promise ?
    a.then(a => f(acc, a), e => e == nop ? acc : Promise.reject(e)) :
    f(acc, a);

const head = iter => go1(take(1, iter), ([h]) => h);

// REDUCE affiliation (reduce, join)
export const reduce = curry((f, acc, iter) => {
  // if (!iter) {
  //   return reduce(f, head(iter = acc[Symbol.iterator]()), iter);
    // iter = acc[Symbol.iterator]();
    // acc = iter.next().value;
  // } else {
  //   iter = iter[Symbol.iterator]();
  // }
  if (!iter) return reduce(f, head(iter = acc[Symbol.iterator]()), iter);
  iter = iter[Symbol.iterator]();

  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      // acc = f(acc, a);
      acc = reduceF(acc, cur.value, f);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

export const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));













// LAZY FUNC
export const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

L.map = curry(function* (f, iter) {
  // for (const a of iter) yield f(a);
  for (const a of iter) yield go1(a, f);
});

L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    if (b instanceof Promise) yield b.then(b => b ? a : Promise.reject(nop));
    else if (b) yield a;
  };
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

