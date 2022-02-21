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

