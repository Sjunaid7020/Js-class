//for of

const arr= [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const  greetings = 'Hello World!'

for (const greet of greetings) {
    if(greet== " "){
        continue
    }
    console.log(`each char is ${greet}`)
}

//maps

const map = new Map()
map.set('IN','India')
map.set('Fr','France')

//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ' :-', value)
}

const  myObject = {
    'Game1':'NFS',
    'Game2':'DMC'
}

//for (const [key, value] of myObject) {
//    console.log(key, ' :-', value)
//} this does not work with object