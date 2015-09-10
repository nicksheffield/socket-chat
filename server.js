var io = require('socket.io')()

// start socket.io on port 9999
io.listen(9999)

// when a client connects to the socket.io server
io.on('connection', function(socket) {
	console.log('connection from', socket.id)
	
	// send them a welcome message
	socket.emit('welcome', 'Yo waddup!')
	
	// when we receive the message from the client
	socket.on('send-message', function(data) {
		// send it back out to everybody connected
		io.emit('receive-message', data)
	})
})

console.log('\nSocket server running at http://localhost:9999')