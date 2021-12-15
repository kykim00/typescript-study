let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// 튜플
let b: [string, number];
b = ["z", 1];
// b = [1, 'z'];     error
b[0].toLowerCase();
// b[1].toLowerCase();   error

// void : 반환값이 없을 때

function sayHello(): void {
  console.log("hello");
}

// never : error를 반환하거나 영원히 끝나지 않는 함수일 때

function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}

// enum : 비슷한 값들 끼리 묶여있을 때
// 값이 정해지지 않으면 이전 값 + 1
enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

// myOs의 타입은 Os 이다.
// Window, Ios, Android만 입력 가능
let myOs: Os;
myOs = Os.Window;

// null, undefined
let c: null = null;
let d: undefined = undefined;
