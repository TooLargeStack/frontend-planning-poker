import * as React from "react"
import { Text } from '@chakra-ui/react'
import { FibonacciCardsGroup } from "./cardsGroup/FibonacciCardsGroup"
import { t } from 'i18next'

import SocketService from '../services/socket/SocketService'


export const PlanningPoker = () => {
	const USER = localStorage.getItem('username')
	const [pickedCards, setPickedCards] = React.useState<any>({})
	
	React.useEffect(() => {
		SocketService.connect()
	
		SocketService.receiveAllCards((values: any) => {
			setPickedCards(values)
		})

		SocketService.receiveCard((values: any) => {
			setPickedCards(values)
		})
	}, [])

	function handlePickCard(value: string) {
		let username: any = localStorage.getItem('username')
		const card: any = {}
		card[username] = value

		let actualPickedCards = pickedCards
		SocketService.onPickCard({'username': USER, 'value': value})
		debugger
		setPickedCards({...actualPickedCards, ...card})
	}

	return (
		<div>
			<Text mb={7}>{ `${t('greetings')} ${USER}! ${t('labels.selectACard')}:` }</Text>
			<Text mb={7}>
				{
					Object.keys(pickedCards).map((username: any, index) =>
						<p key={index}>{`${username} : ${ pickedCards[username] }`}</p>
					)
				}
			</Text>
			<FibonacciCardsGroup onPickCard={(value: string) => handlePickCard(value) } />
		</div>
	)
}