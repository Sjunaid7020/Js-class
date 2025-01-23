const user ={
    username: 'XYZ',
    loginCount: 8,
    signedIn: true,

    getUserDeatails: function () {
        //console.log('got user deatails')
        //console.log(`Username ${this.username}`)
        //console.log(this)
    }
}

//console.log(user.username)
//console.log(user.getUserDeatails())

//- Constrcutofru funciton

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Hello ${username}`)
    }

    return this
}

const userOne = new User('XYZ',18,true)
const userTwo = new User('ABC',55,true)
console.log(userOne.constructor)
console.log(userTwo)

//new keyword create new empty object called instance  - step1 create new object
//step2- Constructor function get called becouse of new keyword
//step3- all the arguments get injected in this keyword