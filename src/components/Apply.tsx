import { Box, Container, Heading, SimpleGrid, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import MotionBox, { planetVariants } from './MotionBox'
import { fadeIn } from './HeroSection'

export default function Apply() {
  return (
    <Container maxW={"container.xl"} pb={30}>
   
    <SimpleGrid
    templateColumns={{
        base: "1fr",
        sm: "1fr 1fr",
    }}
    spacing={0} 
    justifyContent={'center'}
    alignContent={'center'}
    >
       
       <MotionBox 
variants={planetVariants("left")}
initial="hidden"
whileInView="show"
>
<Box justifyContent={'center'}  >
 
      <Image src='study1.jpg' height={450} width={450} pt={10} pb={90}></Image>
      </Box>
      </MotionBox>
    <MotionBox 
variants={fadeIn("left", "tween",0.5,1)}
initial="hidden"
whileInView="show"
viewport={{once: false, amount: 0.25}}
>

<Box justifyContent={'center'} alignItems={'center'} pt={10}>
<Heading justifyContent={'center'} pl={10} size={'xl'}> Achieve Your <Heading as={'span'} color={' #145CEB'}> Goals </Heading>
</Heading>
<Text justifyContent={'center'} alignContent={'center'} p={'25px'} pb={'20px'}>
This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
<Button colorScheme={"blue"} variant={'outline'} ml={"19.55px"}>Apply Now</Button>
</Box>
 </MotionBox>
    </SimpleGrid>
</Container>
  )
}
