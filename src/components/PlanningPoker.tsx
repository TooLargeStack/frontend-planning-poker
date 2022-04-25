import * as React from "react"
import { Text } from '@chakra-ui/react'
import { FibonacciCardsGroup } from "./cardsGroup/FibonacciCardsGroup"
import { t } from 'i18next'

import SocketService from '../services/socket/SocketService'

export const PlanningPoker = (props: any) => {
	const USER = localStorage.getItem('username')
	const [pickedCards, setPickedCards] = React.useState<Array<string>>([])
	
	React.useEffect(() => {
		SocketService.connect()
	
		SocketService.receiveAllCards((values: Array<string>) => {
			setPickedCards(values)
		})
	
		SocketService.receiveCard((values: Array<string>) => {
			setPickedCards(values)
		})
	}, [])

	function handlePickCard(value: string) {
		let actualPickedCards = pickedCards
		SocketService.onPickCard(value)

		setPickedCards([...actualPickedCards, value])
	}

	return (
		<div>
			<Text mb={7}>{ `${t('greetings')} ${USER}! ${t('labels.selectACard')}:` }</Text>
			{pickedCards.map((value, index) => <span key={index}>{value}</span>)}
			<FibonacciCardsGroup onPickCard={(value: string) => handlePickCard(value) } />
		</div>
	)
}