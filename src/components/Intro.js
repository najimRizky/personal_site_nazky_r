import React, { useEffect, useState } from 'react'
import { Box, Center, HStack, SimpleGrid, Text } from '@chakra-ui/layout';
import { AnimatePresence, motion } from 'framer-motion';
import { connect } from 'react-redux';
// import { Image } from "@chakra-ui/image";
// import Nazky from "../assets/nazky_black.png";
const MotionBox = motion(Box)
const MotionText = motion(Text)
// const MotionImage = motion(Image)
const MotionHStack = motion(HStack)
const MotionSimpleGrid = motion(SimpleGrid)



const BaseVariants = {
  hidden: {
    opacity: 1
  },
  visible: {
    transition: {
      delayChildren: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  dismount: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
}

const LineVariants = {
  hidden: {
  },
  visible: {
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    // x: [0, 0, 0, 0, -25, -25, -25, -25, -25, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // y: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 300, 300],
    // rotate: [0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 0, 0, 0, 0, 0, 0, 0],
    x: [10, 10, 10, 10, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5],
    y: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    rotate: [0, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    transition: {
      duration: 9.5,
      times: [0, 0.2, 1]
    },
  },
  dismount: {
    rotate: -720,
    x: 80,
    opacity: [1, 1, 1, 1, 0],
    transition: {
      duration: 2,
      // delay: 1,
    }
  },
}

const StartNazky = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  },
  dismount: {
    opacity: 0,
    color: "#fff",
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1

    }
  }
}

const NazkyVariants = {
  hidden: {
  },
  visible: {
    // opacity: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // x: [-100, -100, -100, -100, -100, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -20, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100],
    opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    x: [-30, -30, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    transition: {
      duration: 9.5,
      times: [0, 0.2, 1]
    },
  },
  dismount: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    }
  }
}

const ClickVariant = {
  hidden: {
    y: 8,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: [0, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.6,
      delay: 4
    },
  },
  dismount: {
    y: 100,
    transition: {
      duration: 0.6
    }
  }
}

const Intro = (props) => {
  const [intro, setIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false)

  const exitIntro = () => {
    if (introComplete) {
      setIntro(false)
      setTimeout(() => {
        props.changeStatusIntro()
      }, 2200)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroComplete(true)
    }, 4500)
  }, [])

  return (
    <AnimatePresence>
      {intro && (
        <MotionBox color="white" onClick={exitIntro} variants={BaseVariants} animate="visible" initial="hidden" exit="dismount" className="loading">
          <Center h="100%" >
            <MotionBox mr={3} variants={LineVariants} width={["4px"]} className="introLine" height="65px" bg="#FFFFFF" />
            <MotionSimpleGrid variants={StartNazky} columns="1">
              <MotionHStack fontSize="5xl" ml="0" mb="-4" spacing="0" fontFamily="lequire">
                <motion.span variants={NazkyVariants}>n</motion.span>
                <motion.span variants={NazkyVariants}>a</motion.span>
                <motion.span variants={NazkyVariants}>z</motion.span>
                <motion.span variants={NazkyVariants}>k</motion.span>
                <motion.span variants={NazkyVariants}>y</motion.span>
              </MotionHStack>
              <MotionText ml={1} variants={NazkyVariants} >Present</MotionText>
              <MotionText fontWeight={500} position="absolute" variants={ClickVariant} bottom="2rem">Click Anywhere to Start..</MotionText>
            </MotionSimpleGrid>
          </Center>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

const getRedux = (state) => {
  return {
    intro: state.intro
  }
}

const setDispatchRedux = (dispatch) => {
  return {
    changeStatusIntro: () => { dispatch({ type: 'FINISH_INTRO', intro: false }) }
  }
}

export default connect(getRedux, setDispatchRedux)(Intro);