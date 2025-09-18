// 5 min  -----> 30  minutes ----> 5
// conditional statement 
// one input and multiple outcomes 

// if(condition){
//     // statement
// }


let a = 15
if(a > 10){
    console.log('hello')
}

// program 2
// numT > 0 && numT <= 5   ----> 10 % discount 
// numT > 5 && numT <= 10  ----> 20 % discount 
// numT > 10               ----> 30 % discount


let numT = 17
if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

// program 3
let numT2 = -17

if(numT2 > 0 && numT2 <= 5){
    console.log("5 % discount")
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("10 % discount")
}
else if(numT2 > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}

// program 4


let marks = 92

if(marks > 90){
    console.log("Grade A")
}
if(marks >= 75){
    console.log("Grade B")
}
if(marks >= 65){
    console.log("Grade C")
}


// will exist if first condition is true
if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again !")
}

//program 5

let a1 = 10 
let b1 = 50

if(a1 > b1){
    console.log("a1 is greater")
}
else {
    console.log("b1 is greater")
}


