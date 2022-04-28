import * as React from 'react';
import { Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'


export const DefaultButton = (props: any) => {
    return (
        <Button
            as={motion.button}
            border='2px'
            borderColor='#333'
            variant="solid"
            {...props}
        ></Button>
    )
}