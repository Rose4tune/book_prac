const apply1 = f => f(1)
const add2 = a => a + 2

console.log(apply1(add2))
console.log(add2(3))


const f1 = () => () => 1
console.log(f1()())