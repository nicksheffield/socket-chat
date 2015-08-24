// connect to the socket.io server
var socket = io.connect('http://localhost:9999')

// when we connect to the server...
socket.on('welcome', function(data) {
	// log what they told us
	console.log(data)
})

// when we receive the message...
socket.on('receive-message', function(data) {
	// put it into the list
	if(data.sender !== socket.id){
		$('.messages').append('<li class="them"><span>' + data.body + '</span></li>')
	}
	
})

$('#input-form').on('submit', function(event) {
	// prevent the form from submitting
	event.preventDefault()
	
	// capture the value in the input field
	var message = $('#message').val()
	
	// emit the input value
	socket.emit('send-message', {
		sender: socket.id,
		body: message
	})
	
	// clear the input field
	$('#message').val('')
	
	$('.messages').append('<li class="you"><span>' + message + '</span></li>')
})