
// string

let fn = "chinmay"
console.log(fn.length)

//  0    1    2    3  4  5  6
//  c    h    i    n   m   a   y

console.log(fn.indexOf('c'))
console.log(fn.indexOf('C'))
console.log(fn.charAt(2))
console.log(fn.charCodeAt(5))


// search and checking 


let city  = "pune"
console.log(city.includes("p"))
console.log(city.includes("pu"))

console.log(city.startsWith("p"))
console.log(city.startsWith("pu"))
console.log(city.endsWith('e'))
console.log(city.endsWith('ne'))

// 0   1   2   3   4  5  6  7  8  9
// c   h   a   n   d  r  a  p  u   r
city  = "chandrapur"
console.log(city.indexOf('a'))
console.log(city.lastIndexOf('a'))


// program 2
// modifying string

let info = "i am learning javascript"
console.log(info.replace("javascript","python"))


info = "i am learning javascript and javascript is great"
console.log(info.replaceAll("javascript","python"))


let city2 = "Mumbai"
console.log(city2.toUpperCase())
console.log(city2.toLowerCase())

let city3 =  'goa'
console.log(city3.length)

city3 =  'goa '
console.log(city3.length)
console.log(city3.trimEnd().length)


city3 =  ' goa '
console.log(city3.length)
console.log(city3.trimStart().length)


city3 =  ' goa '
console.log(city3.trim().length)

let citi = "wardha"
let citi2 = "pune"

console.log(citi.padStart(10,0))
console.log(citi2.padStart(10,0))
console.log(citi.padEnd(10,0))
console.log(citi2.padEnd(10,0))

let h1 = "amol"
console.log(h1.repeat(3))

// slicing 
// coversion 
// regular expression
// ----------> mobile ----------->
// boredom 