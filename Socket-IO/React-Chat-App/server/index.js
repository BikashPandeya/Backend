import express from "express"
import {createServer} from "http"
import {Server} from "socket.io"
import cors from "cors"



//Configurations

const app = express()
const server = createServer(app)
const io =new Server(server , {
    cors : {
        origin : 'http://localhost:5173',
        methods:["GET" , "POST"]
    }
})


//Middlewares
app.use(cors())


//Socket.io stuff
io.on("connection" , (socket) =>{
      console.log("New client connected");
    socket.on("message" , (msg) =>{
        console.log("Message Received : " , msg)
        io.emit("message" , msg)
    })

    socket.on("disconnect" ,() => {
        console.log("Client disconnected")
    })
})



//Coonecting the server
const PORT = 3000
server.listen(PORT , () => {
    console.log("App is listening to port : " ,PORT)
})