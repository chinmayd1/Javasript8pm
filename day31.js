
// Closures 

function additionA(x, y) {
    console.log(x + y) // 15
    return x + y
    console.log("hello")
}
let e2 = additionA(12, 3)
console.log(e2)


function additionB() {
    let x = 10
    let y = 5
    return function () {
        console.log(x + y)
    }
}
let fn = additionB()

// let fn = function () {
//     console.log(x + y) // NaN
// }
fn()


// actual difference arrow function and function expression or declaration

// var firstName = "vijeet"
// var lastName  = "dani"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         // this --> info
//         console.log(this.firstName + this.lastName)
//         let displayName2 = function(){
//             // this --> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info.displayName()


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         // this --> info
//         console.log(this.firstName + this.lastName)
        
//         let displayName2 = ()=>{
//             // this --> parent scope ---> info
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info.displayName()

// this --> window
// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:()=>{
//         // this --> parent scope --> window
//         console.log(this.firstName + this.lastName)
        
//         let displayName2 = ()=>{
//             // this --> parent scope --> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info.displayName()


var fnn = "vijeet"
var lnn = "dani"

// info ---> window
let info = {
    fnn:"chinmay",
    lnn:"deshpande",
    displayName:()=>{
        // this - parent --window
        console.log(this.fnn + this.lnn)
        let displayName2 = ()=>{
            // this - parent --->  window
            console.log(this.fnn + this.lnn)
        }
        displayName2()
    }

}

info.displayName()



