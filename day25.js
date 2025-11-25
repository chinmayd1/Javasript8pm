
// single inheritance

// class Student {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(self.firstName + self.lastName)
//     }
// }

// class Teacher extends  Student {
//     constructor(fn,ln,sl){
//         super(fn,ln)
//         this.salary = sl

//     }
//     displaySalary(){
//         consmle.log(this.salary)
//     }
// }

// let amolT = new Teacher("amolT","raoT",1000)
// console.log(amolT.firstName)
// console.log(amolT.lastName)
// console.log(amolT.salary)
// amolT.displayName()
// amolT.displaySalary()

// multi-level
// class GrandFather{
//     constructor(fn,ln){
//         this.firstName  = fn 
//         this.lastName = ln
//     }
//     displayGName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {
//     constructor(fn,ln,ffn){
//         super(fn,ln)
//         this.fname = ffn
//     }
//     displayFName(){
//         console.log(this.fname + this.lastName)
//     }
// }

// class Son extends Father {
//     constructor(fn,ln,ffn,ssn){
//         super(fn,ln,ffn)
//         this.sname = ssn
//     }
//     displaySName(){
//         console.log(this.sname + this.lastName)
//     }
// }

// let chinmay  = new Son("manohar","deshpande","shirish","chinmay")
// console.log(chinmay.sname)
// console.log(chinmay.fname)
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)

// chinmay.displayGName()
// chinmay.displayFName()
// chinmay.displaySName()

// herarchical inheritance

class Mother {

    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }

    displayMName() {
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother {
    constructor(fn, ln,ssn){
        super(fn,ln)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}
class Daughter extends Mother {
     constructor(fn, ln,ddn){
        super(fn,ln)
        this.dname = ddn
    }
    displayDName(){
        console.log(this.dname + this.lastName)
    }
}

let chinmayS  = new Son("kanchan","deshpande","chinmay")
console.log(chinmayS.firstName)
console.log(chinmayS.lastName)
console.log(chinmayS.sname)
chinmayS.displaySName()
chinmayS.displayMName()

let gauriS = new Daughter("kanchan","deshpande","gauri")
console.log(gauriS.firstName)
console.log(gauriS.lastName)
console.log(gauriS.dname)
chinmayS.displayDName()
chinmayS.displayMName()