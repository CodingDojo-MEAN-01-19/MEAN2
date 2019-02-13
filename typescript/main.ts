const myString: string = 'this is a string';

// myString = 234234;

const array: BoolStrNum[] = ['cat', 'dog'];

type BoolStrNum = string | number | boolean;

array.push('string content');
array.push(234234234);
array.push(true);

const first = array[0];

if (isString(first)) {
  // first.search
}

function isString(value: any): value is string {
  return typeof value === 'string'
}

interface IUser {
  name: string;
  age?: number;
}

// const user: IUser = {
//   name: 'Bob'
// };

// user.age = 45;

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

class User implements IUser {
  constructor(public name: string, public age: number) {
  }

  sayHello(name: string): void {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

const user = new User('Bob', 23);


class Person extends User {
  constructor(name: string, age: number, public favorites: string[] = []) {
    super(name, age);
  }
}


const person = new Person('Sally', 53)

person.favorites.forEach(fav => console.log(fav));

person.sayHello(user.name);