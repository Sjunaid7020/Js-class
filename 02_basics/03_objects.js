//singleton

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name:'Jon',
    "Full name":"Jon the Don",
    [mySym] : "mykey1",
    age: 31,
    location: "Mumbai",
    email: "Jon@gmail.com",
    isLoggedIn:false,
    lastLoginDate:['Monday', 'Fryday']
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["Full name"])
//console.log(JsUser[mySym])

JsUser.email = "JontheDon@google.com"
//console.log(JsUser["email"])

//Object.freeze(JsUser)
JsUser.email = "Jon@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function (){
    console.log(`hello js user,${this.name}`)
}

console.log(JsUser.greeting())