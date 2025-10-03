// indexOf()

//              0  1  2  3  4
let  numbers = [11,22,33,44,55]
let a1 = numbers.indexOf(22)
let a2 = numbers.indexOf(222)
console.log(a1)
console.log(a2)

//at()
let numberB = [11,22,33,44,55]
let a22 = numberB.at(3)
console.log(a22)

// program 1 
//                0    1    2    3
let birthYear = [2000,2001,2002,2003]
let ages = []
//[25,24,23,22]

for(let i = 0 ; i < birthYear.length ; i++){
   //console.log(i)
   //console.log(birthYear[i])
   //console.log(2025 - birthYear[i])
   ages.push(2025 - birthYear[i])
}
console.log(ages)


// program 2
let marks = [44,33,41,22,33,42]
//[44,41,42]
let above40 = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 40){
        above40.push(marks[i])
    }
}
console.log(above40)


// program 3

let numberA = [11,22,33] // 66
let total = 0

for(let i = 0 ; i < numberA.length ; i++){
    total = total + numberA[i]
    //       0    +     11  -----> 11
    //       11   +     22  -----> 33
    //       33   +     33  -----> 66
}
console.log(total)

// program 4
let cities = ["pune","nagpur","mumbai"]
for(let i = 0; i < cities.length ; i++){
    // console.log(i)
    // console.log(cities[i])
    console.log("welcome "+cities[i])
}