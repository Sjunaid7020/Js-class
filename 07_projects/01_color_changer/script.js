const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',(event) => {
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor=event.target.id
    }
  })
})


//============================================= Code using Switch ==============================
//const buttons = document.querySelectorAll('.button')
//const body = document.querySelector('body')

//buttons.forEach((button)=>{
  //button.addEventListener('click',(e)=>{
    //switch (button){
      //case grey:
        //body.style.backgroundColor = e.target.id
        //break;
        //case white:
        //body.style.backgroundColor = e.target.id
        //break;
        //case blue:
        //body.style.backgroundColor = e.target.id
        //break;
        //case yellow:
        //body.style.backgroundColor = e.target.id
        //break;
    //}
  //})
//})