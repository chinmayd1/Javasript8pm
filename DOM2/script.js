
// class ---> 

//<h4 id = "three" class ="four" name = "five">CHINMAY</h4>

//CSS

//tagName 
let byTagName = document.querySelector('h4')
console.log(byTagName)

// id 
let byId = document.querySelector('#three')
console.log(byId)

// class 
let byClass = document.querySelector('.four')
console.log(byClass)

// attribute
// [tagName[attribute='value']]
let byAttr = document.querySelector('h4[name="five"]')
console.log(byAttr)