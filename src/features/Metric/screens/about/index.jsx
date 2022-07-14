import React from 'react'
import { Box, Center, Container, Flex, Spacer, Heading, Text, Divider, chakra } from '@chakra-ui/react'

import bgImage from '../../../../Assets/img/background_img.svg'
import { BlurBox, Footer, NavBar } from '../../../../Components'

const About = () => {
  return (
    <Box
      minHeight='250vh'
      height={{ base: '310vh', md:'300vh'}}
      p={3}
      bgImage={`url(${bgImage})`}
      bgPosition={'center'}
      bgSize='cover'
      fontFamily={'mono'}
    >
      <NavBar />
      <Container maxWidth={'container.lg'} position='relative'>
        
        <BlurBox
          filter={'blur(8px)'}
          opacity='0.1'
          // bg='transparent linear-gradient(180deg, #eee 0%, #fff 100%) 0% 0% no-repeat padding-box'
          bg='rgba(255, 255, 255, .8)'
          offsetLeft='-20px'
          width={'60%'}
          height='100%'
        />

        <Flex direction={'column'} marginTop='35px'>
          <Heading color={'#fff'} fontSize={'18px'} alignSelf='center' w={{ base: '100%', md: '60%' }} marginY={'10px'} display='flex'
          alignItems='center'>
            <Divider orientation='horizontal' w='40px' color='#fff' mr='5px' /> <chakra.span>About Us</chakra.span>
          </Heading>

          <Center marginY={'15px'}>
            <Text fontSize={{ base: '25px', md: '50px' }} fontWeight={'bold'} color={'#fff'}>
              Built for Saas <br /> and E-commerce
            </Text>
          </Center>

          <Text 
            alignSelf={'flex-end'} 
            color={'#fff'} 
            fontSize={'18px'}
            marginY={'30px'}
            w={{ base: '100%', md: '250px' }}>
            Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch, automate and manage multi-affiliate campaigns in 5 minutes.
          </Text>
        </Flex>
      </Container>

      <Heading my='50px' mx={'auto'} size='lg'
      fontSize={'30px'} color='#fff' w={{ base: '100%', md: '60%' }} textAlign='center'>
        Metricks was developed because just like you, we needed a product that could give us <chakra.strong>good value</chakra.strong>.
      </Heading>

      <Flex
        direction={'row'}
        flexWrap='wrap'
        marginLeft={{base: '0', md: '100px'}}
        justifyContent={'space-between'}
        alignItems='center'
        color='#fff'
        fontWeight={300}
        fontSize={'16px'}
      >
        <Box w={{ base: '100%', md: '40%' }} alignSelf='flex-start' mb={'20px'} lineHeight='30px'>
          <chakra.p display={'flex'} alignItems='center' my='20px'>
            <Text alignSelf={'flex-start'}> 01 <Divider width={'40px'} /></Text>
            <Text>Whats Up?</Text>
          </chakra.p>
          We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.
        </Box>

        <Box w={{ base: '100%', md: '40%' }} backdropBlur='18px' position={'relative'} mb={'20px'} lineHeight='30px'>

          <BlurBox
            filter={'blur(4px)'}
            opacity='0.1'
            bg='transparent linear-gradient(180deg, #eee 0%, #ddd 100%) 0% 0% no-repeat padding-box'
            offsetRight='-20px'
            width={'120%'}
            height='100%'
          />

          <chakra.p display={'flex'} alignItems='center' my='20px'>
            <Text alignSelf={'flex-start'}> 02 <Divider width={'40px'} /></Text>
            <Text>Growing With You</Text>
          </chakra.p>

          <Text my='20px'>
            Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
          </Text>
          <Text my='30px'>
            Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.
          </Text>
        </Box>
      </Flex>

      <Box 
        width={'100%'}
        height='200px'
        my={'30px'} 
        color='#fff' 
        px='15px'
        pt='35px'
        position={'relative'}
        textAlign={{ base: 'center', md: 'left'}}
      >
       <BlurBox
          filter={'blur(4px)'}
          opacity='0.1'
          offsetLeft={'-20px'}
          bg='transparent linear-gradient(180deg, #eee 0%, #ddd 100%) 0% 0% no-repeat padding-box'
          width={'120%'}
          height='100%'
        /> 
        <Heading fontSize={'40px'} mt='20px'>
          Got a Question?
        </Heading>
        <Text my='20px'>
          See how Metricks can help your business grow with best Affiliate Marketing Tracking <br /> Software.
        </Text>
        <chakra.p color='#FF00F7'>Contact Us <i class="fa-solid fa-arrow-right"></i> </chakra.p>
      </Box>
      
      <Footer />
    </Box>
  )
}

export {About}