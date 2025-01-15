import { Box, Button, Container, Flex, HStack, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import MotionBox from './MotionBox'
import { fadeIn } from './HeroSection'

export default function Features() {
  return (
   <Container maxW={'6xl'} pt={150}>
   
        <SimpleGrid
        templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
        }}
        spacing={1} 
        >
<Box pb={"20px"}  >
    <Image src='hand-drawn-flat-design-metaverse-illustration_23-2149245320.jpg' height={420} width={490}></Image>
</Box>
 <MotionBox 
    variants={fadeIn("down", "tween",0.5,1)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    >
<Box justifyContent={'center'} pr={10} pt={10}>
    <Heading size={'xl'}>What is <Heading as={'span'} color={' #145CEB'}> Metaverse ? </Heading>
    </Heading>
    <Text justifyContent={'center'} pt={5}>A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the &quot;metaverse.&quot; Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.

Metaverse is a highly-anticipated future version of the internet where users are able to fully immerse themselves in a shared, virtual world. It is expected to have a significant impact on a variety of industries and bring people together from all over the world, but also raises important questions about privacy and security.</Text>
<Button colorScheme={"blue"} variant={'outline'}  mt={'5px'}>Read More</Button>
    </Box>
    </MotionBox>
        </SimpleGrid>

    
   </Container>
  )
}
