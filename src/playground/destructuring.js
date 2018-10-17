
// Object Destructuring

const person = {
  // name: 'Frank',
  age: 47,
  location: {
    city: 'Philadelphia',
    temp: 80
  }
};

const { name = 'Anonymous', age } = person;

// console.log(`person name ${name}.  Age ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`${name}'s city: ${city} and temp ${temperature}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holliday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Publish' } = book.publisher;

// console.log(publisherName);


// Array Destructuring

const address = ['1512 Spruce Street', 'Philadelphia', 'PA', '19102'];

// ordered list of variable name
const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}`);


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, small, medium, large] = item
console.log(`A medium ${itemName} cost ${medium}.`)
