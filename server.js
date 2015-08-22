var io = require('socket.io')(9999)

io.on('connection', function(socket) {
	console.log('connection from', socket.id)
	
	socket.emit('welcome', 'Yo waddup!')
	
	// when we receive the message from the client
	socket.on('send-message', function(data) {
		// send it back out to everybody connected
		io.emit('receive-message', data)
	})
})

console.log('\nSocket server running at http://localhost:9999')