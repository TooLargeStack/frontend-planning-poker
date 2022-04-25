import * as React from "react"
import { t } from 'i18next'
import { FormControl, Text, Button, Input, Stack } from "@chakra-ui/react"
import { motion } from 'framer-motion';


export const PresentationForm = (props: any) => {
	const [user, setUser] = React.useState('')

	function handleUsernameChange(event: any) {
		setUser(event.target.value)
	}

	function setUsername() {
		props.onChange(user)
		localStorage.setItem('username', user)
	}

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
					onChange={(e) => handleUsernameChange(e)} 
				/>
				<Button
					as={motion.button}
					size="md"
					color="#fff"
					bg=" #FF0080"
					colorScheme="pink"
					variant="solid"
					onClick={setUsername}
				>
					Enter
				</Button>
			</Stack>
		</FormControl>
	)
}
