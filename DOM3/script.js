// <h1 id = "one" class = 'two' name = nm>Hello</h1> 

// Css selector
let byTagName = document.querySelector('h1')
let byId = document.querySelector('#one')
let byClassName = document.querySelector('.two')
let byAttr = document.querySelector('h1[name="nm"]')

console.log(byTagName)
console.log(byId)
console.log(byClassName)
console.log(byAttr)

byTagName.addEventListener('click',function(){
    byTagName.style.color = "red"
    byTagName.textContent = "Bye"

})


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         mother:"kanchan",
//         father:"shrish"
//     }
// }
// console.log(info.parent.father)
// info.parent.father = "shirish deshpande"
// console.log(info)