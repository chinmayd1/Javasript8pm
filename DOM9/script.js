
// index.html
// let headOne = document.querySelector('h1')
// headOne.addEventListener('click',function(){
//     document.querySelector('h1').style.color = "red"
// })

// program 2
// let buttonE = document.querySelector('button')
// let headOne = document.querySelector('h1')
// buttonE.addEventListener('click',function(){
//     headOne.style.color = "red"
// })

// program 3

let headOne = document.querySelector('h1')
let buttonE = document.querySelector('button')
let inputE = document.querySelector('input')

console.log(headOne)
console.log(buttonE)
console.log(inputE)

buttonE.addEventListener('click',function(){
    let colorText = inputE.value
    headOne.style.color = colorText
    inputE.value = ""
})