// program 1
// function additionA(){
//     console.log("A is called")
// }

// function additionB(){
//     console.log("B is called")
// }
// additionA()
// additionB()

// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },2000)
// }
// function additionD(){
//     console.log("D is called")
// }
// additionC()
// additionD()

// create user ---> getId --- getinfo


// function getUserInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)
// }
// getUserInfo()



// function getUserInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     },3000)
// }
// getUserInfo()

// promises ----> 
// async --- sync code --- it remove problem of call back hell

// promise --> 
// resolved , reject , pending 


// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 100
//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// consuming the promise
// pro
// .then(function(str){
//     console.log(str)
// },function(){
//     console.log(str)
// })

// then with catch block 

// pro
// .then(function(str){
//     console.log(str)
//     console.log("resolved")
// })
// .catch(function(str){
//     console.log(str)
//     console.log("rejected")
// })


// then ---> catch --> finally()

// prgram 2
let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if(a == b){
        resolve([11,22,33])
    }
    else {
        reject([-11,-22,-33])
    }
})

pro2
.then(function(arr){
    console.log(arr[0])
})
.catch(function(arr){
    console.log(arr[0])
})
.finally(function(){
    console.log("i will always run ..")
})




