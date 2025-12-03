
// // function as a parameter 
// let a = 10
// let add = (x,y)=> x+y
// // console.log(a)
// // console.log(add)
// // let e1 = add(12,3)
// // console.log(e1)

// function additionA(fn,x,y){
//     //fn = (x,y)=> x+y
//     // x - 10
//     // y - 5
//     let q1 = fn(x,y)
//     return q1
// }
// let q2 = additionA(add,10,5)
// console.log(q2)

// // function as return type
// function subtractionB(){
//     return (x,y)=>x-y
// }
// let q4 =subtractionB()
// // q4 = (x,y)=>x-y
// let q5 = q4(12,4)
// console.log(q5)

// lexical scope

// function additionC() {
//     let x = 10
//     let y = 20
//     console.log(x + y)
//     function additionB() {
//         let a = 8
//         console.log(x + y + a)
//         function additionC() {
//             let e = 1000
//             console.log(x + y + a + e)
//         }
//         additionC()
//     }
//     additionB()
// }
// additionC()


// actual difference between let , const and var

// let and var are similar in terms of assignment

// let a11 = 10
// console.log(a11)
// a11 = 1000
// console.log(a11)

// var j = 1000
// console.log(j)
// j = 89
// console.log(j)

// const j2 = 100
// console.log(j2)
// j2 = 123213

// let a 
// console.log(a)

//  const is different
// const and let are blocked scoped 
// var is function scoped

let n = 8
{
    let n = 100
    console.log(n) // 100
}
console.log(n) // 8

let m = 1000
{
    m = 799
    console.log(m) // 799
}
console.log(m) // 799


let k = 1000
{
    let k = 9000
    console.log(k) // 9000
}
console.log(k) // 1000
k = 90
console.log(k) // 90

// const j11 = 55
// {
//     const j11 = 900
//     console.log(j11) // 900
// }

// console.log(j11) // 55


const j11 = 55
{
     j11 = 900
    console.log(j11) // 900
}

console.log(j11) // 55











// closures








// actual difference arrow function and function expression

