const express = require('express')
const birds = require('./routes/blog')
const app = express()
const port = 3000


// ...



app.use(express.static("public"))
app.use('/blog', birds)

app.get('/', (req, res) => {   //Here get requests are used to pass small data through Url as its total storage is only 8KB
    console.log("Heyy Its a get request");
    res.send('Get Request!!!')
})

//Here post requests are used to large data through Url as its total storage is very high
app.post('/', (req, res) => {
    console.log('Heyy its post request');
    res.send('Post request!!!')    //Here all the get request and post request can be checked using postman
})

app.put('/', (req, res) => {
    console.log('Heyy its put request');
    res.send('put request')
})



//Serving HTML Files
app.get("/index" , (req, res) => {
    console.log('Heyy its put request');
    res.sendFile('_templates/index.html' , {root : __dirname})
})

app.get("/api" , (req, res) => {
    res.json({a:1,b:2,c:3 , "name" : "[Harry ,Jerry]"})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})






//Example of Chaining of Request

// app.get('/', (req, res) => {  
//     console.log("Heyy Its a get request");
//     res.send('Get Request')
// }).post('/', (req, res) => {
//     console.log('Heyy its post request');
//     res.send('Post request')
// }).put('/', (req, res) => {
//     console.log('Heyy its put request');
//     res.send('put request')
// })