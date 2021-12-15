let user: object;

user = {
  name: "xx",
  age: 30,
};

// console.log(user.name)  error

interface User {
  name: string;
  age: number;
}

let user1: User = {
  name: "xx",
  age: 30,
};

user1.age = 10;
// user.gender = "male"  error
