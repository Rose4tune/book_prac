import * as fx from './fx.js';
const log = console.log;
const L = {};

const ex1 = [[1, 2], 3, 4, [5, 6], [7, 8, 9]];
const ex2 = [[1, 2], 3, 4, [5, 6, [7, 8, 9, [10, 11]]]];

/**
 * L.flatten
 * 다중 배열을 일차원 배열로 변형하는 이터레이터를 리턴하는 함수
 * 배열 안의 모든 배열을 펼쳐서 하나의 배열로 만드는 함수
 */

const isIterable = a => a && a[Symbol.iterator];
L.flatten = function* (iter){
  for (const a of iter) {
    // if (isIterable(a)) for (const b of a) yield b;

    // yield* a = for (const a of iter) yield a
    // >> 같은 의미임!! (단, a의 값이 iterable 일 때)
    // 따라서 아래와 같이 변경 가능
    if (isIterable(a)) yield* a;
    else yield a
  }
}

log([...L.flatten(ex1)]);
log(fx.take(3, L.flatten(ex1)));



/**
 * flatten
 */

const flatten = fx.pipe(L.flatten, fx.takeAll);
log(flatten(ex1))


/**
 * L.deepFlat
 * 깊은 iterable을 모두 펼치는 함수
 */

L.deepFlat = function* f(iter){
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
}

log([...L.deepFlat(ex2)])


console.clear();


/**
 * L.flatMap
 * 2차원 배열 안의 내부 값을 변화를 주어서 사용가능
 * 
 * 기본 메서드 flatMap (Array만 사용 가능)
 */

L.flatMap = fx.curry(fx.pipe(fx.L.map, L.flatten));

const flatMap = fx.curry(fx.pipe(fx.L.map, flatten));


var it = L.flatMap(a => a, [[1, 2], [3, 4], [5, 6], [7, 8, 9]]);
log([...it])


log(flatMap(a => a, [[1, 2], [3, 4], [5, 6, 7, 8]]));
log(flatMap(fx.L.range, fx.map(a => a + 1, [1, 2, 3])));

var it = L.flatMap(fx.L.range, fx.map(a => a + 1, [1, 2, 3]));
log(it.next());
log(it.next());
log(it.next());

log(fx.take(3, it))