import { io } from "socket.io-client"

const SocketService = {
	connection: () => null,
	connect() {
		this.connection = io('http://localhost:5000');
	},

	onPickCard (value) {
		this.connection.emit('choose', value)
	},

	receiveCard(callback) {
		this.connection.on('pickedCard', (value) => callback(value))
	},

	receiveAllCards(callback) {
		this.connection.on('showAllPickedCards', callback)
	}
}

export default SocketService