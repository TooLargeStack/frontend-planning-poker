import * as React from "react"
import { Text, Box } from '@chakra-ui/react'
import { t } from 'i18next'

import SocketService from '../services/socket/SocketService'
import { PickedCards } from "./PickedCards"
import { CardsPanel } from './CardsPanel'

import { CardsType } from './types/CardsType'


export const PlanningPoker = () => {
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

	return (
		<Box pt={10}>
			<Text>{
				`${t('greetings')} ${USER}!` }
			</Text>
			<PickedCards pickedCards={pickedCards} />
			<CardsPanel pickedCards={pickedCards} setPickedCards={(value: CardsType) => setPickedCards(value)} />
		</Box>
	)
}