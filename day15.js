

// slice
//              0          1         2       3        4      5
let names = ["chinmay","shirish","sarika","poorva","sachin","ram"]
//             -6         -5       -4       -3       -2       -1
//names.slice(startIndex,endIndex(not inclusive))

let q1 = names.slice(1)
console.log(q1)
let q2 = names.slice(-5)
console.log(q2)
let q3 = names.slice(1,5)
console.log(q3)
let q4 = names.slice(1,-1)
console.log(q4)
let q5 = names.slice(-5,5)
console.log(q5)
let q6 = names.slice(-5,-1)
console.log(q6)
let q7= names.slice(-1,-5)
console.log(q7)

// splice()

//              0        1         2         3        4
let cities = ["pune","mumbai","banglore","kolkata","chennai"]
// cities.pop()
// console.log(cities)
// cities.shift()
// console.log(cities)

//cities.splice(indexNumber,numberofElementToBeremoved)
// cities.splice(3,1)
// console.log(cities)

//cities.splice(indexNumber,numberofElementToBeremoved,rpl1 ,rpl2)
cities.splice(1,2,"nagpur","wardha")
console.log(cities)

// program 3

// join()
let info = ["chinmay","deshpande",7709192441]
let q11 = info.join(" ")
console.log(q11)

// program 4
let arr = [11,22,33]
let arr2 = [44,55,66]
let arr3 = arr.concat(arr2)
console.log(arr3)

// program 5
let country = ["india","pakistan","srilanka","bangladesh"]
country.sort()
console.log(country)


// [ 'bangladesh', 'india', 'pakistan', 'srilanka' ]
country.reverse()
console.log(country)

// program 6
//                   0                1                  2
//              0       1        0        1         0          1
let states = [["NGP","PUNE"],["BHOPAL","INDORE"],["UDAIPUR",'JAIPUR']]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let q22 = states.flat()
console.log(q22)

// program 7
//             0   1  2  3  4  5  6
let numbers = [11,22,33,44,55,66,77]
//let q33 = numbers.fill("@",1)
let q44 = numbers.fill("-",1,4)
console.log(q44)

// Array finish