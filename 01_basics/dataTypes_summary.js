// Primitive dataType -> they are all call by value
// String
// Number
// Boolearn
// null
// undefined
// Symbol
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggiedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('132')
const anotherId = Symbol('123')


const bigNumber = 79876846545465131n

//Non-Primitive dataType(reference)->
// Array
// Objects
// Functions

const marvelHeros=['IronMan', 'Hulk', 'Antman']

const dcHeros =
{
    name:'IronMan',
    age:35,
    city:'NewYork'
}

const myfunction = function(){
    console.log('Hello World')
}

console.log(typeof id)