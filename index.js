const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{origin: '*'}
})

app.set('view engine', 'ejs')

app.get('/',(req,res) => {
    res.render('home')
})

server.listen(3001, () => {
    console.log('server is running... at port 3001');
})

io.on('connection', (socket) => {
    console.log('user connected! ' + socket.id);

    socket.on('message', (data) => {
        // console.log(data);   show it on the screen!
        socket.broadcast.emit('message',data)
    })
})