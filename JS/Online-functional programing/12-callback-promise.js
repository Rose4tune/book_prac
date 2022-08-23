import * as fx from './fx.js';
const log = console.log;

/**
 * promice 와 callback 의 차이점!!
 *  - promice라는 클래스를 통해 만들어진 인스턴스를 반환하는데, 비동기상황을 일급값(대기, 성공, 실패)으로 다룬다.
 *  - 대기되어지고 있는 값을 만든다*0*!!!!
 *    >> 비동상황에 대한 값을 만들어서 리턴을 한다!!!
 * 
 * 비동기 상황이 값이다
 *  >> 함수에게 전달 가능
 *  >> 해당하는 값이 어떤 값인지 확인 가능(promice인지 아닌지 확인 가능)
 */


// CALLBACK
function add10(a, callback) {
  setTimeout(() => callback(a + 10), 100);
}

var a = add10(5, res => {
  add10(res, res => {
    add10(res, res => {
      // log(res);
    });
  });
});
// log(a) // undefind



// PROMISE
// 일급
function add20(a) {
  return new Promise(resolve => setTimeout(() => resolve(a + 20), 100))
}

var b = add20(5)
  .then(add20)
  .then(add20)
  // .then(log);
log(b) // Promice{<resolved>: 25} (비동기 상황도 값으로 평가됨)


console.clear();


// 일급 활용

const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 100))

// const go1 = (a, f) => f(a); // 동기적 값만 처리 가능
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a); // 비동기 값도 처리 가능
const add5 = a => a + 5;

log(go1(10, add5))
log(delay100(10), add5) //