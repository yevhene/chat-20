const webSocket = new WebSocket('ws://localhost:8080');

function createMessage() {
  const message = document.getElementById('message').value;

  webSocket.send(message)

  return false;
}

webSocket.onmessage = function(event) {
  document.getElementById('messages').innerHTML += `<li>${event.data}</li>`;
}
