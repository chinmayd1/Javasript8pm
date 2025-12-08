// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionA()
// additionB()

// program 2
// async
// function additionC(){
//     setTimeout(() => {
//         console.log("C is called")
//     },2000);
// }

// function additionD(){
//     console.log("D is called")
// }
// additionC()
// additionD()


// program 3
//    API              API          API
// user create ----> userId -----> userinfo

// function userInfo(){

//     setTimeout(function(){
//         console.log('user created')
//     },3000)

//     setTimeout(function(){
//         console.log('user Id')
//     },2000)

//     setTimeout(function(){
//         console.log('user Info')
//     },1000)

// }

// userInfo()

// Async ---> execution --> sync
// call back hello

function userInfo(){
    setTimeout(function(){
        console.log('user created')
             setTimeout(function(){
                console.log('user Id')
                    setTimeout(function(){
                    console.log('user Info')
            },1000)
        },2000)
    },3000)

}
userInfo()
