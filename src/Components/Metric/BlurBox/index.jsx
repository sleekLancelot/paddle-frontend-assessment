import React from 'react'
import {Box} from '@chakra-ui/react'

const BlurBox = ({
    filter,
    opacity,
    bg,
    offsetLeft,
    offsetRight,
    width,
    height,
    padding,
}) => {
  return (
    <Box 
        position='absolute'
        left={offsetLeft}
        right={offsetRight}
        filter={filter}
        w={width}
        height={height}
        bg={bg}
        boxShadow={'inset 0 0 2000px rgba(255, 255, 255, .5)'}
        opacity={opacity}
        padding={padding}
    />
  )
}

export {BlurBox}