import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import bgBox from "../assets/bgBoxHome.svg";
import { Heading } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import Me from "../assets/Me2.png";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import '../App.css';
import { motion } from "framer-motion";

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)

const BaseVariants = {
    hidden: {
        y: -500,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 3.5,
            type: "linear",
            duration: 0.5,
            delayChildren: 3
        }
    }
}

const NextVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 3,
            // delay: 0.8
        }
    }
}

const NextVariants2 = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 3,
            // delay: 0.8
        }
    }
}

const Home = () => {
    return (
        <>
            <MotionBox backgroundImage={bgBox} px="75px" pb={[10, 10, 60, 60]} pt={70} h={["100%", "100%", "500px", "500px"]} variants={BaseVariants} initial="hidden" animate="visible">
                <SimpleGrid columns={[1, null, 2]}>
                    <MotionBox variants={NextVariants} color="white" w="100%">
                        <MotionHeading bgGradient="linear(to-r, #FF0075, #172774, #FF0075)" bgClip="text" fontSize="70px" style={{ fontWeight: '500' }} lineHeight="70px" >Hi I'm <br /> Najim <br />Rizky</MotionHeading>
                        <MotionText mt={[10]} lineHeight="30px" fontFamily="Raleway" fontWeight="thin" fontSize="14">
                            A <i><b>Junior IT Programmer</b></i> who is currently<br /> studying at Multimedia Nusantara University
                        </MotionText>
                        <Button
                            className="downloadCVBtn"
                            bgGradient="linear(to-r, #ff00d4, #7407f1, #196ad4)"
                            transition="0.4s"
                            bgSize="200%"
                            _hover={{
                                bgPosition: "right"
                            }} my={[10]} color="black">Download CV</Button>
                    </MotionBox>
                    <MotionFlex mt={[0, 0, 10, 10]} variants={NextVariants2} justify={['left', "left", "end", "center"]} color="white" w="100%" >
                        <Image src={Me} objectFit="cover" htmlWidth={["350px", "350px", "100%", "100%"]} />
                    </MotionFlex>
                </SimpleGrid>
            </MotionBox>
            <Box px="75px" pb={[10, 10, 60, 60]} pt={70}>
                <Heading mb={10} fontWeight={700} fontSize={50} fontFamily="Raleway">
                    About
                </Heading>
                <Text w="50%">
                    Currently I'm still a third year student majoring in <b>Informatics</b> at <b>Multimedia Nusantara University</b>. Even though I'm still a student, I have some ability in web development, machine learning, android apps, etc. To find out what I can do, see my Portfolio.
                </Text>
                <Text>Contact Me</Text>
                <Text>Najim Rizky</Text>
                <Text>(+62)895604565752</Text>
                <ButtonGroup>
                    <IconButton   fontSize="xl" bg="#615953" color="#5B7BEA" isRound _hover={{ bg: "#6D645C", color: 'white' }} ></IconButton>
                </ButtonGroup>
            </Box>
        </>
    );
}

export default Home;