import React from 'react'
import { Input } from '@chakra-ui/react'

const BorderLessInput = ({
    placeholder,
}) => {
  return (
    <Input
        border='0px'
        borderRadius='0px'
        borderBottom='1px'
        placeholder={placeholder}
        fontSize='xs'
        _focus={{
            boxShadow: 'none',
        }}
    />
  )
}

export {BorderLessInput}