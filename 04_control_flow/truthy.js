const userEmail=[]

if (userEmail){
    console.log('got email')
}else {
    console.log('dont have email')
}

//falsy values
//false, 0, -0, BigIbt 0n, "", null, undefined,NaN

//truthy values
//'0', 'false', " ", [], {}, function(){}

//if (userEmail.length === 0){
// console.log('Array is empty')
//}

//const emptyObj = {}
//if (Object.keys(emptyObj).length===0){
//    console.log('Object is empty')
//}

//Nullish Coalescing Operatoe (??): null undefined

let val1;
//val1= 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

//Terniary Operator

//condition ? true : false
const  icePrice =100
icePrice <=80 ? console.log('less then 80') :  console.log('more then 80') 