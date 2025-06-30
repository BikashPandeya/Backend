import express from "express"
import http from "http"
import {Server} from "socket.io"


//Creating instances

const app = express()
const server = http.createServer(app)
const io = new Server(server)


//Serving the static file
app.use(express.static('public'))


//Create a connection
io.on("connection" , (socket) => {
    console.log("User connected Successfully✅")

    socket.on("chat-message" , (msg) => {
        io.emit("chat-message" , msg)
    }) 

    socket.on("disconnect" , ()=> {
        console.log("User disconnected❌")
    })
})


//Run the Server
server.listen(3000 , () => {
    console.log("Listening on the port 3000")
})