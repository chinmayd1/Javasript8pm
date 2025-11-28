

// number as a parameter and number as a return type 
function addition(x,y){
    return x + y
}
q1 = addition(12,3)
console.log(q1)

// boolean as a paramter and boolean as a return 
function canDrive(age,haveVehicle){
    if(age >= 18 && haveVehicle){
        return true
    }
    else {
        return false
    }
}
let q2 = canDrive(19,true)
console.log(q2)

// array as parameter and array as return type 

let names = ["pune","mumbai","banglore","kolkata"] 
function addCity(cities){
    cities.push("nagpur")
    return cities
}
let q3 = addCity(names)
console.log(q3)

// object as a parameter and object as return type 

infoOne = {
    fullname:"chinmay",
    city:"pune",
}
function addLanguage(info){
    info['language'] = "marathi"
    info.language2 = "hindi"
    return info
}
let q4 = addLanguage(infoOne)
console.log(q4)


// set as parameter and set as return type 
let setA = new Set([11,22,33])
function addE(){
    setA.add(555)
    return setA
}
let q6 = addE(setA)
console.log(q6)

// map as parameter and map as return type  



