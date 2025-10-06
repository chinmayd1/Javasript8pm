// map()
//                 0    1    2    3
let birthYear = [2000,2001,2002,2003]
//[25,24,23,22]
let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2025 - el
})
console.log(q1)

let numbers = [11,22,33,44]
let q2 = numbers.map(function(el,index,arr){
    return el + 10
})
console.log(q2)

// filter()
let marks = [92,90,87,77,66,55,72]
let above75 = marks.filter(function(el,index,arr){
    return el > 75
})

console.log(above75)

let transactions = [89,-56,66,-78,77,88,99]
let deposit = transactions.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// program 3
let numberC  = [11,22,33]
let total  = numberC.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)
console.log(total)

// program 4
let cities = ["pune","mumbai","bangalore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// program 5

// find()

let scores = [34,88,44,33,45,66,78,2,45,67]
let q22 = scores.filter(function(el,index,arr){
    return el > 75
})
console.log(q22)

let q23 = scores.find(function(el,index,arr){
    return el > 75
})
console.log(q23)

// findIndex()
let q24 = scores.findIndex(function(el,index,arr){
    return el > 75
})
console.log(q24)


// every() --> boolean -----> true or false

let numberT  =[22,-1,44,5,66,77,88,66]
let q25 = numberT.every(function(el,index,arr){
    return el > 0
})
console.log(q25)

// some() --> boolean  -----> true or false

numberT  = [22,1,44,5,66,77,88,66]
let q26 = numberT.some(function(el,index,arr){
    return el < 0
})
console.log(q26)
