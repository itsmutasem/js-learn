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
