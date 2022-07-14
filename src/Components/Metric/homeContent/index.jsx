import React from 'react'
import { Center, SimpleGrid, HStack, useBreakpointValue } from '@chakra-ui/react'

import { CountDownCard } from '../countDownCard'

import './homeContent.scss'
import { BorderLessInput, InputWithButton } from '../input'

const Main = () => {
    const cards = [
        {
            h4: '7',
            text: 'days',
        },
        {
            h4: '27',
            text: 'hours',
        },
        {
            h4: '07',
            text: 'minutes',
        },
        {
            h4: '47',
            text: 'second',
        },
    ]

    const margin = useBreakpointValue({ md: '0', base: '20px' })

  return (
    <div className='main'>
        <h3>Something awesome is <br /> coming soon</h3>
        <p>
            Your all-in-one affiliate marketing tracking software <span className="bold">track, automate</span> and 
            <br /> <span className="bold">optimize</span> your campaigns.
        </p>

        <Center>
            <SimpleGrid spacing={6} columns={{ base: 2, md: 4 }} mt={8}>
                {
                    cards.map( (card,index) => (
                        <CountDownCard
                            key={index}
                            h4={card.h4}
                            text={card.text}
                            oneSided={ index + 1 === cards.length}
                        />
                    ))
                }
            </SimpleGrid>
        </Center>

        <Center mt="3rem">
            <HStack spacing={4} mx={margin}>
                <BorderLessInput
                    placeholder='First Name..'
                />
                <BorderLessInput
                    placeholder='Last Name..'
                />
            </HStack>
        </Center>

        <Center mt={"3rem"} mx={margin}>
            <HStack
                borderRadius="full"
                width={{ base: "100%", md: "50%" }}
                bgColor="white"
            >
                <InputWithButton
                    placeholder='Enter Your Email Address...'
                    buttonText='Join Our Waiting List'
                />
            </HStack>
        </Center>
    </div>
  )
}

export {Main}