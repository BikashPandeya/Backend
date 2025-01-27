


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))  //It is used to show the files in public folder to the web or users


//app.get or app.post or app.put or app.delete (path,handler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact us!')
})



//Here slug and second are URL parameters which are like varables
app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch {slug} from the db4

    // for Url: http://localhost:3000/blog/bikash/rohan?mode=dark&region=nep    Open this website in the web browser to view the result in node console
    console.log(req.params);  //will output { slug: 'bikash', second: 'rohan' }  
    console.log(req.query); //will output { mode: 'dark', region: 'nep' }
    
    
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)   //This sends the text in the website with the url like http://localhost:3000/blog/bikash/rohan
})

 
// app.get('/blog/into-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//   res.send('Hello intro-to-js!')
// })

// app.get('/blog/into-to-python', (req, res) => {
//     //logic to fetch intro to python from the db
//   res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})