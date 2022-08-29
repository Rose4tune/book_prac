import {go, curry, pipe, reduce, take, takeAll, map, filter, range, L, add, log} from '../fx.js';

/**
 * 2차원 배열 다루기
 */

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10]
];

go(arr,
  L.flatten,
  L.filter(a => a % 2),
  L.map(a => a * a),
  take(4),
  reduce(add),
  log
)



console.clear();

/**
 * 지연성 / 이터러블 중심 프로그래밍 실무적인 코드
 */
var users = [
  {name: 'a', age: 21, family: [
    {name: 'a1', age: 34},
    {name: 'a2', age: 17},
    {name: 'a3', age: 75},
    {name: 'a4', age: 23}
  ]},
  {name: 'b', age: 26, family: [
    {name: 'b1', age: 2},
    {name: 'b2', age: 73},
    {name: 'b3', age: 12},
    {name: 'b4', age: 63}
  ]},
  {name: 'c', age: 16, family: [
    {name: 'c1', age: 45},
    {name: 'c2', age: 64}
  ]},
  {name: 'd', age: 11, family: [
    {name: 'd1', age: 24},
    {name: 'd2', age: 76},
    {name: 'd3', age: 14},
    {name: 'd4', age: 56}
  ]}
];


go(users,
  L.map(u => u.family),
  L.flatten,
  L.filter(u => u.age < 20),
  L.map(u => u.age),
  // take(2),
  takeAll,
  // reduce(add),
  log
)



/**
 * 결론?! 함수형 프로그래밍이란?
 * >> 추상적으로 리습(lisp)하면서 프로그래밍하겠다.
 * 
 * 그렇다면...
 * LISP(리습, 리스프)이란?
 * (LISt Processor / Lots of Irritating Superfluous Parentheses)
 */

// 대표적인 함수형 언어, 표현식 지향 언어

// 초기 리스프의 데이터형은 Atom과 리스트로 구분됨
//  - Atom(불변값) : 상수, 심볼
//  - 리스트(변수) : 리스프의 기본 자료형 (Atom 또는 다른 리스트를 원소로 포함하며 유한한 길이를 가짐)

// 더 자세한건 나무위키에서 보는걸로..
// https://namu.wiki/w/LISP