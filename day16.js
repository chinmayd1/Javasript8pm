
// string
let firstName = "chinmay"
console.log(typeof firstName)

let lastName = 'deshpande'
console.log(lastName)
console.log(typeof lastName)

let middleName = `shirish`
console.log(middleName)
console.log(typeof middleName)

// string stores the value by index ?? - yes
let city = 'pune'
console.log(city)
console.log(typeof city)
console.log(city[0])

city[0] = "P"
console.log(city)



// let names = ["ram","sham","satish"]
// console.log(names[0])
// names[0] = "satish R"
// console.log(names)



// program 3

// let numbers = [11,22,33]

// for(let i = 0 ; i < numbers.length ; i++){
//    // console.log(i)
//     console.log(numbers[i])
// }

// let i1 = 1
// while(i1 < numbers.length){
//     console.log(numbers[i1])
//     i1 = i1 + 1
// }

let city2 = "nagpur"
// 0  1  2  3  4 5
// n  a  g  p  u  r
console.log(city2[0])
console.log(city2.length)

let i2 = 0
while(i2 < city2.length){
    console.log(city2[i2])
    i2 = i2 + 1
}

for(let i = 0 ; i < 6 ; i++){
    //console.log(i)
    console.log(city2[i])
}

// program 3
//  string + string   -----> string 
//  number + string   -----> string 
//  string + number   -----> string 
//  number + number   -----> number

console.log("hello"+"world")
console.log(12 + 13 + "hello") // 25hello
console.log("hello"+12+13) // "hello1213"


//program 4

let fn = "chinmay"
let ln = "deshpande"
// My firstName is chinmay and lastName is deshpande
console.log("My firstName is "+fn+" and lastName is "+ln)

// string literal
console.log(`My firstName is ${fn} and lastName is ${ln}`)
// string literal output is always -- string 
console.log(`${2+2}`)


// Methods 
// toUpperCase()

let cityOne = "pune"
let one = cityOne.toUpperCase()
console.log(one)

// toLowerCase()
let cityTwo = "Nagpur"
let two = cityTwo.toLowerCase()
console.log(two)

// includes()

let cityThree = "goa"
let q1 = cityThree.includes("g")
let q2 = cityThree.includes("Go")
console.log(q1)
console.log(q2)

// indexOf()
//   0      1   2  3   4  5
//   m     u   m   b  a  i
let cityFour = "mumbai"
console.log(cityFour.indexOf('m'))
console.log(cityFour.indexOf('M'))
console.log(cityFour.indexOf('m',1))

// startsWith()

console.log(cityFour.startsWith("m"))
console.log(cityFour.startsWith("mu"))

// endsWith()
console.log(cityFour.endsWith("I"))
console.log(cityFour.endsWith("ai"))

// repeat()
let n = "ninad"
console.log(n.repeat(3))