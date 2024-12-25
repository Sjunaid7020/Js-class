//console.log("j")
//console.log("u")
//console.log("n")
//console.log("a")
//console.log("i")
//console.log("d")

function  sayMyName(){
    console.log("j")
    console.log("u")
    console.log("n")
    console.log("a")
    console.log("i")
    console.log("d")
}

//sayMyName()

//function addTwoNum(num1,num2){
//    console.log(num1 + num2)
//}

function addTwoNum(num1,num2){
//    let result = num1 + num2
//    return result

    return num1 + num2
}
const result= addTwoNum(3,5)
//console.log("result:",result)

function loginUserMessage(username = "Xyz"){
    if (!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Junaid"))
//console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))