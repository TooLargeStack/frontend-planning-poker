import * as React from "react"
import { Stack } from '@chakra-ui/react'

import { FibonacciCard } from '../cards/FibonacciCard'

import { Utils } from '../../utils/Utils'

export const FibonacciCardsGroup = (props: any) => {
	const CARDS_NUMBER: Number = 7

	function listFibonacci(number: Number) {
		for (var fibonacci = ['0', '1'], i = 1; i < number; i++) {
			let value: string = (parseInt(fibonacci[i]) + parseInt(fibonacci[i - 1])).toString()
			fibonacci.push(value)
		}

		let result = Utils.removeDuplicates(fibonacci)
		return result
	}

	function onCardClick (value: string) {
		if(props.disabled) return

		props.onPickCard(value)
		props.setDisabled(true)
	}


	return (
		<Stack spacing={3} direction='row'>
			{
				listFibonacci(CARDS_NUMBER).map(function(value: any, index: number) {
					return (
						<div onClick={() => onCardClick(value)} key={index}>
							<FibonacciCard title={value} disabled={props.disabled} />
						</div>
					)
				}) 
			}
		</Stack>
	)
}