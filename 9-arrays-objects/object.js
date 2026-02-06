const person = {
    name: { firstName: 'Mutasem', lastName: 'Mustafa' },
    age: 21,
    major: 'Backend Engineer',
    city: 'Seattle'
}
console.log(person.name);
console.log(person.name.firstName);
console.log(person);

// array object
const personArray = [
    { name: 'Mutasem', age: 21 },
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 }
];
console.log(personArray);
const singleElement = personArray.find((p) => p.name === 'John');
console.log(singleElement);
singleElement.age = 26;
console.log(personArray);
// filter
const olderThan21 = personArray.filter((p) => p.age > 21);
console.log(olderThan21);