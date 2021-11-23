
// string or number type define=================
let a: string | number;
a = "monir"
console.log(`Hello ${a}`)

// array define ===============================
let arr: (string | number | { name: string, age: number } | string[])[] = [];
arr.push("monir", 33, { name: "shimul", age: 35 }, ["email", "monirshimul@gmail.com"])
console.log("Array", arr)

// type Usages ==============================

type funcPara = {
    name: string,
    email: string
}

let user: funcPara;

user = { name: "monir", email: "monir@g.com" }
console.log(user)

// Function usages =======================

let myFunc = (a: funcPara, b?: string) => {
    console.log("a", a, b)
}

myFunc({ name: "shimul", email: "shimul@g.com" })


// Class Usage =====================================

class User {
    name: string
    email: string

    constructor(n: string, e: string) {
        this.name = n
        this.email = e

    }

    sayHi() {
        console.log(`Hello Mr. ${this.name}-${this.email} is your email address`)
    }
}

type userType = {
    name: string
    email: string
}

let playerData: userType[] = [
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
]

const userOne = new User("Monir", "monir@gmail.com")
console.log("userOne",userOne.sayHi())
let allUserClass: User[] = []; 
playerData.map((v,i)=>{
    const user = new User(v.name, v.email)
    allUserClass.push(user)

})

console.log("All User", allUserClass[2].sayHi())



