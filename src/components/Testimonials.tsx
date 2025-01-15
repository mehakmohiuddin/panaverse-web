import {
  Flex,
  Heading,
  Text,
  Container,
  SimpleGrid,
Card,
CardBody,
Image
} from '@chakra-ui/react';
import MotionBox from './MotionBox';
import { fadeIn } from './HeroSection';


export default function Testimonials() {
  return (
    <Container maxW={'container.xl'} pt={10} pb={100} justifyContent={'center'}>
      <Heading textAlign={'center'} fontWeight={"bold"}>
        We Are 
        <Heading as={'span'} fontWeight={"bold"} color={' #145CEB'}>
          {" "}
          Proud
         </Heading>
        </Heading>
      <Text textAlign={'center'} py={3}>
        You don't have to struggle alone, you've got our assistance and help.
        </Text>
    <MotionBox variants={
      fadeIn("up", "tween",0.5,1)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
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
        
        <Card shadow={'none'} justifyContent={'center'} alignItems={'center'}  bg="#9b5de5" pt={3} >
<CardBody >
<Flex justifyContent={'center'} mb={2}>

<Image src={'/studentIcon.png'} width={"60px"} height={"60px"} alt='image'/>
</Flex>
<Heading textAlign={'center'} mb={1} color={'white'}>
5,000
</Heading>
<Text textAlign={'center'} color={'whiteAlpha.800'}>Students Enrolled</Text>
</CardBody>
</Card>
 
       <Card
             shadow={'none'}  justifyContent={'center'} alignItems={'center'} bg="#f15bb5" pt={3}  >
  <CardBody >
    <Flex justify={'center'} mb={2}>
     
    <Image src={'/teacherIcon.png'} width={"60px"} height={"60px"} alt='image'/>
    </Flex>
    <Heading textAlign={'center'} mb={1} color={'white'}>
    200+
    </Heading>
    <Text textAlign={'center'} color={'whiteAlpha.800'}>Skilled Instructors</Text>
  </CardBody>
</Card>
<Card
             shadow={'none'}  justifyContent={'center'} alignItems={'center'} bg="#1982c4" pt={3} >
  <CardBody >
    <Flex justifyContent={'center'} mb={2}>
     
    <Image src={'/classes.png'} width={"60px"} height={"60px"} alt='image'/>
    </Flex>
    <Heading textAlign={'center'} mb={1} color={'white'}>
    1,000
    </Heading>
    <Text textAlign={'center'} color={'whiteAlpha.800'}>Class Completed</Text>
  </CardBody>
</Card>
<Card
          shadow={'none'} justifyContent={'center'} alignItems={'center'} bg="#2a9d8f"  >
  <CardBody >
    <Flex justifyContent={'center'} mb={2}>
     
    <Image src={'/studentIcon.png'} width={"70px"} height={"70px"} alt='image'/>
    </Flex>
    <Heading textAlign={'center'} mb={1} color={'white'}>
    5,000
    </Heading>
    <Text textAlign={'center'} color={'whiteAlpha.800'}>Students Enrolled</Text>
  </CardBody>
</Card>
        </SimpleGrid>
        </MotionBox>
    </Container>
  )

}


