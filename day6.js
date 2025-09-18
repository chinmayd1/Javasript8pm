
// switch case 
// one input and multiple outcome ---> switch 
// switch case without break statement

let city = "Bhopal"
switch(city){
    case "pune":
        console.log("MH")
    case "bhopal":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    case "lucknow":
        console.log("UP")
    default:
        console.log("incorrect city name ..")
}

// program 2
// switch case with break statement

let city2 = "bhopale"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "bhopal":
        console.log("MP")
        break
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city name ..")
}


// program 3
// switch statement with multiple case
let city3 = "nagpur"

switch(city3){
    case "pune":
    case "nagpur","mumbai":
        console.log("MH")
        break
    case "bhopal":
    case "indore":
        console.log("MP")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name ..")
}


// program 4
let x1 = 100
let x2 = 500
let x3 = 2000

// if(x1  >  x2 && x1 > x3){
//     console.log("x1 is greatest")
// }
// else if(x2 > x1 && x1 > x3){
//     console.log("x2 is greatest")
// }
// else {
//     console.log("x3 is greater")
// }

// let flag = true

// switch(flag){
//     case x1 > x2 && x1 > x3:
//         console.log("x1 is greater")
//         break
//     case x2 > x3 && x2 > x1:
//         console.log("x2 is greater")
//         break
//     default:
//         console.log("x3 is greater")
// }


// truthy value and falsy value

// 0  undefined , null , NaN ,"",3 > 2

if(0){
    console.log("hello")
}
else {
    console.log("bye")
}

if(undefined){
    console.log("hello")
}
else {
    console.log("bye")
}

if(NaN){
    console.log("hello")
}
else {
    console.log("bye")
}
if(null){
    console.log("hello")
}
else {
    console.log("bye")
}
if(""){
    console.log("hello")
}
else {
    console.log("bye")
}
if(2 < 1){
    console.log("hello")
}
else {
    console.log("bye")
}
if(false){
    console.log("hello")
}
else {
    console.log("bye")
}

// true , 3 > 2 , 1 == 1, [],{}," ","chinmay" 
if("chinmay"){
    console.log("hello")
}
else {
    console.log("bye")
}
