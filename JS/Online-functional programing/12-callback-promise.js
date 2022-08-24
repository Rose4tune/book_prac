import * as fx from './fx.js';
const log = console.log;

/**
 * promise 와 callback 의 차이점!!
 *  - promice라는 클래스를 통해 만들어진 인스턴스를 반환하는데, 비동기상황을 일급값(대기, 성공, 실패)으로 다룬다.
 *  - 대기되어지고 있는 값을 만든다*0*!!!!
 *    >> 비동상황에 대한 값을 만들어서 리턴을 한다!!!
 * 
 * Promise 특장
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
log(b) // Promise{<resolved>: 25} (비동기 상황도 값으로 평가됨)




// 일급 활용
const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 100))

// const go1 = (a, f) => f(a); // 동기적 값만 처리 가능
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a); // 비동기 값도 처리 가능
const add5 = a => a + 5;

const n1 = 10; //동기
go1(go1(n1, add5), log);

const n2 = delay100(10); //비동기
go1(go1(n2, add5), add5)










/**
 * 함수 합성
 *  >> f(g(x))
 * 
 * 모나드 : 함수 합성을 안전하게 하는 도구
 *  >> []
 * 
 * promise
 * 비동기(대기)가 일어난 상황에서의 함수합성을 안전히 하려는 성질이 있다.
 */

const g = a => a + 1;
const f = a => a * a;

log(f(g(1))) // 유의미한 값
log(f(g())) // 외부에 영향을 주고싶지 않음에도 불구하고 출력이 된다

// [1].map(g).map(f).forEach(r => log(r))
// log([1, 2, 3, 4].filter(a => a % 2).map(g).map(f))
log(Array.of(1).filter(a => a % 2).map(g).map(f));

// Promise.resolve(2).then(g).then(f).then(r => log(r));
// new Promise(resolve => setTimeout(() => resolve(4), 10)).then(g).then(f).then(r => log(r));








console.clear();


/**
 * Kleisli Composition
 * 
 * 오류가 있을 수 있는 상황에서의 함수합성을 안전하게하는 규칙
 * 상태, 효과, 외부세상의 상황 >> 함수합성에 영향미침
 *  >> 이러한 것을 해결하기 위한 함수합성
 */

// f(g(x)) = f(g(x)) 순수 수학적 함수에서는 이게 맞으나,
// f(g(x)) = g(x) >> g함수나 x에 문제가 생겼을 때, f를 합성해도 합성하지 않은 값과 같게끔 하는것

const users = [
  {id: 1, name: 'aa'},
  {id: 2, name: 'bb'},
  {id: 3, name: 'cc'},
];

const getUserById = id =>
  fx.find(u => u.id == id, users) || Promise.reject('없어요!!');

const f1 = ({name}) => name;
const g1 = getUserById;
const fg1 = id => f1(g1(id));

const r = fg1(2);
// log(r) // bb

const r2 = fg1(2);
// log(r2) // error


const fg2 = id => Promise.resolve(id).then(g1).then(f1);
fg2(2).then(log)

users.pop();
users.pop();

fg2(2).then(log)