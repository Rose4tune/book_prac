import * as fx from './fx.js';
const log = console.log;

/**
 * 즉시평가 함수 중첩 (immediate functions overlapping)
 * range, map, filter, take, reduce 중첩 사용
 */

fx.go(
  fx.range(10),
  fx.map(n => n + 10),
  fx.filter(n => n % 2),
  fx.take(2),
  log
)



/**
 * 지연평가 함수 중첩 (lazy functions overlapping)
 * L.range, L.map, L.filter, take, reduce 중첩 사용
 */

 fx.go(
  fx.L.range(10),
  fx.L.map(n => n + 10),
  fx.L.filter(n => n % 2),
  fx.take(2),
  log
)

// log([...fx.L.map(a => a+10, fx.L.range(10))])
