"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// return이 없거나 return; 일 경우 대부분 void
// undefined는 return; 에 사용가능 하지만 거의 안씀
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
