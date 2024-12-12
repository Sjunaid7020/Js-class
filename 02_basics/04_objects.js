//const tinderUser = new Object() => this is singleton object
const tinderUser ={} //=> this non singleton object

tinderUser.id= '123abc'
tinderUser.name= "sammy"
tinderUser.isLoggedIn= false

//console.log(tinderUser)

const regularUser ={
    email: "sume@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Jon",
            lastname:"the don"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={
    1:"a",2:"b",3:"c"
}

const obj2 = {
    4:"d",5:"e"
}

const  obj4 ={
    6:"f",7:"g"
}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2}//most used
//console.log(obj3)

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))