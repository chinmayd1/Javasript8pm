//  <h1 id = "one">Fruits</h1>
//     <p name = "para">para1</p>
//     <p name = "para">para2</p>
//     <ul>
//         <li class = "fr">Apple</li>
//         <li class = "fr">Mango</li>
//         <li class = "fr">Banana</li>
//         <li class = "fr">Grapes</li>
//         <li class = "fr">Papaya</li>
//     </ul>


// program 1
// let byId = document.querySelector('#one')
// console.log(byId)
// let byId2 = document.getElementById('one')
// console.log(byId2)

// program 2
let byClassName = document.querySelector('.fr')
console.log(byClassName)

let byAllClassFr  = document.querySelectorAll('.fr') // nodeList
console.log(byAllClassFr)
// for(let i = 0 ; i  < byAllClassFr.length ; i++){
//     byAllClassFr[i].style.color = "green" 
// }
let htmlCollectionFr = document.getElementsByClassName('fr') // html collection
console.log(htmlCollectionFr)

// program 3
let paraOne = document.querySelector('p')
console.log(paraOne)

let allPara = document.querySelectorAll('p') // nodeList
console.log(allPara)

let byPara = document.getElementsByTagName('p') // html collection
console.log(byPara)

//Program 4
// byName 
let firstNameE = document.querySelector('[name="para"]')
let allNameE = document.querySelectorAll('[name = "para"]')// nodeList
let allElementByName = document.getElementsByName('para') // nodeList
console.log(firstNameE)
console.log(allNameE)
console.log(allElementByName)