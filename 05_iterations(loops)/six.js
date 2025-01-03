//const coding=['js','ruby','java','python','cpp']

//const values = coding.forEach((item)=>{
//    console.log(item)
//    return item
//})
//
//console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10]


//const newNums = myNums.filter((num) => {
//    return num > 4
//})

const newNums=[]
//myNums.forEach((num)=>{
//    if (num > 5){
//        newNums.push(num)
//    }
//})

const books=[
    {title:'book1',genre:'Fiction',publish:1987,edition:2004},
    {title:'book2',genre:'Non-Fiction',publish:1997,edition:2008},
    {title:'book3',genre:'History',publish:1981,edition:2002},
    {title:'book4',genre:'Fiction',publish:1972,edition:2017},
    {title:'book5',genre:'History',publish:1997,edition:2004},
    {title:'book6',genre:'Fiction',publish:1988,edition:2014},
    {title:'book7',genre:'Non-Fiction',publish:1990,edition:2003},

]

const userBooks =books.filter((bk)=>{
    return bk.publish <= 2000 && bk.genre === "History"

})


console.log(userBooks)
