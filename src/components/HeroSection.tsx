import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  HStack,
  Image,
  SimpleGrid,

} from '@chakra-ui/react';
export default function HeroSection() {
  return (
   
    <Box backgroundImage={"backgroundimage.jpg"} backgroundSize={'contain'} py={'20'} my={5}>
   
      <HStack>
      <SimpleGrid
    templateColumns={{
        base: "1fr",
        sm: "1fr 1fr",
    }}
    >
      <Box w={'85%'} color={'white'} pl={44} >
        <Heading fontSize={55}>
          Build your next idea even faster
        </Heading>
        <Text lineHeight={"8"}>
          One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies.
        </Text>
        <Button colorScheme={"blue"} variant={'outline'} mr='3' mt={'5'}>Explore Courses</Button>
      </Box>
      <Box w={'75%'}>
     <Image src='banner.png' alt='img' />
      </Box>
      </SimpleGrid>
      </HStack>
      
    </Box>
  )
}
export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
}
);
