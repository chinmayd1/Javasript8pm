

// html -- content 
// styling - css
// user action - element change -- js 
// element retrive , element update , element add , element delete
// elemenet attritube -- retrive , update  , add ,delete 
// based on user action --> click , dbclick , mouseup , mousedown, mouseover

// element retrive
//document.querySelector()
//document.querySelectorAll()
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.getElementsByName()

// element update 
//<h1 id = "one">Fruits</h1>
// let addE = document.querySelector('#one')
// addE.textContent = "Fruit"

//element add 
// buttonOne.addEventListener('click', function () {
//     let text = inputE.value
//     let newE = document.createElement('li') // <li></li>
//     newE.textContent = text // <li>Papaya</li>
//     creatButtons(newE)
//     ulList.appendChild(newE)
//     inputE.value = " "

// })

// element delete
//  if (event.target.className == "remove") {
//             let li = event.target.parentElement
//             let ul = li.parentElement
//             ul.removeChild(li)

//         }


//<h2 id = "two" class ="three" name = "nm">Hello</h2>

let headTwo = document.getElementById('two')
console.log(headTwo)

//Arttibute - Rerive
console.log(headTwo.className)

// Attribute - update
headTwo.classList.add("five")
headTwo.classList.remove("five")
headTwo.classList.toggle("five")
headTwo.classList.toggle("five")
console.log(headTwo)

// Attribute- retrive
console.log(headTwo.getAttribute('id'))
// Attribute- add
headTwo.setAttribute('data-cy',"test-id")
// Attribute- update
headTwo.setAttribute('data-cy',"test-id-2")


headTwo.removeAttribute('class')
headTwo.removeAttribute('id')
console.log(headTwo)



