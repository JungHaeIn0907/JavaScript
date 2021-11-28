// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

obj[key] = 'value';
console.log(obj[key]); // value