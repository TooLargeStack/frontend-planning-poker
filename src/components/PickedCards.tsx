import * as React from "react"
import { t } from 'i18next'
import { Stack, Box } from '@chakra-ui/react'

import { FibonacciCard } from "./cards/FibonacciCard"
import { CardsType } from "./types/CardsType"

type Cards = {
    pickedCards: CardsType
}


export const PickedCards = (props: Cards) => {

    return (
        <Box maxH='30vh' my={7}>
            { Object.keys(props.pickedCards)?.length >=1 ? t('labels.pickedCards')+':' : '' }
            <Stack direction='row' mt='10vh' spacing={10}>
                {
                    Object.keys(props.pickedCards).map((username: string, index) => ( // Object.keys type is `any`
                        <span key={index}>
                            { username }: <FibonacciCard title={props.pickedCards[username]} />
                        </span>
                    )
                )}
            </Stack>
        </Box>
    )

}