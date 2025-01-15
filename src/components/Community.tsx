import { Box, Container, SimpleGrid, Image, Heading, Text, Button} from '@chakra-ui/react'
import React from 'react'
import MotionBox from './MotionBox'
import { fadeIn } from './HeroSection'
import { planetVariants } from './MotionBox'

export default function Community() {
  return (
    <Container maxW={"container.xl"} pt={"150px"} pb={"150px"}>
   
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

<Box justifyContent={'center'} alignItems={'center'} boxShadow={'dark-lg'} borderRadius={'md'} height={'300px'} width={'600px'}  pt={10}>
<Heading justifyContent={'center'} pl={10} size={'xl'}>The Panaverse <Heading as={'span'} color={' #145CEB'}> Community </Heading>
</Heading>
<Text justifyContent={'center'} alignContent={'center'} p={'25px'} pb={'50px'}>
Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements.In this brand-new type of curriculum. In which students will learn how to make money and boost exports

in the classroom and will begin doing so within six months of the program&apos;s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
</Box>
</MotionBox>
  <MotionBox
        variants={fadeIn("left", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        >
<Box justifyContent={'center'}  pl={"120px"}  >
    <Image src='8056324.jpg' alt='img' ></Image>
      </Box>
      </MotionBox>
    </SimpleGrid>


</Container>
  )
}
