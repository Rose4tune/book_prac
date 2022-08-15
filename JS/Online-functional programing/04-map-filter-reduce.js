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
 * FILTER 함수
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



console.clear();


/**
 * REDUCE 함수
 */

