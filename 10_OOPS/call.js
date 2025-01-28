function SetUserName(username) {
    this.username = username
    console.log("called");
}

function createUser(username,password,email){
    SetUserName.call(this, username)

    this.email= email
    this.password= password
}

const chai = new createUser('chai','1234','example@example.com')
console.log(chai);