import React from 'react'
import { Button, useBreakpointValue } from '@chakra-ui/react'
import { DefaultInput } from './DefaultInput'

const InputWithButton = ({
    placeholder,
    buttonText,
}) => {
    const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <>
        <DefaultInput
            bgColor={'transparent'}
            placeholder={placeholder}
            _focus={{
                boxShadow: 'none',
            }}
            width='300px'
            fontSize={'sm'}
            border='none'
            color={'#000000'}
        />
        <Button
            rounded={'full'}
            bgColor='#271AC1'
            size={buttonSize}
            _hover={{
                bgColor: '#271AC1',
            }}
            height={{ base: '3rem' }}
            _active={{
                bgColor: '#271AC1',
            }}
            width={{ base: '270px', md: 'auto' }}
            textTransform={'uppercase'}
            fontSize={{ base: 'xs', md: 'sm' }}
            fontFamily={'mono'}
        >
            {buttonText}
        </Button>
    </>
  )
}

export {InputWithButton}