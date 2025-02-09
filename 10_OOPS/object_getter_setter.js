const User = {
  _email: 'example@example.com',
    password: 'example',

    get email() {
      return this._email.toUpperCase();
    },
    set email(email) {
      this._email = email;
    }
}

const tea = Object.create(User);
console.log(tea.email);