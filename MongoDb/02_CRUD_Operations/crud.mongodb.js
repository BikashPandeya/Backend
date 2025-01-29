use ("CrudDb")


//******************************************CREATE****************************************************************
// db.createCollection("courses")

// db.courses.insertOne({
//     name : "Harry web dev free course",
//     price : "0"
//     ,assignments : 12,
//     projects : 45
// })

// db.courses.insertMany(
//     [
//         {
//           "name": "Harry Web Dev Free Course",
//           "price": "0",
//           "assignments": 12,
//           "projects": 45
//         },
//         {
//           "name": "JavaScript Beginner Guide",
//           "price": "10",
//           "assignments": 15,
//           "projects": 30
//         },
//         {
//           "name": "React Mastery Bootcamp",
//           "price": "50",
//           "assignments": 20,
//           "projects": 25
//         },
//         {
//           "name": "Node.js API Development",
//           "price": "40",
//           "assignments": 10,
//           "projects": 20
//         },
//         {
//           "name": "MERN Stack Full Course",
//           "price": "100",
//           "assignments": 25,
//           "projects": 35
//         },
//         {
//           "name": "HTML & CSS for Beginners",
//           "price": "5",
//           "assignments": 8,
//           "projects": 10
//         },
//         {
//           "name": "Advanced JavaScript Concepts",
//           "price": "30",
//           "assignments": 18,
//           "projects": 22
//         },
//         {
//           "name": "MongoDB Database Design",
//           "price": "35",
//           "assignments": 12,
//           "projects": 15
//         },
//         {
//           "name": "Full-Stack Web Development",
//           "price": "120",
//           "assignments": 30,
//           "projects": 50
//         },
//         {
//           "name": "Frontend Development Roadmap",
//           "price": "25",
//           "assignments": 10,
//           "projects": 18
//         }
//       ]
//     )



//******************************************READ****************************************************************
// let a = db.courses.find({price : "0"})
// // console.log(a);
// console.log(a.count());
// console.log(a.toArray());


let b = db.courses.findOne({price : "0"})
// console.log(a);
console.log(b);




//******************************************UPDATE****************************************************************
db.courses.updateOne({price : "0"} , {$set : {price : 100}})
db.courses.updateMany({price : "0"} , {$set : {price : 2000}})




//******************************************DELETE****************************************************************

db.courses.deleteOne({price : 100})
db.courses.deleteMany({price : 2000})
