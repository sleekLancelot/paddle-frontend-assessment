import React from 'react'
import { Box, Center, Container } from '@chakra-ui/react'

import bgImage from '../../../../Assets/img/background_img.svg'
import { NavBar } from '../../../../Components'

const About = () => {
  return (
    <Box
        minHeight='170vh'
        p={3}
        bgImage={`url(${bgImage})`}
        bgPosition={'center'}
        bgSize='cover'
    >
        <NavBar />
    </Box>
  )
}

export {About}