/**
 * 일급 함수 : 함수가 값으로 다뤄질 수 있다.
 * 고차함수 : 함수를 값으로 다루는 함수
 * */ 

/**
 * 함수를 인자로 받아서 실행하는 함수 (apply1, times)
 */
const apply1 = f => f(1)
const add2 = a => a + 2

const f1 = () => () => 1

const times = (f, n) => {
  let i = -1;
  while(++i < n) f(i);
}

times(a => console.log(a + 10), 3)

/**
 * 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수) 
 */
const addMaker = a => b => a + b
const add10 = addMaker(10);
console.log(add10(5))
console.log(add10(10))