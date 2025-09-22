

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop - for a definite of times
// while - until a certain condition

//for(intialization;conditionCheck,increment/decrement){
     //statements
//}

// program 1

for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// 1 <= 3 ----> true
// 2 <= 3 ----> true
// 3 <= 3 ----> true
// 4 <= 3 ----> false


// print hello 3 times
// program 2
for(let i = 1 ; i <= 3 ; i++){ // 2 // 3 // 4
    console.log("hello") // hello // hello // hello
}

// program 3
// print 1 to 5 
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) // 1 //2 // 3 // // 4   // 5
}

// program 4
// 5 to 1 
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 //1 
}

// program 5
// print table of 2

for(let i = 1 ; i <= 10 ; i++){
    console.log(i*2)
}

// program 6
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // 8 ----- 22
    console.log(i) // 2 // 4 // 6 -------- 20
}

