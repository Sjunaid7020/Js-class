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

const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    console.log('Object is empty')
}