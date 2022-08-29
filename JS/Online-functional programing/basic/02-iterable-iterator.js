const log = console.log;

// 기존 리스트 순회
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++){
  // log(list[i])
}

const str = 'abc';
for (var i = 0; i < str.length; i++){
  // log(str[i])
}


/**
 * 기존과 달라진 ES6에서의 리스트 순회
 * for i++
 * for of
 */

for (const a of list) {
  // log(a)
}
for (const a of str) {
  // log(a)
}



// Array, Set, Map을 통해 알아보기
log('Arr----------------');
const arr = [1, 2, 3]; // key 값[i]으로 접근 가능
let iter1 = arr[Symbol.iterator]();
iter1.next();
for (const a of iter1) log(a);

log('Set----------------');
const set = new Set([1, 2, 3]);
for (const a of set) log(a)

log('Map----------------');
const map = new Map([['a', 1], ['b', 2], ['c', 3]])
for (const a of map.keys()) log(a)
for (const a of map.values()) log(a)
for (const a of map.entries()) log(a)

/**
 * 이터러블/이터레이터 프로토콜
 * 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
 * 이터레이터: {value, done} 객체를 리턴하는 next()를 가진 값
 * 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규칙
 * querySelector도 이터러블/이터레이터를 따르다
 */

// 사용자 정의 이터러블을 통해 알아보기
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? {done: true} : {value: i--, done: false};
      },
      [Symbol.iterator]() {return this}
    }
  }
}
let iterator = iterable[Symbol.iterator]();
iterator.next()
for (const a of iterator) log(a);

// 전개 연산자
console.clear();
const a = [1, 2];
log([...a, ...arr, ...set, ...map.keys()]);
