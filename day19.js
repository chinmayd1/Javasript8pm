//             
let info = ["chinmay","deshpande",12,34]
// retrive
console.log(info[0])
info[0] = "ram"
info.push("marathi")
info.unshift("Mr")
info.pop()
info.shift()

let info2 = {
    // property:value
    // key:value 
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:34
}
//console.log(info2[0])
// retrive dot notation and bracket notation
console.log(info2.firstName)
console.log(info2['lastName'])
// update dot notation and bracket notation
info2.firstName = "tanmay"
info2['lastName'] = "dani"
console.log(info2)
// add dot notation and bracket notation
info2.language = "marathi"
info2['city'] = "pune"
console.log(info2)
// delete dot notation and bracket notation
delete info2.firstName
delete info2['lastName']
console.log(info2)
