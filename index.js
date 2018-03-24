const app = require("./app");
const io = require('socket.io')();

// io.on('connection', (client) => {
//   // here you can start emitting events to the client
// });

let port = process.env.PORT || 3000

// io.listen(port);
console.log('listening on port ', port);

app.listen(port);
