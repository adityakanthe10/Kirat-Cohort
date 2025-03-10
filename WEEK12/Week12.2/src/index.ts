import { z } from "zod";
// interface User {
//   age: number;
//   name: string;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// const age = sumOfAge(
//   { name: "Aditya", age: 23 },
//   { name: "Abhijeet", age: 23 }
// );

// console.log("age", age);

// PICK

interface User {
  name: string;
  age: number;
  email: string;
  createdAt: Date;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

function updateUser(updateProps: UpdateProps) {
  console.log("Pick", updateProps);
}

updateUser({
  name: "aditya",
  age: 23,
  email: "adityakanthe10@gmail.com",
});

// PARTIAL

type updatePropsOptional = Partial<UpdateProps>;

function updateUserOptional(updatePropspartial: updatePropsOptional) {
  console.log("Partial", updatePropspartial);
}

updateUserOptional({
  name: "partialaditya",
  age: 23,
});

// READONLY

interface Config {
  readonly endpoint: string;
  readonly apikey: string;
}

const Config: Readonly<Config> = {
  endpoint: "",
  apikey: "",
};

// RECORDS

type UsersAge = {
  [key: string]: number;
};

type UsersRecord = Record<string, number>;

function updatePropsRecord(users: UsersRecord) {
  console.log("Records", users);
}
updatePropsRecord({
  abc: 1,
});

// MAP

interface SignUp {
  id: string;
  name: string;
}

const signUpMap = new Map<string, SignUp>();
signUpMap.set("abc", { id: "1", name: "aditya" });
signUpMap.set("def", { id: "2", name: "abhijeet" });
console.log("Map", signUpMap.get("abc"));

// EXCLUDE

type Eventt = "click" | "mousemove" | "scroll";
type ExcludeEvent = Exclude<Eventt, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`handling event: ${event}`);
};

handleEvent("click");
// handleEvent("scroll");

// Z.infer in ZOD Schema
const A = z.string();
type A = z.infer<typeof A>;

// const u: A = 12;
const v: A = "uasd";

console.log("zod qu", v);
