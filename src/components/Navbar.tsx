"use client";
import {
    Box,
    Flex,
    Button,
    Link,
    Image,
    HStack,
    List,
    ListItem
   
  } from '@chakra-ui/react';
  import {  SearchIcon } from '@chakra-ui/icons'
  import NextLink from 'next/link';
 
  export default function Navbar(){
    return(
      <Box pt={2} boxShadow={'md'}>
        <Flex justifyContent={"space-around"} alignItems={'center'}>
      <Box>
        <HStack>
        <Link as={NextLink} href="/" >
          <Image src='panaverse.webp' alt='logos'/>
          </Link>
          <List>
            <HStack align={'center'} spacing={10} fontWeight={'bold'} ml={"40px"}>
              <ListItem> <Link  as={NextLink} isExternal 
           href={"/about"} 
           _hover={{textColor: '#145CEB'}}
          
            //display={{base: "none", md: "inline-flex"}}
            >About </Link></ListItem>
              <ListItem> <Link  as={NextLink} isExternal 
           href={"community"} 
           _hover={{textColor: '#145CEB'}}
          
            //display={{base: "none", md: "inline-flex"}}
            >Community </Link></ListItem>
              <ListItem> <Link  as={NextLink} isExternal 
           href={"/"} 
           _hover={{textColor: '#145CEB'}}
          
            //display={{base: "none", md: "inline-flex"}}
            >More </Link></ListItem> 
            </HStack>
          </List>
        </HStack>
      </Box>
      <Box>
        <Flex alignItems={'center'}>
          <Box pr={"20px"}>
        <SearchIcon w={25} h={25}/>
        </Box>
        <Link  as={NextLink} isExternal 
           href={"https://portal.piaic.org/signup"}
          
            //display={{base: "none", md: "inline-flex"}}
            >
      <Button fontWeight={'bold'} colorScheme={"blue"} variant={"outline"} width="90px">Apply</Button>
      </Link>
      </Flex>
      </Box>
      </Flex>
      </Box>
      
    );
  }