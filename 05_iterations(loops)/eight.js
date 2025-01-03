const myNums=[1,2,3]
//const myTotal= myNums.reduce(function(acc,currval){
//    console.log(`acc:- ${acc} and currval:- ${currval}`)
//    return acc + currval
//}, 0)

myTotal = myNums.reduce((acc,currval)=>{
    //console.log(`acc:- ${acc} and currval:- ${currval}`)
    return acc + currval
}, 0)

const shoppingCart = [
    {
        itemName:'Js course',
        price:999
    },
    {
        itemName:'CPP course',
        price:699
    },
    {
        itemName:'Py course',
        price:999
    },
    {
        itemName:'mobile Dev',
        price:2999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) =>{
    console.log(`acc:- ${acc} and currval:- ${item.price}`)
   return acc + item.price
},0)

console.log(priceToPay)