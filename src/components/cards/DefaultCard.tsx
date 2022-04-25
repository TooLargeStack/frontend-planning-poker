import * as React from "react"
import { Box, Heading, Text } from '@chakra-ui/react'

export const Card = (props: any) => {

	return (
		<Box
			w={props.w || 'auto'}
			px={4}
			py={5}
			shadow='md'
			borderWidth='1px'
			bg={props.bg}
			_hover={props._hover}
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