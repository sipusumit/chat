const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app);

const {Server} = require("socket.io")
const io = new Server(server)

app.use(express.static('public'))
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

let users = {}

io.on('connection', (socket)=>{
    console.log(`Connected: ${socket.id}`)
    socket.on('disconnect',()=>{
        console.log(`Disconnected: ${socket.id}`)
        socket.broadcast.emit("disconnect", users[socket.id])
    })
})


server.listen(3000, ()=>{
    console.log('server running on port 3000')
})