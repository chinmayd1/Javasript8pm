// program incorrect war
// class Student {
//     constructor(fn,ln,dob){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     salary = 1000
//     constructor(fn,ln,dob){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.displaySalary)
//     }
// }


// single inheritance - parent having constructor but no child constructor



// class Student {
//     constructor(fn,ln,dob){
//         this.firstName  = fn 
//         this.lastName = ln 
//         this.dob = dob
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

// }

// class Teacher extends Student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let t1 = new Teacher("amolT","RaoT","19/08/1989")

// console.log(t1.salary)
// t1.displaySalary()
// console.log(t1.firstName)
// console.log(t1.lastName)
// console.log(t1.dob)
// t1.displayName()

// program 3
// parent is having constructor and child is also having constructor



// single inheritance

class Student {
    constructor(fn,ln,dob){
        this.firstName  = fn 
        this.lastName = ln 
        this.dob = dob
    }
    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}

class Teacher extends Student {
    constructor(fn,ln,dob,sl){
        super(fn,ln,dob)
        this.salary = sl
    }
    displaySalary(){
        console.log(this.salary)
    }
   
}

let t2 = new Teacher("amolT2","raoR2","19/08/1990",1000)
console.log(t2.firstName)
console.log(t2.lastName)
console.log(t2.salary)
console.log(t2.dob)
t2.displayName()
t2.displaySalary()


// multi-level


// herarchical



