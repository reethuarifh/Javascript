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
