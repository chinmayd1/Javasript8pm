
// function addtionA(){
//     console.log("A")
// }
// function addtionB(){
//     console.log("B")
// }
// addtionB()
// addtionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()


// user create ---> id ---- info

// function getInfo(){

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
// getInfo()


// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)

//         }, 2000)

//     }, 3000)

// }
// getInfo()

// promise  --- async ----- sync ---- call back hell
// pending --- resolve , reject 


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
//     .then(function (str) {
//         console.log(str)
//     }, function (str) {
//         console.log(str)
//     })

// pro
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })

// pro
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("i will always execute")
//     })


// pro
//     .then(function (str) {
//         console.log(str)
//         return "hello"
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("i will always execute")
//     })



// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("user crated")
//         }, 3000)
//     })
// }

// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("get Id")
//         }, 2000)
//     })
// }

// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("getinfo")
//         }, 1000)
//     })
// }

// async function getInfo2() {
//     try {
//         let str = await createUser()
//         console.log(str)
//         let str2 = await getId()
//         console.log(str2)
//         let str3 = await getInfo()
//         console.log(str3)
//     }
//     catch{
//         console.log("hello")
//     }
// }

// getInfo2()




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
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always ")
// })


// promise .all()

let proOne = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

let proTwo = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello2")
    }
    else {
        reject("bye")
    }
})

let proThree = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello3")
    }
    else {
        reject("bye")
    }
})


// Promise.all([
//     proOne,
//     proTwo,
//     proThree
// ])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

async function PromiseAllU() {
    try {
        let pro = await Promise.all([
            proOne,
            proTwo,
            proThree
        ])
        console.log(pro)
    }
    catch {
        console.log('errorrr')
    }


}

PromiseAllU()


// promise.allSettled()


proOne = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

proTwo = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello2")
    }
    else {
        reject("bye")
    }
})

proThree = new Promise(function (resolve, reject) {
    let a = 10
    let b = 1
    if (a == b) {
        resolve("hello3")
    }
    else {
        reject("bye")
    }
})


Promise.allSettled([
    proOne,
    proTwo,
    proThree

])
    .then(function (str) {
        console.log(str)
    })


async function allSettledF() {
    let pro2 = await Promise.allSettled([
        proOne,
        proTwo,
        proThree

    ])
    console.log(pro2)
}
allSettledF()

// promise.race()


let pro4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("pro 4")
    }, 2000)
})

let pro5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("pro 5")
    }, 4000)
})

let pro6 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("pro 6")
    }, 1000)
})


Promise.race([
    pro4,
    pro5,
    pro6
])
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })


async function allRaceF() {
    try {
        let proR = await Promise.race([
            pro4,
            pro5,
            pro6
        ])
        console.log(proR)
    }
    catch {
        console.log(rejected)
    }
  
}








// promise.any()










