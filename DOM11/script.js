let ulList = document.querySelector('ul')
let inputE = document.querySelector('input')
let buttonOne = document.querySelector('#one')

buttonOne.addEventListener('click',function(){
    let text = inputE.value // papaya
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text // <li>Papaya</li>
    creatButtons(newE)
    ulList.appendChild(newE)
    inputE.value = ""
})

//   <button class="remove">Remove</button>
//   <button class="up">Up</button>
//   <button class="down">Down</button>

function creatButtons(li){
    let removeButton = document.createElement('button') // <button></button>
    removeButton.textContent ="Remove" // <button>Remove</button>
    removeButton.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(removeButton)

    let upButton = document.createElement('button') // <button></button>
    upButton.textContent = "Up" // <button>Up</button>
    upButton.classList.add("up") // <button class = "Up">up<button>
    li.appendChild(upButton) // 

    let downButton = document.createElement('button')
    downButton.textContent = "Down"
    downButton.classList.add("down")
    li.appendChild(downButton)

}