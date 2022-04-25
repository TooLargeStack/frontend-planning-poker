import * as React from "react"

import { Card } from './DefaultCard'

export const FibonacciCard = (props: any) =>{
	const HOVER_BG : string = '#BEE3F8'
	const BG: string = '#63B3ED'
	const COLOR: string = '#333'


	return (
		<Card
			as='button'
			_hover={{
				bg: HOVER_BG,
				cursor: "pointer"
			}}
			bg={BG}
			color={COLOR}
			{ ...props }
		/>
	)
}