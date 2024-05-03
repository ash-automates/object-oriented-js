function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (userToDel) {
    users = users.filter(user => {
        return userToDel.email != user.email;
    });
}

var users = [userOne, userTwo, adminOne];
var adminOne = new Admin('shaun@ninjas.com', 'Shaun');
var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();
