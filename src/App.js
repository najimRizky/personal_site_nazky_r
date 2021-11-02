import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import UpDownNav from './components/UpDownNav';
// import { Box, Center, Heading } from '@chakra-ui/layout';
// import { motion } from 'framer-motion';

// const MotionBox = motion(Box)
// const MotionHeading = motion(Heading)

// const LoadingVariants = {
//   hidden: {
//     x: 0,
//   },
//   visible: {
//     x: "-100%",
//     transition:{
//       type: "linear",
//       delay: 3,
//       duration: 0.5,
//       when: "afterChildren"
//     }
//   }
// }



function App() {
  return (
    <ChakraProvider>
      {/* <MotionBox 
      variants={LoadingVariants} initial="hidden" animate="visible" 
      className="loading"
      >
        <Center h="100%">
          <MotionHeading animate={{opacity: [0,1,1,1,0], transition: {duration: 3}}} color="white">
            Welcome
          </MotionHeading>
        </Center>
      </MotionBox> */}
      <div className="App">
        <Navbar />
        <UpDownNav/>
        <div className="App_Content">
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
