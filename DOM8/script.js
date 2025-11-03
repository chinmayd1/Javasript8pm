

let headOne = document.querySelector('h1')
let inputE = document.querySelector('input')
let buttonE = document.querySelector('button')

console.log(headOne)
console.log(inputE)
console.log(buttonE)

buttonE.addEventListener('click',function(){
    let colorText = inputE.value // red
    headOne.style.color = colorText
    inputE.value = " "
})
