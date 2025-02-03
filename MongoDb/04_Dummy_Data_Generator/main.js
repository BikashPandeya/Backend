// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
});

const Employee = mongoose.model("Employee", employeeSchema);

app.post("/generate-data", async (req, res) => {
    try {
        await Employee.deleteMany({}); // Clear existing records

        const employees = [
            { name: "Harry", salary: 45000000, language: "Python", city: "New York", isManager: true },
            { name: "John", salary: 50000000, language: "JavaScript", city: "Los Angeles", isManager: false },
            { name: "Emma", salary: 55000000, language: "Java", city: "Chicago", isManager: true },
            { name: "Sophia", salary: 40000000, language: "C++", city: "Houston", isManager: false },
            { name: "Michael", salary: 47000000, language: "Ruby", city: "Phoenix", isManager: true },
            { name: "Olivia", salary: 42000000, language: "Go", city: "Philadelphia", isManager: false },
            { name: "William", salary: 46000000, language: "Swift", city: "San Diego", isManager: true },
            { name: "James", salary: 43000000, language: "PHP", city: "Dallas", isManager: false },
            { name: "Isabella", salary: 51000000, language: "Kotlin", city: "San Jose", isManager: true },
            { name: "Ethan", salary: 48000000, language: "Rust", city: "Austin", isManager: false },
        ];

        await Employee.insertMany(employees);
        res.json({ message: "10 employees added successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});