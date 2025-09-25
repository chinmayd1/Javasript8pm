// for loop 
for (let i = 0; i <= 5; i++) { // 1 // 2 // 3 // 4 // 5 // 6
    console.log(i) // 0 // 1 // 2 // 3 // 4 // 5
}

// break statement with for loop 
//  print 1 to 5 
for (let i = 1; i <= 5; i++) { // 2 // 3
    console.log(i) //1 // 2 // 3
    if (i == 3) {
        break
    }
}

// program 2
for (let i = 1; i <= 5; i++) { // 2 // 3
    if (i == 3) {
        break
    }
    console.log(i) // 1 //2
}

// program 3
for (let i = 5; i >= 1; i--) { // 4 // 3
    console.log(i) //5 // 4 // 3
    if (i == 3) {
        break
    }
}
// program 3
// continue statement with for loop 
for (let i = 0; i <= 5; i++) { // 1 // 2 // 3 //4 // 5 // 6
    if (i == 3) {
        continue
    }
    console.log(i)// 0 // 1 // 2 // 4 // 5

}

// program 4 
for (let i = 5; i >= 1; i--) { // 4 // 2 // 1 /// 0
    if(i == 3){
        continue
    }
    console.log(i) //5//4 // 2 //1
    console.log("hello")
}

// while loop 

// for(intialization; conditionCheck ; increment/decrement){
//     //statements
// }

// intialization
// while(condition){
    // statements
    // increment/ decrement
//}

// program 5

let i1 = 1
while(i1 <= 5){
    console.log(i1) // 1 //2 //3 //4 // 5
    i1  = i1 + 1 // 2 // 3 // 4 // 5 // 6
}


// for 

// for(intialization ; conditionCheck ; increment/decrement){
//     // statement
// }


// intialization
// while(condition){
    // statement
    // increment/decrement
//}

// program 1

let i2  = 1
while(i2 <= 3){
    console.log(i2) // 1 // 2 //3
    i2  = i2 + 1 // 2 // 3 //4
}


// program 2
// print hello 3 tyms 

let i3 = 1
while(i3 <= 3){
    console.log("hello") 
    i3 = i3 + 1 // 2 // 3 // 4
}

// print 1 to 5

let i4 = 1
while(i4 <= 5){
    console.log(i4) // 1 // 2 // 3 // 4 // 5
    i4 = i4 + 1 // 2 // 3 // 4 // 5 // 6
}

// print 5 to 1
let i5 = 5
while(i5 >= 1){
    console.log(i5) // 5 // 4 // 3 // 2 // 1
    i5 = i5 - 1 // 4 // 3 // 2 // 1 // 0
}

// table of 2
let i6 = 1
while(i6 <= 10){
    console.log(i6 * 2) // 1 // 2 --------> 10
    i6 = i6 + 1 // 2 // 3 -------> 11
}

let i7 = 2
while(i7 <= 20){
    console.log(i7)// 2 // 4 // 6 // 8 ----> 20
    i7 = i7 + 2 // 4 // 6 // 8 // 10 ----> 22
}

let i8 = 5
while(i8 <= 50){
    console.log(i8)
    i8 = i8 + 5
}

// table of three in reverse 
let i9 = 30
while(i9 >= 3){
    console.log(i9) // 30 // 27 -------------> 3
    i9 = i9 -  3 // 27 // 24 -----------> 0
}

// break statement with while loop 

let i10 = 1
while(i10 <= 5){
    console.log(i10) //1 // 2 // 3
    if(i10 == 3){
        break
    }
    i10 = i10 + 1 //2 // 3
}


let i11 = 1
while(i11 <= 5){
    if(i11 == 3){
        break
    }
    console.log(i11)  //1 // 2
    i11 = i11 + 1  //2 // 3
}


// continue statement with for loop

let i12 = 1

while(i12 <= 5){
    if(i12 == 3){
        i12 = i12 + 1 // 4
        continue
    }
    console.log(i12) // 1 // 2 // 4 // 5
    i12 = i12 + 1  // 2 // 3 // 5 // 6
}

