import React from 'react'
import { Input } from '@chakra-ui/react'

const DefaultInput = ({
  width,
  placeholder,
  border,
  color,
  bgColor,
  fontSize,
}) => {
  return (
    <Input
        bgColor={bgColor}
        placeholder={placeholder}
        _focus={{
            boxShadow: "none",
        }}
        width={width}
        fontSize={fontSize}
        border={border}
        color={color}
        fontFamily={'mono'}
    />
  )
}

export {DefaultInput}