

let names = ["sarika","chinmay","ram","sham"]
let numbers = [11,22,33,44]
let info = ["chinmay","deshpande",23,44]

console.log(names)
console.log(numbers)
console.log(info)


// program 2
//             0       1         2          3
let city  = ["pune","mumbai","bangalore","chennai"]
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// program updating the value for array
//               0          1        2      3
let country = ["india","pakistan","cuba","iran"]
country[0] = "bharat"
console.log(country)

// program 3
//              0    1   2   3   4
let numbersA = [111,222,333,444,555] 

console.log(numbersA[0])
console.log(numbersA[1])
console.log(numbersA[2])
console.log(numbersA[3])
console.log(numbersA[4])

console.log(numbersA.length)
console.log(numbersA.length - 1) // length - 1 is always last index

for(let i = 0 ; i < numbersA.length ; i++){ // 1 // 2 // 3 // 4 // 5
   // console.log(i) 
    console.log(numbersA[i])
}

// program 4
//               0           1          2         3         4
let cities2 = ["mumbai","bangalore","kolkata","chennai","nagpur"]
console.log(cities2)

let i1 = 0
while(i1 < cities2.length){
    //console.log(i1) // 0 // 1 // 2 // 3 // 4
    console.log(cities2[i1])
    i1 = i1 + 1 
}

