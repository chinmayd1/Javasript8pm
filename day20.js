
let person = {
    name:"amol",
    age:25,
    city:"pune"
}

// dot notation and bracket notation
// retrive 
console.log(person.name)
console.log(person['age']) // 

// update dot notation and bracket notation
person.name = "chinmay"
person['age'] = 35
console.log(person)
// add dot notation and bracket notation
person.language = "marath"
person['country'] = "india"
console.log(person)
// delete
delete person.name
delete person['city']
console.log(person)

// nested object 

let info = {
    name:"chinmay deshpande",
    address:{
        city:"pune",
        country:"india"
    },
    //         0          1              2
    skills:["python","javascript","playwright"]

}
console.log(info.name)
console.log(info.address.city)
console.log(info['address']['country'])
console.log(info.skills[2])
let q1 = info.skills.push("cypress")
console.log(info)

// object with methods 


let car = {
    brand:"Audi",
    start:function(){
        console.log("car started")
    },
    stop:function(){
        console.log("car stopped")
        // this --> car (reference)
        console.log(this.brand)
    },
    brandName(){
        console.log(this.brand)
    }
}
console.log(car.brand)
car.start()
car.stop()
car.brandName()

// program 2
let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    city:"pune",
    language:"marathi"
}

for(let key in info2){
    console.log(key,info2[key])
}


info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    city:"pune",
    language:"marathi"
}


console.log(Object.keys(info2))
console.log(Object.keys(info2).length)
console.log(Object.values(info2))
console.log(Object.entries(info2))

for(let value of Object.values(info2)){
    console.log(value)
}
for(let key of Object.keys(info2)){
    console.log(key)
}
for(let arr of Object.entries(info2)){
    console.log(arr)
}

let arr1 = info2.hasOwnProperty('country')
console.log(arr1)

// next class thursday --> destructuring