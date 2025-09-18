


// logical operator


// and - && 

// true     &&      true  -----> true
// false    &&      true  -----> false
// true     &&      false -----> false
// false    &&      false -----> false

console.log(4 == 4  && 3 == 3)
console.log(4 === '4'  && 3 === 3)
console.log(4 === 4  && 3 === '3')
console.log(4 === '4'  && 3 === '3')
console.log(2 === '2' &&  3 == 3  && 4 == 4)

// or - ||

// true  || true    ----> true 
// true  || false   ----> true
// false || true    ----> true 
// false || false   ----> false 

console.log(2 == 2 || 3 == 3)
console.log(2 == 1 || 3 == 3)
console.log(1 == 1 || 2 == 3)
console.log(4 == 8 || 4 == 3)
console.log(2 == 2 && 3 == 3 || 1 == 4)
//       true && true || false
    //        true   ||  false
        //         true


// not ! 

// !true  ----> false
// ! false ----> true

console.log(!(2 == 2)) // false
console.log(!( 9 == 2))
 
