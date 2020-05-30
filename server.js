var express = require('express')

var app = express()
var server = app.listen(3000)


app.use(express.static('public'))

console.log("The socket server is running")

var socket = require('socket.io')

var io =socket(server)

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('New connection: ' + socket.id)
	socket.on("host", hostMsg)
	socket.on("join", joinMsg)
	socket.on("game", gameMsg)
	socket.on("player", playerMsg)

	function hostMsg(data){
		socket.broadcast.emit("host", data)
		//io.socket.emit("mouse",data)
		console.log(data)
	}
	function joinMsg(data){
		socket.broadcast.emit("join", data)
		//io.socket.emit("mouse",data)
		console.log(data)
	}
	function gameMsg(data){
		socket.broadcast.emit("game", data)
		//io.socket.emit("mouse",data)
		console.log(data)
	}
	function playerMsg(data){
		socket.broadcast.emit("player", data)
		//io.socket.emit("mouse",data)
		console.log(data)
	}

}
