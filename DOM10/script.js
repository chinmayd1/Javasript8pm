
let ulList = document.querySelector('ul')
let buttonE = document.querySelector('button')
let inputE = document.querySelector('input')

buttonE.addEventListener('click',function(){
    let fruitText = inputE.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitText // <li>Grapes</li>
    ulList.appendChild(newLi)
    inputE.value = ''
})