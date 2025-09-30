

// Gym
// action  - excercise
// return - health

// methods 

// push()
// action - add the element to end of array
// return - new length  of array
//               0       1     2       3       4
let names = ["chinmay","ram","sham","sachin","sumit"]
let q1 = names.push("sarika")
console.log(q1)
console.log(names)

// unshift()
//                0         1          2          3
let country = ["india","srilanka","pakistan","australia"]
let q2 = country.unshift('china')
console.log(q2)
console.log(country)

// pop()
// action - remove the last element
// return -- returns the same element

let flowers = ["rose","jasmine","lotus","sunflower"]
let q3 = flowers.pop()
console.log(flowers)
console.log(q3)

let q4 = flowers.shift()
console.log(q4)
console.log(flowers)

// push() , pop() ,shift() , unshift()

// reverse()
let numbers = [11,22,33,44,55]
let q5 = numbers.reverse()
console.log(q5)

// concat()
let arr1 = [11,22,33]
let arr2 = [44,55,66]
let q6 = arr1.concat(arr2)
console.log(q6)

let info = ["chinmay","deshpande",7709192441]
let q8 = info.join('-')
console.log(q8)
console.log(typeof q8)

let animals = ["tiger","lion","rabbit"]
let q9 = animals.includes("Tiger")
console.log(q9)
