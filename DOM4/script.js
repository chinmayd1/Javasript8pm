// h1>Hello</h1>
// <button>ChangeColor</button>

let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')
buttonOne.addEventListener('click',function(){
    headOne.style.backgroundColor = "yellow"
    headOne.style.color = "red"
})