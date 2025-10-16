// destructure
//              0       1         2  
let names = ["sarika","rahul","sachin"]
// console.log(names)
// let n1 = names[0]
// let n2 = names[1]
// let n3 = names[2]
// console.log(n1)
// console.log(n2)
// console.log(n3)

let [n1,n2,n3] = names
console.log(n1)
console.log(n2)
console.log(n3)

// program 2
let numbers = [11,22,33]
let [a,,b] = numbers
console.log(a)
console.log(b)


// program 3
let ST = [["mumbai","pune"],["bhopal","indore"],["udiapur","jaipur"]]
let [[c1,c2],[c3,c4],[c5,c6]] = ST
console.log(c4)
console.log(c6)


// program 4

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)


// program 5 

let info2 =  {
    firstName:"rahul",
    lastName:"singh",
    age:23,
    parent:{
        mother:"jyoti",
        father:"amit"
    }
}

let {firstName:fn,lastName:ln,parent:{mother,father}} = info2
console.log(fn)
console.log(ln)
console.log(mother)
console.log(father)

// program 6
let students = [
    {
        firstN:"rahul",
        lastN:"singh"
    },
    {
        firstN:"amol",
        lastN:"rao"
    }

]
let [{firstN:fn1,lastN:ln1},{firstN:fn2,lastN:ln2}] = students
console.log(fn1)
console.log(ln2)

// program 7

let info3 = {
    fullName:"chinmay deshpande",
    skills:["python","javascript"]
}

let {fullName,skills:[s1,s2]} = info3
console.log(fullName)
console.log(s2)