const log = console.log;

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];





/**
 * MAP 함수
 */
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

log(map(p => p.name, products));
log(map(p => p.price, products));

// let names = [];
// for (const p of products) {
//   names.push(p.name)
// }

// let prices = [];
// for (const p of products) {
//   prices.push(p.price)
// }

//이터러블 프로토콜을 따른 map의 다형성
log([1,2,3].map(a => a + 1));
// log(map(el => el.nodeName, document.querySelectorAll('*')));

function* gen(){
  yield 2;
  if (false) yield 3;
  yield 4;
  yield 5;
}
log(map(a => a * a, gen()))


let m = new Map();
m.set('a', 10);
m.set('b', 20);
log(new Map(map(([k, a]) => [k, a * 2], m)))





/**
 * FILTER (거르는) 함수
 */

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if(f(a)) res.push(a)
  }
  return res
}

log(...filter(p => p.price < 20000, products))
log(...filter(p => p.price >= 20000, products))

// let under20000 = [];
// for (const p of products) {
//   if(p.price < 20000) under20000.push(p);
// }

// let over20000 = [];
// for (const p of products) {
//   if(p.price >= 20000) over20000.push(p);
// }

//이터러블 프로토콜을 따른 filter의 다형성
log(filter(n => n % 2, [1, 2, 3, 4]));
log(filter(n => n % 2, function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}()));




/**
 * REDUCE (줄이는, 합치는) 함수
 */
const nums = [1, 2, 3, 4, 5];

// let total = 0;
// for (const n of nums) {
//   total = total + n;
// }

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc
}

const add = (a, b) => a + b;

log(reduce(add, 0, nums))
log(reduce(add, nums))

log(reduce(
  (total_price, products) => total_price + products.price,
  0,
  products));






/**
 * MAP, FILTER, REDUCE 중첩 함수
 */

log(reduce(
  add,
  map(p => p.price,
    filter(p => p.price < 20000, products))));
    
log(reduce(
  add,
  filter(n => n >= 20000,
    map(p => p.price, products))));







      

/**
 * 패턴 함수 (코드를 값으로 다루어 표현력 높이기)
 * go : 인자들을 받아서 하나의 값으로 축약을 해나간다. (함수의 순서를 뒤바꿈)
 * pipe : 함수들이 나열되있는 합성된 함수를 만든다. (함수를 리턴하는 함수)
 * compose
 */
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs) //내부에서 go를 사용하는 함수



go (
  add(0, 1),
  // a => a + 1,
  a => a + 10,
  a => a + 100,
  log);

const f = pipe(
  (a, b) => a + b,
  a => a + 10,
  a => a + 100);

log(f(0, 1))


go(
  products,
  products => filter(p => p.price < 20000, products),
  products => map(p => p.price, products),
  prices => reduce(add, prices),
  log
);
