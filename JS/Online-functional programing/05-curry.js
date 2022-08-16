
import * as fx from './fx.js';

const log = console.log;

const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000}
];

/**
 * CURRY
 * 함수를 받아서 함수를 리턴
 * 인자를 받아서 받아두었던 함수를 리턴
 * 중첩함수의 좀 더 간결한 표현 가능
 */

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
// log(mult(1)(3))

const mult3 = mult(3);
// log(mult3(10));
// log(mult3(5));



/**
 * 기존 products 배열에서 가격이 특정한(<20000) 것만 골라서
 * 그 전체 합을 구하는 함수 reduce를 다시 가져와서 보면..
 */
log(fx.reduce(
  fx.add,
  fx.map(p => p.price,
    fx.filter(p => p.price < 20000, products))));

// >> go 적용 : 함수의 순서 바꿈
fx.go(
  products,
  products => fx.filter(p => p.price < 20000)(products),
  products => fx.map(p => p.price)(products),
  prices => fx.reduce(fx.add)(prices),
  log
);

// >> curry 적용 : 간결한 표현으로 바꿈 (map, filter, reduce에 curry 씌움)
// (인자의 중복 삭제, 바로 이전 인자가 다음 함수의 인자로 들어감)
fx.go(
  products,
  fx.filter(p => p.price < 20000),
  fx.map(p => p.price),
  fx.reduce(fx.add),
  log
);





/**
 * pipe 사용하여 함수 조합으로 함수 만들기
 * (함수 중복 없애기)
 */

const total_price = fx.pipe(
  fx.map(p => p.price),
  fx.reduce(fx.add)
)

const base_total_price = predi => fx.pipe(
  fx.filter(predi),
  total_price,

)

fx.go(
  products,
  base_total_price(p => p.price < 20000),
  log
);
fx.go(
  products,
  base_total_price(p => p.price >= 20000),
  log
);