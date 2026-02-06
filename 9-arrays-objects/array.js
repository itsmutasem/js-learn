const person = ['John', 'Doe', 'adam', 'yousef', 'mahmoud'];
console.log(person);
console.log(person [0]);
console.log(person [2]); // undefined

const mixture = ['John', 23, true];
console.log(mixture)
;
mixture.push('new element');
console.log(mixture);

// person.pop()
// console.log(person);

for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}
console.log(person.length);


// use build-in function to print the array
person.forEach(person => console.log(person));

console.log('===========MAP=============');

// use map function to print the array. you can get the value in map and save it in a new variable
person.map(person => console.log(person));
const mappedPerson = person.map(person => {
    console.log(person);
    return person + ' is a person';
});
console.log(mappedPerson);
// abstract map with arrow function
person.map(person => console.log(person.includes('m') ? person + ' is a human' : person + ' is not a human'));
