//<h1 id = "one" class = "two" name = "nm">Hello</h1>


// CSS

// document.querySelector('h1')
// document.querySelector('.two')
// document.querySelector('#one')
// document.querySelector('h2[name="nm"]')

let headOne = document.querySelector('h1')
headOne.addEventListener('click',function(){
    headOne.style.color = "red"
})