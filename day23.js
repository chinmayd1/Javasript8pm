// object literal 
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// amol.displayName()

// retrive 
// update 
// add
// delete
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:24,
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.age)
// chinmay.displayName()

// program 2


class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolC = new Person()
let chinmayC = new Person()
console.log(chinmayC.firstName)
console.log(chinmayC.lastName)
console.log(chinmayC.age)
chinmayC.displayName()

console.log(amolC)
console.log(chinmayC)

// updating properties outside the class
amolC.firstName = "amol"
amolC.lastName = "rao"
amolC.age = 45
amolC.displayName()
console.log(amolC)
amolC['city'] = "pune"
console.log(amolC)

// program 3

class PersonC {
    constructor(fn,ln,age){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolD = new PersonC("amolD","raoD",45)
let amolE = new PersonC("amolE","raoE",45)
console.log(amolE)
console.log(amolD)

// program 5
// setter and getter method 

class PersonR {

    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }

}
let amolR  = new PersonR()
console.log(amolR)
amolR.setFirstName('amolR')
amolR.setLastName("rao R")
console.log(amolR)
console.log(amolR.getFirstName())
console.log(amolR.getLastName())


// set and get keyword 
// setting the values like property 

let amolCa  = {
    firstName:"amolC",
    lastName:"raoC"
}
amolCa.firstName = "amolCA"
amolCa['city'] = "pune"



class PersonS {
    set firstN(fn){
        this.firstName = fn
    }
    get firstN(){
        return this.firstName
    }
    set lastN(ln){
        this.lastName = ln
    }
    get lastN(){
        return this.lastName
    }

}

let ninad = new PersonS()
ninad.firstN = "ninad"
ninad.lastN = "dani"
console.log(ninad)
console.log(ninad.firstN)
console.log(ninad.lastN)

let ar  = [11,22,33]

ar.length
ar.concat()