// map ()

let info = {
    // key:value
    firstName:'chinmay',
    lastName:'deshpande',
    1:"admin"

}
console.log(info)

// There are two ways to define map 


// empty map 

let mapA = new Map()
console.log(mapA)
mapA.set(1,"admin")
mapA.set(true,"haveVehicle")
mapA.set([11,22,33],"marks")
mapA.set({info:"one",info2:"two"},"info")
console.log(mapA)

// map with values 

let mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"manager"]
])
console.log(mapB)
console.log(mapB.size)
// retrive 
let q1 = mapB.get(1)
console.log(q1)
// add 
let q2 = mapB.set(4,"supervisor")
console.log(q2)
// update
mapB.set(1,"Admin")
console.log(q2)
// delete
mapB.delete(1)
console.log(mapB)
// exist or not
let q222 = mapB.has(1)
console.log(q222)

for(let key of mapB.keys()){
    console.log(key)
}

for(let key of mapB.values()){
    console.log(key)
}
for(let [key,value] of mapB.entries()){
    console.log(key,value)
}

// console.log(mapB.keys())
// console.log(mapB.values())
// console.log(mapB.entries())
mapB.forEach(function(v,k){
    console.log(v,k)
})




// set()