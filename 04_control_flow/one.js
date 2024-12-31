//if
const isUserLoggrdin= true
const temperature = 41
//if (temperature == 50){
//    console.log('true')
//}
//else {
//    console.log('false')
//}

//<,>,<=,>=,==,!=,===,!==

const score= 200
//if (score > 100){
//    const power ='fly'
//    console.log(`user power is ${power}`)
//}
//console.log(`user power is ${power}`)

//const balance=1000
//if (balance > 500) console.log('test'),
//    console.log('test2');

//if (balance < 500){
//    console.log('less then')
//} else if (balance < 750){
//    console.log('less then 700')
//} else if (balance < 900){
//    console.log('less then 900')
//}else {
//    console.log('less then 1200')
//}

const userLoggedIn = true
const debitCard = true
const  loggedInFromGoogle= false
const loggedInFromEmail= true

if (userLoggedIn && debitCard && 2==2){
    console.log('allow to shop')
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log('user logged in')
}