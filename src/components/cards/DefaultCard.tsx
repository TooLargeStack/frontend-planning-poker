import * as React from "react"
import { Box, Heading, Text } from '@chakra-ui/react'

export const Card = (props: any) => {

	return (
		<Box
			shadow='md'
			borderWidth='1px'
			{...props}
		>
			<Heading
				fontSize='xl'
				color={props.color}
			>
				{props.title}
			</Heading>
			{props.desc && <Text color={props.color} mt={4}>{props.desc}</Text>}
		</Box>
	)
}