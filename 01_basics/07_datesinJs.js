//Dates

let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleString())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleTimeString())
//
//console.log(typeof myDate)

//let myCreatedDate = new Date(2024, 10, 5)
//let myCreatedDate = new Date(2024, 10, 5, 20, 6)
//let myCreatedDate = new Date("2024-11-05")
let myCreatedDate = new Date("11-05-2024")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreatedDate.getTime())
//console.log(Math.round(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getFullYear())
console.log(newDate.getDay())