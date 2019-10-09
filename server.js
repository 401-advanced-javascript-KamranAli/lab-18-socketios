const io = require('socket.io')(7890);

io.on('connection', socket => {
  socket.on('file-read', data => {
    console.log(data);
  });
});