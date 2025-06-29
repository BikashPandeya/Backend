//1.Imports
import express from "express"
import http from "http"
import { fileURLToPath } from "url"
import { dirname , join } from "path"
import {Server } from "socket.io"


//2.Instances
const app= express()
const server = http.createServer(app)
const io = new Server(server)


//3.Serving HTML File
const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname , "index.html")
app.get("/" , (req,res) => {
    res.sendFile(join(__dirname , "index.html"))
})


// 4.Define a connection event handler
io.on('connection' , (client) => {
    console.log("User connected to the server ✅")
    
    //Emit a 'message' event to the client
    client.emit('real-time-message' , "Server is sending this data to the client")

    client.on("disconnect" , () => {
        console.log('User Disconnected From The Server ❌ ')
    })

    client.on("new message" , (message) => {
        console.log(message)
    })
})



//5.Start A Server
const PORT = 3000
server.listen(PORT , () => {
    console.log("App running on port" , PORT)
})