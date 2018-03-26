const app = require("./app");
var socket = require('socket.io');


server = app.listen(process.env.PORT || 3000, function(){
    console.log('server is running on port 3000')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
