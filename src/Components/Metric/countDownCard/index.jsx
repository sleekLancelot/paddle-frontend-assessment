import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

import './CountDownCard.scss'

const CountDownCard = ({
    h4,
    text,
    oneSided,
}) => {
  return (
    <Box
      p={6}
      textAlign='center'
      bgColor='white'
      color="#000"
      borderRadius={ oneSided ? '9px 0 0 9px' : '9px'}
    >
      <Heading>{h4}</Heading>
      <Text fontWeight='normal' textTransform='capitalize'>{text}</Text>
    </Box>
  )
}

export {CountDownCard}