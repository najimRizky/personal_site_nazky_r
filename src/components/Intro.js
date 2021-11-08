import React, { useState } from 'react'
import { Box, Center, HStack, SimpleGrid, Text } from '@chakra-ui/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { Image } from "@chakra-ui/image";
import Nazky from "../assets/nazky_black.png";
const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionImage = motion(Image)
const MotionHStack = motion(HStack)



const BaseVariants = {
  hidden: {
    opacity: 1
    // x: 0,
  },
  visible: {
    // x: "-100%",
    transition: {
      // type: "linear",
      delayChildren: 0.3,
      // duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  dismount:{
    opacity: 0
  }
}

const LineVariants = {
  hidden: {
    // y: 100,
    // rotate: 0,
  },
  visible: {
    x: [0, 0, 0, 0, -25, -25, -25, -25, -25, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    y: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 300, 300],
    rotate: [0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0],
    transition: {
      duration: 9,
      times: [0, 0.2, 1]
    },
    dismount:{
      color: "#000000",
      opacity: [0,0,0,0,1]
    }
  }
}

const tes = {
  hidden: {

  },
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {

  },
}

const NazkyVariants = {
  hidden: {
    // y: 100,
    // rotate: 0,
  },
  visible: {
    opacity: [0, 0, 0, 0, 0, 0,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    // opacity: 1,
    x: [-100, -100, -100, -100,-100, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -100, -100, -100, -100, -100,-100, -100, -100, -100, -100, -100, -100, -100, -100, -100],
    // rotate: [0,0,0,0,0,20],
    transition: {
      duration: 9,
      times: [0, 0.2, 1]
    },
  },
  dismount:{
    opacity: 0
  }
}

const Intro = () => {
    const [intro, setIntro] = useState(true);
  setTimeout(() => {
    setIntro(false)
  },7800)
    return ( 
        <AnimatePresence>
        {intro && (
          <MotionBox animate={BaseVariants} animate="visible" initial="hidden" exit="dismount" className="loading">
            <Center h="100%">
              <MotionBox mr={3} variants={LineVariants} width={1} className="introLine" height="65px" bg="#1a202c" />
              <SimpleGrid columns="1">
                {/* <MotionImage width="170px" variants={NazkyVariants} src={Nazky} /> */}
                <MotionHStack variants={tes} fontSize="5xl" ml="0" mb="-4" spacing="0" fontFamily="lequire">
                  <MotionText variants={NazkyVariants}>n</MotionText>
                  <MotionText variants={NazkyVariants}>a</MotionText>
                  <MotionText variants={NazkyVariants}>z</MotionText>
                  <MotionText variants={NazkyVariants}>k</MotionText>
                  <MotionText variants={NazkyVariants}>y</MotionText>
                </MotionHStack>
                {/* <Text variants={NazkyVariants} fontSize="5xl" ml="0" mb="-4" fontFamily="Lequire">nazky</Text> */}
                <MotionText ml={1} variants={NazkyVariants}>Present</MotionText>
              </SimpleGrid>
            </Center>
          </MotionBox>
        )}
      </AnimatePresence>
     );
}
 
export default Intro;