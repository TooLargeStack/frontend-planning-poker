import * as React from "react"

import { Card } from './DefaultCard'

type Props = {
	title?: string
	disabled?: boolean
}

export const FibonacciCard = (props: Props) =>{
	const HOVER_BG : string = '#BEE3F8'
	const BG: string = props.disabled ? HOVER_BG : '#63B3ED'
	const COLOR: string = props.disabled ? '#4c4c4c' : '#333' 


	return (
		<Card
			as='button'
			px={3}
			py={6}
			bg={BG}
			color={COLOR}
			width={57}
			border='2px'
			borderColor={COLOR}
			_hover={{
				bg: HOVER_BG,
				cursor: props.disabled ? 'not-allowed' : "pointer"
			}}
			{ ...props }
		/>
	)
}