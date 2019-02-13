const myString = 'this is a string';
// myString = 234234;
const array = ['cat', 'dog'];
array.push('string content');
array.push(234234234);
array.push(true);
const first = array[0];
if (isString(first)) {
    // first.search
}
function isString(value) {
    return typeof value === 'string';
}
// const user: IUser = {
//   name: 'Bob'
// };
// user.age = 45;
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(name) {
        console.log(`Hello ${name}, I'm ${this.name}`);
    }
}
const user = new User('Bob', 23);
class Person extends User {
    constructor(name, age, favorites = []) {
        super(name, age);
        this.favorites = favorites;
    }
}
const person = new Person('Sally', 53);
person.favorites.forEach(fav => console.log(fav));
person.sayHello(user.name);
