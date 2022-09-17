import * as React from "react"
import { Text, Box } from '@chakra-ui/react'
import { t } from 'i18next'

import { DefaultButton } from './buttons/DefaultButton'
import { FibonacciCardsGroup } from './cardsGroup/FibonacciCardsGroup'
import SocketService from '../services/socket/SocketService'
import { CardsType } from './types/CardsType'


type Props = {
    pickedCards: CardsType
    setPickedCards: any
}


export const CardsPanel = (props: Props) => {
    const USER = localStorage.getItem('username')
    const [disabled, setDisabled] = React.useState<boolean>(false)

    function handlePickCard(value: string) {
		let username: any = localStorage.getItem('username')
		const card: CardsType = {}
		card[username] = value

		let actualPickedCards: Object = props.pickedCards
		SocketService.onPickCard({'username': USER, 'value': value})
		props.setPickedCards({...actualPickedCards, ...card})
	}

    function handleReset() {
        props.setPickedCards({})
        SocketService.onResetCards()
        setDisabled(false)
    }

    return (
        <Box position="absolute" bottom={100}>
            <Text mb={7}>
                { t('labels.selectACard') }:
            </Text>
            <Box bottom={10}>
                <FibonacciCardsGroup
                    onPickCard={(value: string) => handlePickCard(value) }
                    disabled={disabled}
                    setDisabled={(value: boolean) => setDisabled(value)}
                />
            </Box>
            <DefaultButton
                size="md"
                bg="#FF0080"
                color='#fff'
                mt={7}
                onClick={() => handleReset()}
            >
                { t('buttons.reset') }
            </DefaultButton>
        </Box>
    )
}