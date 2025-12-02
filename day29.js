
// values() , keys() , entries()
let numbersA = [11,22,33,11]
let numbers = new Set()
console.log(numbers)

numbers.add(11)
numbers.add(22)
numbers.add(33)
numbers.add(11)
console.log(numbers)
console.log(numbersA)

let numbersB = new Set([11,22,33,44,55])
console.log(numbersB)
// size
console.log(numbersB.size)

// has()
let q1 = numbersB.has(11)
console.log(q1)

//numbersB.clear()
console.log(numbersB)

numbersB.delete(22)
console.log(numbersB)

numbersB.forEach(function(val){
    console.log(val)
})

let arrB = [11,22,31,22,33,44,55,66,77]
console.log(new Set(arrB))