import * as React from "react"
import { t } from 'i18next'
import { FormControl, Text, Button, Input, Stack } from "@chakra-ui/react"
import { motion } from 'framer-motion';


import {io} from "socket.io-client"


io('http://localhost:5000', {
  withCredentials: true,
  transports: ["websocket", "polling"]
});

export class PresentationForm extends React.Component {
	constructor(props: any) {
		super(props)
		this.state = {
			username: ""
		}
	}

	handleUsernameChange =(event: any) => {
		this.setState({username: event.target.value})
	}

	render() {
		return (
			<FormControl>
				<Text>
					{ t('labels.enterName') }
				</Text>
				<Stack direction='row' spacing={2}>
					<Input
						type="text"
						placeholder="Username"
						name="username"
						onChange={this.handleUsernameChange} 
					/>
					<Button
						as={motion.button}
						size="md"
						color="#fff"
						bg=" #FF0080"
						colorScheme="pink"
						variant="solid"
					>
						Enter
					</Button>
				</Stack>
			</FormControl>
		)
	}

}