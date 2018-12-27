'use strict';

// first-party modules -- built in to Node
const net = require('net');
const EE = require('events');

// internal files
const Client = require('./model/client.js');

// environment
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// make a new server
const server = net.createServer();

// new instance of EE
const ee = new EE();

// set up a pool to hold on to all of the current users
const pool = [];

// set up a connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  pool.push(client);
  client.socket.write('Welcome to the chat room!\n');

  // data === when someone types a message
  socket.on('data', (data) => {
    // console.log('this is the data', data);  <-- this is a buffer
    // console.log('this is the data.toString()', data.toString());

    // first command: @all, which will send a message to everyone in the chat room
    const command = data.toString().split(' ').shift().trim();
    // console.log(command);

    if(command.startsWith('@')) {
      const restOfCommand = data.toString().split(' ').splice(1).join(' ');
      ee.emit(command, client, restOfCommand);
      return;
    }

    // default behavior 
    ee.emit('default', client);
  });

});

// register event listeners
ee.on('@all', (client, message) => {
  pool.forEach(user => {
    user.socket.write(`${client.nickname}: ${message}`);
  });
});

ee.on('@nickname', (client, string) => {
  client.nickname = string;
  client.socket.write(`Your nickname has been changed to ${string}`);
});

ee.on('default', (client) => {
  client.socket.write('Please begin all commands with @\n');
});

// make sure the server is listening
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

// we can also write helper functions
// ee.on('@all', messageAll);
// const messageAll = (client, message) => {
//   pool.forEach(user => {
//     user.socket.write(`${client.nickname}: ${message}`);
//   });
// };
