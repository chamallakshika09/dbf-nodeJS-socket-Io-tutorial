const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);

app.use(express.static('public'));

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const io = require('socket.io')(server);

const newConnection = (socket) => {
  const handleMouse = (data) => {
    socket.broadcast.emit('mouse', data);
  };
  socket.on('mouse', handleMouse);
};

io.on('connection', newConnection);

server.listen(3000, () => {
  console.log('listening on *:3000');
});
