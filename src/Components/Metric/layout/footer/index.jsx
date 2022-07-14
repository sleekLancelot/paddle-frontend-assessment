import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, Text, VStack } from '@chakra-ui/react'

import './Footer.scss'

const Footer = () => {
    const thisYear = new Date().getFullYear()
  return (
    <VStack
      spacing={5}
      mt={{ base: '48', sm: '32', md: '56' }}
      justifyContent={'center'}
      color={'white'}
      as='footer'
    >
        <HStack spacing={7} mb={3}>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook blur"></i>
            <i className="fa-brands fa-linkedin blur"></i>
            <i className="fa-brands fa-instagram blur"></i>
            <i className="fa-brands fa-twitter blur"></i>
        </HStack>

        <HStack 
            spacing={6} 
            fontSize={'sm'} 
            color='#A0AEC0'
        >
            <Link to='#'>Terms of services</Link>
            <Link to='#'>Privacy policy</Link>
        </HStack>
        <Text 
            textAlign={'center'}
            color='#A0AEC0'
            fontSize={'sm'}
        >
            Copyright {thisYear} @ Peddle Technologies. All Rights
            Reserved.
        </Text>
    </VStack>
  )
}

export {Footer}