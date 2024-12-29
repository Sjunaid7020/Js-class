const user ={
    username: 'Xyz',
    price:199,

    welcomeMessage:function (){
        console.log(`${this.username}, wellcome to website`)
        console.log(this)
    }
}

//user.welcomeMessage()
//user.username='Sam'
//user.welcomeMessage()

//console.log(this)

//function one() {
//    let username= 'one'
//    console.log(this.username)
//}
//
//one()

const one = () => {
    let  username='one'
    console.log(this.username)
}

//one()

//const  addtwo = (num1,num2) => {
//    return num1 + num2
//}

//const  addtwo = (num1,num2) => num1 + num2

//const  addtwo = (num1,num2) => (num1 + num2)


const  addtwo = (num1,num2) => ({username:"ABC"})

//console.log(addtwo(5,8))

const myArray = [2,3,4,5,6,7]

//myArray.forEach(()=>{})