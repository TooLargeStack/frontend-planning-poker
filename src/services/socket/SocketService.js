import { io } from "socket.io-client"

const SocketService = {
	connection: () => null,
	connect() {
		this.connection = io(process.env.REACT_APP_API_URI);
	},

	onPickCard (value) {
		this.connection.emit('choose', value)
	},

	onResetCards() {
		this.connection.emit('reset', {})
	},

	receiveCard(callback) {
		this.connection.on('pickedCard', (value) => callback(value))
	},

	receiveAllCards(callback) {
		this.connection.on('showAllPickedCards', callback)
	}
}

export default SocketService