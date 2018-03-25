const app = require("./app");
const io = require('socket.io')();

let port = process.env.PORT || 3000

console.log('listening on port ', port);

app.listen(port);
