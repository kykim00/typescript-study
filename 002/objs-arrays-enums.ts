enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person =
  // : {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string]; // tuple 배열의 크기와 값의 유형이 정해져있을 때
  // }
  {
    name: "kim",
    age: 20,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };

// person.role.push("admin");   -> [2, 'author', 'admin']
// person.role[1] = 10;
console.log(person.role);
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  error
}

if (person.role === Role.ADMIN) {
  console.log("is author");
}
