class User {
    constructor(email,password) {
    this.email = email;
    this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(email) {
       this._email = email;
    }

    get password() {
        return `${this._password}qwert`;
    }
    set password(value) {
        this._password = value
    }
}

const Abc = new User('abc@example.com','qwert')
console.log(Abc.password)
console.log(Abc.email)