import { Box, Heading, VStack, Text, HStack, SimpleGrid, Card, CardBody, Flex, Image, Stack, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
import MotionBox from '../MotionBox'
import { fadeIn } from '../HeroSection'

export default function Programs() {
  const Variants = {
     hidden: {
      opacity: 0,
      x: 200,
      
      transition: {
        type: 'up',
        stiffness: 300,
        damping: 200,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'up',
        stiffness: 80,
        delay: 0.5,
      },
    },
  }

  
  return (
    <Box >
   
        <VStack pt={10}>
     
          <MotionBox  variants={Variants}
  initial="hidden"
  whileInView="show">
        <Heading textAlign={'center'} fontWeight={"bold"}>
        Program of
        <Heading as={'span'} fontWeight={"bold"} color={' #145CEB'}>
          {" "}
          Studies
         </Heading>
        </Heading>   
        <Text textAlign={'center'} px={'250px'}>
        The first three quarters are shared by all specialties and are dedicated to studying

Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development

The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs)

that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off

by offering services at a rate of $50 per hour ($96,000 per year).
        </Text>
        </MotionBox>
      
<HStack justifyContent={'center'} pt={"25px"} pb={"100px"} >
<MotionBox variants={
      fadeIn("up", "tween",0.5,1)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.55}}
      >
           <SimpleGrid
    templateColumns= {{
      base:"1fr",
       sm: "1fr 1fr ",
        md: "1fr 1fr 1fr 1fr"
        }}
         spacing={10}
         justifyContent={'center'}
        alignContent={'center'} 
         >
 
          <Box boxShadow='dark-lg' bg='white' borderRadius={'lg'} width={"230px"} height={"390px"}>
        <Card  >
  <CardBody>
    <Image
      src='qtr1.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={150}
      width={250}
    />
    <Stack  mt='2' spacing='2' mb={3}>
      <Heading size='md'>Quarter I</Heading>
      <Text>
      CS-101: Object-Oriented Programming using TypeScript
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justifyContent={'center'}>
    <ButtonGroup  spacing='2'>
      <Button  variant='ghost' colorScheme='blue' >
        See More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
<Box boxShadow='dark-lg' bg='white' borderRadius={'lg'} width={"230px"} height={"390px"}>
        <Card  >
  <CardBody>
    <Image
      src='qt2.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={140}
      width={250}
    />
    <Stack  mt='2'>
      <Heading size='md'>Quarter II</Heading>
      <Text>
      
Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs
<br/>
using Next.js 13      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justifyContent={'center'}>
    <ButtonGroup  >
      <Button  variant='ghost' colorScheme='blue' >
        See More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
<Box boxShadow='dark-lg' bg='white' borderRadius={'lg'} width={"230px"} height={"350px"}>
        <Card  >
  <CardBody>
    <Image
      src='qtr3.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={140}
      width={250}
    />
    <Stack mt={2}>
      <Heading size='md'> Quarter III</Heading>
      <Text >
     
Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs

using Next.js 13      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justifyContent={'center'}>
    <ButtonGroup  spacing='2'>
      <Button  variant='ghost' colorScheme='blue' >
        See More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
<Box boxShadow='dark-lg' bg='white' borderRadius={'lg'} width={"230px"} height={"390px"}>
        <Card  >
  <CardBody>
    <Image
      src='q4.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      height={140}
      width={250}
    />
    <Stack mt='1.5'  >
      <Heading size='md'>   Quarter IV, V <br/>(Specialized)</Heading>
      <Text >
   
Web 3.0 & Metaverse Specialization
<br/>
AI, Cloud-Native, IoT      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter justifyContent={'center'}>
    <ButtonGroup  spacing='2'>
      <Button  variant='ghost' colorScheme='blue' >
        See More
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
</SimpleGrid>
</MotionBox>
</HStack>

</VStack>

</Box>
  )
}
