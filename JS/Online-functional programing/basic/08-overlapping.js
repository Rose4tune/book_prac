import {go, curry, pipe, reduce, take, map, filter, range, L, add, log} from '../fx.js';

/**
 * 즉시평가 함수 중첩 (immediate functions overlapping)
 * range, map, filter, take, reduce 중첩 사용
 */

go(
  range(10),
  map(n => n + 10),
  filter(n => n % 2),
  take(2),
  log
)



/**
 * 지연평가 함수 중첩 (lazy functions overlapping)
 * L.range, L.map, L.filter, take, reduce 중첩 사용
 */

go(
  L.range(10),
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(2),
  log
)

// log([...fx.L.map(a => a+10, fx.L.range(10))])
