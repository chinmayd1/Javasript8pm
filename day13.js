
//                0    1     2    3
let birthYear = [2000,2001,2002,2003]
let above25 = []

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    console.log(2025 - birthYear[i])
    let ag  = 2025 - birthYear[i]
    above25.push(ag)

}
console.log(above25)


birthYear = [2000,2001,2002,2003]

let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2025 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q2)


// program 2

let marks = [92,90,76,54,66,89,42]
//[92,90,76,89]
let above75  = []
for(let i = 0 ; i < marks.length ; i++){
    if(marks[i] > 75){
        above75.push(marks[i])
    }
}
console.log(above75)
marks = [92,90,76,54,66,89,42]
let q3 = marks.filter(function(el,index,arr){
    return el > 75
})
console.log(q3)

let transactions = [23,44,55,-55,66,-18,56,67,34,56]
let q4 = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(q4)

let q5 = transactions.filter(function(el,index,arr){
    return el > 0
})
console.log(q5)

// program 3
let cities = ["pune","mumbai","banglore","kolkata"]
for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome " + cities[i])
}
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 4
let numA = [11,22,33]
let total = 0

for(let i = 0 ; i < numA.length ; i++){
    total = total +  numA[i]
    //        0   +   11 ----> 11
    //       11   +   22 ----> 33
    //       33   +   33 ----> 66

}

console.log(total)

// acc --> 0
numA = [11,22,33]
let q6 = numA.reduce(function(acc,el,index,arr){
    return el + acc // 66
},0)
console.log(q6)

// forEach() , map() , filter() , reduce()