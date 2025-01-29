

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([
  {
    "name": "JavaScript",
    "Price": 18000,
    "Instructor": "Aarav"
  },
  {
    "name": "Python",
    "Price": 15000,
    "Instructor": "Suman"
  },
  {
    "name": "Java",
    "Price": 20000,
    "Instructor": "Bikash"
  },
  {
    "name": "C++",
    "Price": 17000,
    "Instructor": "Niraj"
  },
  {
    "name": "C#",
    "Price": 19000,
    "Instructor": "Ramesh"
  },
  {
    "name": "Go",
    "Price": 16000,
    "Instructor": "Manoj"
  },
  {
    "name": "Rust",
    "Price": 21000,
    "Instructor": "Sarita"
  }
]

);



// Print a message to the output window.
console.log(`Done inserting data.`);


