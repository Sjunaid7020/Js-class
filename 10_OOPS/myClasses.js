//es6

// class User {
//     constructor(username, email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`   
//     }
//     createUppercase(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('chai','chai@example.com','123');

// console.log(chai.encryptPassword());
// console.log(chai.createUppercase());

//behind the scene

function User(username, email,password) {
    this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
User.prototype.createUppercase=function() {
    return `${this.username.toUpperCase()}`
}
User.prototype.addStar = function () {
    return`${this.username } hello`
}

const tea = new User('tea','tea@example.com','456');

console.log(tea.encryptPassword());
console.log(tea.createUppercase());
console.log(tea.addStar());
