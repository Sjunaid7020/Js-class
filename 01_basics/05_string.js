const name = "Jon"
const repoCount = 50

//console.log(name + repoCount + "Value")

//console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

const gameName = new String('Jo-n')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('o'))

const newString = gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(-4,1)
console.log(anotherString)

const trimeString = '        jon         '
console.log(trimeString.trim())

const url = 'https://www.google.com/search?client=firefox-b-d@q=hello'

console.log(url.replace('@','&'))
console.log(url.includes('hello'))

console.log(gameName.split('-'))