import {go, curry, pipe, reduce, map, filter, add} from '../fx.js';

const log = console.log;
/**
 * RANGE 함수
 * 숫자 하나를 받고, 그 숫자의 크기만한 배열을 리턴하는 함수
 * 
 * ##작동원리
 * >> Array를 미리 다 만든 다음에 배열로 전달해서 동작함
 *  1. Array 만듬
 *  2. Array를 iterator로 만듬
 *  3. next로 순회함
 */

const range = l => {
  let i = -1;
  let res = [];
  while (++i < l) {
    // log(i, 'range')
    res.push(i);
  }
  return res;
};

var list = range(4);
log(list)
// log(reduce(add, list))



/**
 * 느긋한 range
 * 배열 형태가 아닌(값이 완전히 평가되지 않은) 채로 있다가
 * 실제 reduce 안에서 해당하는 값이 진짜 필요할 때 까지 기다렸다가 평가를 내린 후 값을 꺼냄
 * 
 * ##작동원리
 * >> Array를 만들지 않고 필요한 것만 하나씩 값을 꺼냄
 *  1. 실행 됬을 때 iterator를 만듬
 *     (그 자체가 자기 자신을 그대로 리턴하는 iterable 임)
 *  2. 해당 함수 실행
 *  3. 이미 만들어진 iterable 리턴 후 순회
 */
const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    // log(i, 'L.range')
    yield i;
  }
};

var list = L.range(4);
// log(reduce(add, list))





console.clear()
/**
 * range와 L.range 테스트
 */

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

// test('L.range', 10, () => reduce(add, L.range(10000000)))
// test('range', 10, () => reduce(add, range(10000000)))

/**
 * take 함수
 * 많은 값을 받아서 짤라주는 함수
 */

const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if(res.length == l) return res;
  }
  return res;
});

console.time('range');
// log(take(5, range(100000)));
go(
  range(10000),
  // take(5),
  reduce(add),
  log);
console.timeEnd('range');


console.time('');
// log(take(5, L.range(Infinity)));
go(
  L.range(10000),
  // take(5),
  reduce(add),
  log);
console.timeEnd('');