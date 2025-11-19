// object literal

let amol = {
    firstName:"amol",
    lastName:"rao",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol.firstName)
console.log(amol.lastName)
amol.displayName()


let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

// 100 object ----> 400 lines of code

// object without constructor
class Person {
    firstName = undefined
    lastName = undefined
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let chinmayC = new Person()
console.log(chinmayC)
chinmayC.displayName()
let amolC = new Person()
console.log(amolC.firstName)
console.log(amolC.lastName)
amolC.displayName()

amolC.firstName = "amol"
amolC['lastName'] = "rao"
console.log(amolC.firstName)
console.log(amolC.lastName)
amolC.displayName()

chinmayC.firstName = "chinmay C"
chinmayC['lastName'] = "deshpande"
console.log(chinmayC.firstName)
console.log(chinmayC.lastName)
chinmayC.displayName()

// setting value using constructor 

class PersonB{
    constructor(fn,ln,){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay2 = new PersonB("chinmay2","deshpande2")
console.log(chinmay2.firstName)
console.log(chinmay2.lastName)
chinmay2.displayName()
chinmay2.language = "marathi"
chinmay2.city = "pune"
console.log(chinmay2) 

let amol2 = new PersonB("amol2","rao2")
console.log(amol2)
amol2.displayName()

// setting the value using getter and setter method


class PersonC {
    setFirstName(fn){
        this.firstName  = fn
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
let amolD = new PersonC()
console.log(amolD)

amolD.setFirstName("amolD")
amolD.setLastName("raoD")
console.log(amolD)

console.log(amolD.getFirstName())
console.log(amolD.getLastName())

// setting value using get and set keyword