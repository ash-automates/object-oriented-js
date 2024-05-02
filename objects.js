class User {
    constructor (email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score = this.score + 1;
        console.log(this.email, "score now is", this.score);
        return this;
    }
};

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => user.email != u.email);
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var adminOne = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, adminOne];

adminOne.deleteUser(userOne);

console.log(users);