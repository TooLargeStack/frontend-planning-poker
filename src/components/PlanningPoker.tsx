import * as React from "react"
import { Text, Box, Tooltip } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { t } from 'i18next'

import SocketService from '../services/socket/SocketService'
import { PickedCards } from "./PickedCards"
import { CardsPanel } from './CardsPanel'
import { DefaultButton } from "./buttons/DefaultButton"

import { CardsType } from './types/CardsType'


type Props = {
	resetUser: (value: string) => void
}

export const PlanningPoker = (props: Props) => {
	const USER = localStorage.getItem('username')
	const [pickedCards, setPickedCards] = React.useState<CardsType>({})
	
	React.useEffect(() => {
		SocketService.connect()
	
		SocketService.receiveAllCards((values: CardsType) => {
			setPickedCards(values)
		})

		SocketService.receiveCard((values: CardsType) => {
			setPickedCards(values)
		})
	}, [])

	function removeUser() {
		props.resetUser('')
		localStorage.removeItem('username')
	}

	return (
		<Box pt={10}>
			<Text>
				{ `${t('greetings')} ${USER}!` }
			</Text>
			<DefaultButton
				size="md"
				bg="#333"
				color='#fff'
				mt={7}
				style={{ position: 'absolute', left: 50, top: 50 }}
				onClick={() => removeUser()}
			>
				<Tooltip hasArrow placement="top" label={t("buttons.changeName")}>
					<ArrowBackIcon />
				</Tooltip>
			</DefaultButton>
			<PickedCards pickedCards={pickedCards} />
			<CardsPanel pickedCards={pickedCards} setPickedCards={(value: CardsType) => setPickedCards(value)} />
		</Box>
	)
}