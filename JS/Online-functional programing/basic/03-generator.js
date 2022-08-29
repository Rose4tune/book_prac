const log = console.log;
/**
 * 제너레이터
 *   - 이터레이터이자 이터러블을 생성하는 함수
 *   - 순회하는 값을 문장으로 표현하는 함수
 *     >> 다양한 값을 순회하도록 할 수 있다(다형성이 높다)
 *   - 마지막 리턴값 지정 가능
 *   - 단 제너레이터를 순회하는 for문에서는 안보임
 */

function *gen(){
  yield 1;
  if (false) yield 2;
  yield 3;
  return 100;
}

let iter = gen();
// log(iter[Symbol.iterator]() == iter);
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());
// log(iter.next());

for (const a of gen()) log(a)




/**
 * 홀수 표현
 */
// function *odds(l){
//   for (let i = 0; i < l; i++) {
//     if (i % 2) yield i;
//   }
// }
// let iter2 = odds(10);
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());
// log(iter2.next());




/**
 * 무한 수열 표현 (next로 지정한 만큼까지만 무한으로 나옴)
 */
function *infinity(i = 0){
  while (true) yield i++;
}
function *limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}
function *odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}
// let iter4 = odds();
for (const a of odds(40)) log(a);

// let iter5 = limit(4, [1, 2, 3, 4]);
// log(iter5.next());
// log(iter5.next());
// log(iter5.next());
// log(iter5.next());


console.clear()
/**
 * 전개 연산자, 구조 분해, 나머지 연산자
 */
log(...odds(10))
log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
log(head);
log(tail);

const [a, b, ...rest] = odds(10);
log(a);
log(b);
log(rest);