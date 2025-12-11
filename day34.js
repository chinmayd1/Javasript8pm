
// let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 5

//     if (a == b) {
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// pro
// .then(function(str){
//     console.log(str)
// }
// ,function(str){
//     console.log(str)
// })


// pro
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function(str){
//         console.log(str)
//     })


// pro
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function(str){
//         console.log(str)
//     })
//     .finally(function(){
//         console.log("finally will always run ...")
//     })


// program 4

// let pro5 = new Promise(function(resolve,reject){
//         let a = 10
//         let b = 10
//         if(a == b){
//             resolve('hello')
//         }
//         else {
//             reject("bye")
//         }
// })

// pro5
// .then(function(str){
//     console.log(str)
//     return "hello2"
// })
// .then(function(str){
//     console.log(str)
//     return "hello3"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })



function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get Id")
        },2000)
    })
}
function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}

async function getUserInfo(){
    try {
    let str = await createUser()
    console.log(str)
    let str2 = await getId()
    console.log(str2)
    let str3 = await getInfo()
    console.log(str3)
    }
    catch {
        console.log("finally caught ...")
    }

}

getUserInfo()




// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(){
//     console.log("finally")
// })
// .finally(function(){
//     console.log("i will always execute")
// })






