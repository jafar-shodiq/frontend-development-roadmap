const myName = 'Shodiq';
const myAge = 24;
console.log(`My name is ${myName} and I am ${myAge} years old`);

console.log('');
console.log('');
console.log('');

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

for(let todo of todos) {
    console.log(todo.text);
}

console.log('');

todos.forEach(function(todo) {
    console.log(todo.text);
});

console.log('');

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

console.log('');

const todoCombined = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCombined);

console.log('');
console.log('');
console.log('');

function addNums(num1, num2 = 5) {
    return num1 + num2;
}
console.log(addNums(6));

const addNums2 = (num1, num2 = 5) => {
    return num1 + num2;
}
console.log(addNums2(6));

const addNums3 = num1 => num1 + 5;
console.log(addNums(6));

console.log('');
console.log('');
console.log('');

// constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getMyBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getMyFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// class -> does the same thing as the constructor function
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getMyBirthYear() {
        return this.dob.getFullYear();
    }

    getMyFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person1 = new Person('Jafar', 'Shodiq', '12-23-1997');
console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person1.getMyBirthYear());
console.log(person1.getMyFullName());

