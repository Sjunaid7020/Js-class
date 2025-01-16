const promisOne = new Promise(
    function (resolve, reject) {
        //Do an async task
        //db calls, network call etc

        setTimeout(()=>{
            console.log('Async task compelete')
            resolve()
        },1000)
    }
)

promisOne.then(function () {
    console.log("promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function () {
    console.log('async 2 reolved')
})

const promiseThree =new Promise(function (resolve, reject) {
    setTimeout(()=>{
        resolve({username:'XYZ', email:'example@example.com'})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
 setTimeout(()=>{
     let error = false
     if(!error){
         resolve({username:'XYZ',psaaword: '123'})
     }else {
         reject('Error ')
     }
 },1000)
})

 promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
         console.log(username)
     })
.catch(function (error){
         console.log(error)
     })
.finally(()=>{
    console.log('The promises is resolved or rejected')
})

 const promisFive= new Promise(function (resolve, reject) {
        setTimeout(()=>{
            let error = true
            if(!error){
                resolve({username:'XYZ',psaaword: '123'})
            }else {
                reject('Error ')
            }
        },1000)
 });
async function consimePromiseFive(){
    try{ const response = await promisFive
        console.log(response)
    }catch (error) {
        console.log(error)
    }
}

consimePromiseFive()

async  function getAllUsers(){
    try{
        const response = await  fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }catch (error) {
        console.log('E:',error)
    }
}

//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})