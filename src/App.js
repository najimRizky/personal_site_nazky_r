import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import React, { useState } from 'react'
import UpDownNav from './components/UpDownNav';
import { Box, Center, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { Image } from "@chakra-ui/image";
import Nazky from "./assets/nazky_black.png";

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionImage = motion(Image)

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
      duration: 10,
      times: [0, 0.2, 1]
    },
    dismount:{
      color: "#000000",
      opacity: [0,0,0,0,1]
    }
  }
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
      duration: 10,
      times: [0, 0.2, 1]
    },
  },
  dismount:{
    opacity: 0
  }
}

function App() {
  const [intro, setIntro] = useState(true);
  setTimeout(() => {
    setIntro(false)
  },8000)
  return (
    <ChakraProvider>
      <AnimatePresence>
        {intro && (
          <MotionBox variants={BaseVariants} animate="visible" initial="hidden" exit="dismount" className="loading">
            <Center h="100%">
              <MotionBox mr={3} variants={LineVariants} width={1} className="introLine" height="65px" bg="#1a202c" />
              <SimpleGrid columns="1">
                <MotionImage width="170px" variants={NazkyVariants} src={Nazky} />
                <MotionText ml={1} variants={NazkyVariants}>Present</MotionText>
              </SimpleGrid>
            </Center>
          </MotionBox>
        )}
      </AnimatePresence>
      <div className="App">
        <Navbar />
        <UpDownNav />
        <div className="App_Content">
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
