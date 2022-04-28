import * as React from "react"

import { Card } from './DefaultCard'

type Props = {
	title?: string
}

export const FibonacciCard = (props: Props) =>{
	const HOVER_BG : string = '#BEE3F8'
	const BG: string = '#63B3ED'
	const COLOR: string = '#333'


	return (
		<Card
			as='button'
			px={3}
			py={6}
			bg={BG}
			color={COLOR}
			width={57}
			border='2px'
			borderColor='#333'
			_hover={{
				bg: HOVER_BG,
				cursor: "pointer"
			}}
			{ ...props }
		/>
	)
}