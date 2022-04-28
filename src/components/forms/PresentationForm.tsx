import * as React from "react"
import { t } from 'i18next'
import { FormControl, Text, Input, Stack, Center } from "@chakra-ui/react"

import { DefaultButton } from '../buttons/DefaultButton'


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
		<Center h='90vh'>
			<FormControl>
				<Text>
					{ t('labels.enterName') }
				</Text>
				<Stack direction='row' spacing={2}>
					<Input
						type="text"
						placeholder="Username"
						name="username"
						border='2px'
						borderColor='#333'
						onChange={(e) => handleUsernameChange(e)} 
					/>
					<DefaultButton
						size="md"
						color="#fff"
						bg="#FF0080"
						colorScheme="pink"
						onClick={setUsername}
					>
						{ t('buttons.confirm') }
					</DefaultButton>
				</Stack>
			</FormControl>
		</Center>
	)
}
