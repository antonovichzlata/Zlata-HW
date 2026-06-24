class User {
    static userID = 0;
    static users = []

    constructor(login) {
        User.users.forEach(user => {
            if (user.login.toLowerCase() === login.toLowerCase()) {
                throw new Error('login already exists');
            }
        });

        this.id = User.userID++;
        this.login = login;
       
        User.users.push(this);
    }

    sayHi() {
        console.log(`Hello from ${this.login}`)
    }

    static allCall() {
        User.users.forEach(user => user.sayHi());
    }
}

const u1 = new User('wqe');
const u2 = new User('asd');
const u3 = new User('W1qe');

User.allCall();