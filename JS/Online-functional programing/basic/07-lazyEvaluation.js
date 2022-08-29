import {go, curry, pipe, reduce, map, filter, add, log} from '../fx.js';


/**
 * 이터러블 중심 프로그래밍에서의 지연 평가
 *  -제때 계산법
 *  -느긋한 계산법
 *  -제너레이터/이터레이터 프로토콜을 기반으로 구현
 * (가장 필요할 떄까지 평가를 미루다가, 필요가 생기면 함수를 실행하는 것)
 * (평가를 미루는 성질을 가지고 평가순서를 달리 조작할 수 있는 이터레이터를 반환하는 제터레이터 함수)
 */



const L = {};

// L.map
L.map = function* (f, iter) {
  for (const a of iter) yield f(a);
}

var it = L.map(a => a + 10, [1, 2, 3])
log([...it])


// L.filter
L.filter = function* (f, iter) {
  for (const a of iter) if(f(a)) yield a;
}
var it = L.filter(a => a % 2, [1, 2, 3, 4])
log([...it])