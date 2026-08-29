//"this" refers to the current object instance.
class User {
    constructor(name, age, city) {
        this.name=name;
        this.age=age;
        this.city=city;
        return {
            message: `Hi, I am ${this.name} from ${this.city}`
        };
    }   
}
const user1 = new User("Reethu", 31, "Hyd");
console.log(user1) // output: { message: 'Hi, I am Reethu from Hyd' }

//Creating multiple users
class UserDetails {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city =  city;
    }
    // Adding a method right inside the class body
    getMessage(){
        return `Hi, I am ${this.name} from ${this.city}`;
    }
}
const details1 = new UserDetails("Farhana", 31, "Hyderabad");
const details2 = new UserDetails("Arifh", 36, "Hyderabad");

console.log(details1.getMessage()) //output: Hi, I am Farhana from Hyderabad
console.log(details2.getMessage()) //output: Hi, I am Arifh from Hyderabad

------------------------------------------------------------------------------

class User {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    getMessage() {
        return `Hi, I am ${this.name} from ${this.city}`;
    }
}
const user1 = new User("Reethu", 31, "Hyd");
console.log(user1); //output: User { name: 'Reethu', age: 31, city: 'Hyd' }
console.log(user1.getMessage()); //output: Hi, I am Reethu from Hyd


