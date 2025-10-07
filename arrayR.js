
//             0          1      2      3
let names = ["chinmay","sarika","ram","sham"]
console.log(names)
console.log(names[0])

//             0  1  2  3
let numbers = [11,22,33,44]
console.log(numbers[0])
numbers[0] = 222
console.log(numbers)


// program 2
//             0          1         2        3
let cities = ["pune","banglore","kolkata","chennai"]
console.log(cities.length)
for(let i = 0 ; i < cities.length ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 ,1,2, 3
    console.log(cities[i])
}

//               0        1          2        3
let cities2 = ["pune","banglore","kolkata","chennai"]

let i1 = 0
while(i1 < 4){
    //console.log(i1)
    console.log(cities2[i1])
    i1 = i1 + 1
}

// methods 
// gym  - 
// action --- excercise
// return -- health

let flowers = ["lily","rose",'jasmine',"sunflower"]
let q1 = flowers.push('lotus')
console.log(q1)
console.log(flowers)

let flowers2 = ["lily","rose",'jasmine',"sunflower"]
let q3 = flowers2.unshift("lotus")
console.log(q3)
console.log(flowers2)

// program 2
let country = ["india","pakistan","srilanka","cuba"]
let q4 = country.pop()
console.log(q4)
console.log(country)

// [ 'india', 'pakistan', 'srilanka' ]
let q5 = country.shift()
console.log(q5)
console.log(country)

// push(), unshift() , pop() , shift()

// program 3
//               0       1        2        3
let animals = ["tiger","lion","rabbit","cheetah"]
let q6 = animals.includes("Tiger")
console.log(q6)

let q7 = animals.indexOf('lion')
let q8 = animals.indexOf('Lion')
console.log(q7)
console.log(q8)

// at()
let q9 = animals.at(2)
console.log(q9)

// sort()
animals = ["tiger","lion","rabbit","cheetah"]
animals.sort()
console.log(animals)

// reverse()
animals.reverse()
console.log(animals)

// join()
let info = ["chinmay","deshpande",7709192441]
let q10 = info.join(' ')
console.log(q10)

// concat()
let arr1  = [11,22,33]
let arr2 = [44,55,66]
let arr3 = arr2.concat(arr1)
console.log(arr3)

// flat()
//                    0                   1                    2
//                0       1         0        1           0         1
let states  = [["pune","nagpur"],["indore","bhopal"],["udaipur",'jaipur']]
console.log(states[0][1])
console.log(states[2][1])
console.log(states[1][1])
let arr4 = states.flat()
console.log(arr4)

// array complete - session
// string complete