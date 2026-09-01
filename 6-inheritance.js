//inheritance links classes together so one can copy features from another.
//inheritance links structures together so a child class can reuse code from a parent class.
//Mainly to avoid repeating common code.

class Employee {
    constructor(name, domain) {
        this.name = name;
        this.domain  = domain;
    }
    login() {
        return `${this.name} logged in`;
    }

    logout() {
        return `${this.name} logged out`;
    }
}

class Admin extends Employee {
    deleteUser(){
        console.log("User deleted");
    }
}

const admin = new Admin("Reethu", "UI Developer");
const admin1 = new Admin("Farhana", "Frontend Developer")
console.log(admin1.login()); //output: Reethu logged in
console.log(admin.logout()); //output: Reethu logged out
admin.deleteUser(); //output: User deleted

//Inheritance with Constructors
class User{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login(){
        return `login success`;
    }
    logout() {
        return `logout success`;
    }
}

class Admin extends User {
    constructor(name, email, domain) {
        super(name, email);
        this.domain = domain;
    }
    delUser(){
        return `deleted user`;
    }
}
const admin = new Admin("Arifh","arifhalam@gmail.com","Software Engineer");
console.log(admin.login()); // output: login success
console.log(admin.email); // output: arifhalam@gmail.com

//Calling Parent Method with super.method().Suppose the child overrides the parent's method but still wants the parent's behavior.

class User {
    login() {
        console.log("login success")
    }
}

class Admin extends User {
    login(){
        super.login();
        console.log("Admin logged success");
    }
}

const admin = new Admin();
admin.login(); //output: login success ,Admin logged success
