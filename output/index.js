"use strict";
// string or number type define=================
let a;
a = "monir";
console.log(`Hello ${a}`);
// array define ===============================
let arr = [];
arr.push("monir", 33, { name: "shimul", age: 35 }, ["email", "monirshimul@gmail.com"]);
console.log("Array", arr);
let user;
user = { name: "monir", email: "monir@g.com" };
console.log(user);
// Function usages =======================
let myFunc = (a, b) => {
    console.log("a", a, b);
};
myFunc({ name: "shimul", email: "shimul@g.com" });
// Class Usage =====================================
class User {
    constructor(n, e) {
        this.name = n;
        this.email = e;
    }
    sayHi() {
        console.log(`Hello Mr. ${this.name}-${this.email} is your email address`);
    }
}
let playerData = [
    {
        name: "monir",
        email: "monir@gmail.com"
    },
    {
        name: "mehedi",
        email: "mehedi@gmail.com"
    },
    {
        name: "nahid",
        email: "nahid@gmail.com"
    }
];
const userOne = new User("Monir", "monir@gmail.com");
let allUserClass = [];
playerData.map((v, i) => {
    const user = new User(v.name, v.email);
    allUserClass.push(user);
});
console.log("All User", allUserClass);
