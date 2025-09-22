

// let a  = 10
// console.log(a)
// a = 1000
// console.log(a)


// const v = 1000
// console.log(v)


// Arithmetic operation
//  + , - ,*, / , %

let a1 = 8
let a2 = 4

console.log(a1 + a2)
console.log(a1 - a2)
console.log(a1 * a2)
console.log(a1 / a2)
console.log(a1 % a2)


// types 
let age = 10
console.log(age)
console.log(typeof age)
// 10 , -10 ,10.5 , -100.7

let candrive = true 
console.log(candrive)
console.log(typeof candrive)
// true or false


let c = "chinmay"
console.log(c)
console.log(typeof c)
// "a", '1',`33` ,`21324fdf sdf`

// comparison operation 

console.log(typeof 10) // number   10
console.log(typeof '10') // string 10


// expression < expression  ---> boolean ---> true or false 
// < , > , <= ,>=
// == , !=  ---> value
// === , !== ---> value and type 

console.log(3 === '3')
console.log(3 === 3)
console.log(3 !== '3')
console.log(3 !== 3)
console.log(3 == '3')
console.log(3 == 3)
console.log(3 > 1)
console.log(3 < 1)
console.log(3 != 1)
console.log(3 == 1)
console.log(3 >= 3)
console.log(3 <= 3)

// logical operators 

// && 

//true       &&     true    -----------> true
//false      &&     true    -----------> false
//true      &&      false    -----------> false
//false      &&     false   -----------> false

console.log(3 == 3   &&  2 == 2)
console.log(3 != 3   &&  2 == 2)
console.log(3 == 3   &&  2 != 2)
console.log(3 != 3   &&  2 != 2)


// ||

//true       ||    true    -----------> true
//false      ||    true    -----------> true
//true       ||     false    -----------> true
//false      ||    false   -----------> false

console.log(3 == 3   ||  2 == 2)
console.log(3 != 3   ||  2 == 2)
console.log(3 == 3   ||  2 != 2)
console.log(3 != 3   ||  2 != 2)

// !
// ! false  ---> true 
// ! true   ---> false

console.log(! (2 == 2))
console.log(! (2 != 2))


// conditional statements 

// one input and multiple outcomes

let numt = -17

// if(numt > 0 && numt <= 5){
//     console.log("10 % discount")
// }
// if(numt > 5 && numt <= 10){
//     console.log("20 % discount")
// }
// if(numt > 10){
//     console.log("30 % discount")
// }

// if(numt > 0 && numt <= 5){
//     console.log("10 % discount")
// }
// else if(numt > 5 && numt <= 10){
//     console.log("20 % discount")
// }
// else if(numt > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log("incorrect input")
// }


let marks = 92 

if(marks > 90){
    console.log("grade A")
}
if(marks >= 75){
    console.log("grade B")
}
if(marks >= 65){
    console.log("grade C")
}

// if(marks > 90){
//     console.log("grade A")
// }
// else if(marks >= 75){
//     console.log("grade B")
// }
// else if(marks >= 65){
//     console.log("grade C")
// }
// else {
//     console.log("please try again ..")
// }


let q1 = 8
let q2  = 4 
let q3 = 10

if(q1 > q2){
    console.log("q1 is greater")
}
else {
    console.log('q2 is greater')
}

if(q1 > q2 && q1 > q3){
    console.log("q1 is greater")
}
else if(q2 > q1 && q2> q3){
    console.log("q2 is greater")
}
else {
    console.log("q3 is greater")
}


// tenary operator 
//conditon  ?  console.log('statement'):consle.lod('statement 2')
let age2 = 18
let ag = age2 >= 18 ? "candrive":"cannotdrive"
console.log(ag)


// switch case 


// let city = "indore"
// switch(city){
//     case 'pune':
//         console.log("MH")
//     case "indore":
//         console.log("MP")
//     default:
//         console.log('incorrect city')
// }



// let city = "indore"
// switch(city){
//     case 'pune':
//         console.log("MH")
//         break
//     case "indore":
//         console.log("MP")
//         break
//     default:
//         console.log('incorrect city')
// }


let city = "indore"
switch(city){
    case 'pune','nagpur':
    case 'mumbai':
        console.log("MH")
        break
    case "indore":
    case 'bhopal':
        console.log("MP")
        break
    default:
        console.log('incorrect city')
}
