let a1 = 10
let a2  = 5
let a3 = 3 

if(a1 > a2 && a1 > a3){
    console.log("a1 is greater")
}
else if(a2 > a1 && a2 > a3){
    console.log("a2 is greater")
} 
else {
    console.log("a3 is greater")
}

// program 2

// tenary operator
// condition ? statement1 execute : statement 2

let a11 = 10
let a22 = 50
a11 > a22 ? console.log("a11 is greater"):console.log("a2 is greater")
// if(a11 > a22){
//     console.log("a11 is greater")
// }
// else {
//     console.log("a22 is greater")
// }

// program 3

let age = 17
let q2 = age >= 18 ? "can drive":"cannot drive" 
console.log(q2)

// scenario 
// haveVehcile is true and age greaterThanEighteen true 
// if both are true i can drive vehicle else cannot drive

let haveVehcile = true
let ageD = 17
if( haveVehcile &&  ageD >= 18){
    console.log("can drive")
}
else {
    console.log("cannot drive")
}

// condition ? statement1:statment2
let q3 = haveVehcile &&  ageD >= 18 ? "can drive":"cannot drive"
console.log(q3)


// nested if example


let x1 = 100
let x2 = 50
let x3 = 200

// if(x1 > x2){
//     if(x1 > x3){
//         console.log("x1 is greater")
//     }
//     else {
//         console.log('x3 is greater')
//     }
// }
// else if(x2 > x3){
//     console.log('x2 is greater')
// }
// else {
//     console.log("x3 is greater")
// }






