import * as fx from './fx.js';
const log = console.log;

  /**
   * map, filter 계열 함수들이 가지는 결합 법칙
   *  - 사용하는 데이터가 무엇이든지
   *  - 사용하는 보조 함수가 순수 함수라면 무엇이든지
   *  - 아래와 같이 결합한다면 둘 다 결과가 같다.
   * (지연성을 가진다)
   * 
   * [[mapping, mapping], [filtering, filtering], [mapping, mapping]]
   * =
   * [[mapping, filtering, mapping], [mapping, filtering, mapping]]
  */

  /**
   * reduce, take
   *  - 결과를 만드는 함수
   *  - 연산을 시작하는 함수
  */

  /**
   * join
   *  - reduce 계열의 함수
   */

  fx.L.entries = function* (obj) {
    for (const k in obj) yield [k, obj[k]];
  }

  const join = fx.curry((sep = ',', iter) =>
    fx.reduce((a, b) => `${a}${sep}${b}`, iter));

  const queryStr = fx.pipe(
    fx.L.entries,
    fx.L.map(([k, v])=> `${k}=${v}`),
    // function(a) {
    //   console.log(a);
    //   return a;
    // },
    join('&')
  );

  log(queryStr({limit: 10, offset: 10, type: 'notice'}));

  function* a(){
    yield 10;
    yield 11;
    yield 12;
    yield 13;
  }

  // 함수 join (iterable 값이면 가능)
  log(join(' !! ', [1,2,3,4]))
  log(join(' !! ', a()))

  // 메서드 join (배열만 가능/함수X)
  log([1,2,3,4].join(' - '))
  // log(a().join(' - '))





  /**
   * find
   *  - take 계열의 함수
   *  - 특정 값 하나만 꺼내는 함수
  */

  const users = [
    {age: 32},
    {age: 22},
    {age: 12},
    {age: 36},
    {age: 6},
    {age: 18},
    {age: 29},
    {age: 73}
  ];

  // 다 돌고 있음.. 비효율적
  // const find = (f, iter) => fx.go(
  //   iter,
  //   fx.filter(a => (console.log(a), f(a))),
  //   a => (console.log(a), a),
  //   fx.take(1),
  //   ([a]) => a
  // );

  // 결과를 미뤄서 하나의 값이 꺼내지면 필터를 하지않음
  const find = fx.curry((f, iter) => fx.go(
    iter,
    // fx.L.filter(a => (console.log(a), f(a))),
    // a => (console.log(a), a),
    fx.L.filter(f),
    fx.take(3),
    ([a]) => a
  ));

  log(find(u => u.age < 30)(users));

  fx.go(
    users,
    fx.L.map(u => u.age),
    find(n => n < 30),
    log
  )