//var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    //console.log("inner:", a)
}

//for(let i = 0; i < array.length ; i++) {
//         console.log()
//        }

//console.log(a)
//console.log(b)

function one(){
    const username='XYZ'
    function two (){
        const website='youtube'
        console.log(username)
    }
    //console.log(website)
    //two()
}
//one()

if (true){
    const username='XYZ '
    if (username === 'XYZ '){
        const website = 'youtube'
        //console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

//++++++++++++++++++++++++++++ interesting+++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}



const addtwo =function (num) {
    return num + 2
}

addone(5)