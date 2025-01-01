const myObject ={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} is for shortcut for ${myObject[key]}`)
}

const programming = ['js','rb','py', 'java', 'cpp']

for (const arrayKey in programming) {
    //console.log(programming[arrayKey])
}

const map = new Map()
map.set('IN','India')
map.set('Fr','France')

//for (const x in map ) {
//    console.log(map[key])
//}map p iteration nahi hota