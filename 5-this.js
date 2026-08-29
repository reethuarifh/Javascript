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
