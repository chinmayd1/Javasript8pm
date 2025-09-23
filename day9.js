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
