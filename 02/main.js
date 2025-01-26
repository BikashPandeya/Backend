const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/\n `);
});
  

//Press ctrl + C to type new commands in terminal while server is running

//FOr constant change in server with change in script use       nodemon main.js      or its same like           nodemon scriptname(ex:script.js)