const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let searchtext = "Search Now"
    let arr = ["Heyy ",2,34]
    res.render('index', { sitename : sitename , searchtext : searchtext , arr })  //if a variable is written individually by its name in key in object so it make its value as pair
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when"
    let blogcontent = "Its a very good brand"
    res.render('index', { blogTitle : blogTitle , blogcontent : blogcontent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})