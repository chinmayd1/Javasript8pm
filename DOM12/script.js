

let ulList = document.querySelector('ul')
let buttonOne = document.querySelector('#one')
let inputE = document.querySelector('input')

buttonOne.addEventListener('click', function () {
    let text = inputE.value
    let newE = document.createElement('li') // <li></li>
    newE.textContent = text // <li>Papaya</li>
    creatButtons(newE)
    ulList.appendChild(newE)
    inputE.value = " "

})

ulList.addEventListener('click', function (event) {

    if (event.target.tagName === "BUTTON") {
        if (event.target.className == "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        if (event.target.className == "up") {
            let li = event.target.parentElement
            let prevE = li.previousElementSibling
            if(prevE){
                ulList.insertBefore(li,prevE)
            }
        }
        if (event.target.className == "down") {
            let li = event.target.parentElement
            let ulList = li.parentElement
            let nextE = li.nextElementSibling
            if(nextE){
                ulList.insertBefore(nextE,li)
            }
           
        }
    }

})



function creatButtons(li) {

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "Remove" // <button>Remove</button>
    remove.classList.add('remove') // <button class = "remove">Remove</button>
    li.appendChild(remove)


    let up = document.createElement('button')
    up.textContent = "Up"
    up.classList.add('up')
    li.appendChild(up)


    let down = document.createElement('button')
    down.textContent = "Down"
    down.classList.add('down')
    li.appendChild(down)


}