// In Express.js, middlewares are functions that execute during the request-response cycle, running sequentially before route handlers to preprocess requests or perform tasks like logging, authentication, data parsing, or request validation. They are applied using app.use() or route-specific methods, and their order of registration determines their execution flow. Middlewares are prioritized over routing logic to ensure tasks like modifying request/response objects (e.g., adding headers, parsing JSON via express.json()), enforcing security checks, or logging (e.g., with morgan) are completed before routes process the request. This design allows developers to centralize cross-cutting concerns, avoid code duplication, and ensure consistent preprocessing (e.g., validating user access before allowing route execution). Middlewares can either terminate a request (e.g., sending a 403 error) or pass control to the next middleware/route using next(). Properly structured middlewares enhance modularity, security, and maintainability in Express applications.




const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000
const fs = require("fs")


// ...


app.use(express.static("public"))
app.use('/blog', blog)


//Making a middleware
// const myLogger = function (req, res, next) {
//     console.log('LOGGED')
//     next()
//   }

//   app.use(myLogger)


//Middleware 1 - Logger for our application
app.use((req, res, next) => {
    // console.log('Middleware 1')
    // res.send("Hacked by middleware 1")
    console.log(req.headers);
    req.harry = "I am Harry"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n` )
    console.log(`${Date.now()} is a ${req.method}`);
    next()
})


app.use((req, res, next) => {
    console.log('Middleware 2')
    req.harry = "I am bikash"
    // res.send("Hacked by middleware 2")
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About!' + req.harry)
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})