import express from "express"

const app = express()

// app.get("/" , (req,res) => {
//     res.send("Server is ready")
// });

//Get a list of 5jokes
app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "Why don’t skeletons fight each other?",
          "content": "Because they don’t have the guts!"
        },
        {
          "id": 2,
          "title": "What did the ocean say to the beach?",
          "content": "Nothing, it just waved."
        },
        {
          "id": 3,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 4,
          "title": "Why don’t eggs tell jokes?",
          "content": "Because they might crack up!"
        },
        {
          "id": 5,
          "title": "Why did the math book look sad?",
          "content": "Because it had too many problems."
        }
      ];
      res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`Server at http://localhost:${port}`);
});