![cf](https://i.imgur.com/7v5ASc8.png) Lab 06: TCP Chat Server
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Create a PR to your master from your working branch.
* Submit on canvas:
  * a question and observation
  * how long you spent
  * link to your pull request

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.env** - contains env variables (should be git ignored)
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `start` script for running your server
* **server.js** - the entry point for your application
* **model/client.js** - contains your class

## Feature Tasks  
For this assignment, you will be building a TCP chatroom. Clients should be able to connect to the chatroom through the use of telnet. Clients should also be able to run special commands to exit the chatroom, list all users, reset their nickname, and send direct messages. You may add as many features to this application as you would like. Do not use any third party libraries and testing is *not* required.

##### Minimum Requirements 
* Create a TCP Server using the NodeJS `net` module
* Create a Client constructor that models an individual connection 
  * Each client instance should contain (at least) `id`, `nickname`, and `socket` properties
* Clients should be able to send messages to all other clients by sending it to the server
* Clients should be able to run special commands by sending messages that start with a command name
  * The client should send `@quit` to disconnect
  * The client should send `@list` to list all connected users
  * The client should send `@nickname <new-name>` to change their nickname
  * The client should send `@dm <to-username> <message>` to send a message directly to another user by their nickname
* Connected clients should be maintained in an in-memory collection (array) called the `clientPool`
  * When a socket emits the `close` event, the socket should be removed from the client pool
  * When a socket emits the `data` event, the data should be logged on the server and the commands below should be implemented

### Stretch Goal
* When a socket emits the `error` event, the error should be logged on the server

## Documentation  
Write basic documention for starting your server connection and using the chatroom application.  Be sure to use proper markdown constructs and ```highlight blocks of code```.
