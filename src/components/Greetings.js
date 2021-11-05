import bgBox from "../assets/bgBoxHome.svg";
import { Image } from "@chakra-ui/image";
import Me from "../assets/Me2.png";
import { motion, useAnimation } from "framer-motion";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)



const BaseVariants = {
    hidden: {
        // y: -500,
        opacity: 1
    },
    visible: {
        // y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delayChildren: 0
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
        }
    }
}

const Greetings = () => {
    const { ref, inView } = useInView();
    const id = "home"
    const animation = useAnimation();

    setTimeout(() => {
        animation.start("visible");
    },8100)
    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);
    return (
        <MotionBox id={id} backgroundImage={bgBox} px={[5, 5, 20, 20]} pb={[10, 10, 60, 60]} pt={70} h={["100%", "100%", "500px", "500px"]} variants={BaseVariants} initial="hidden" animate={animation}>
            <SimpleGrid columns={[1, null, 2]}>
                <MotionBox variants={NextVariants} color="white" w="100%">
                    <MotionHeading ref={ref} bgGradient="linear(to-r, #FF0075, #172774, #FF0075)" bgClip="text" fontSize="70px" style={{ fontWeight: '500' }} lineHeight="70px" >Hi I'm <br /> Najim <br />Rizky</MotionHeading>
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
                    <Image borderRadius={10} src={Me}  /*{htmlWidth={["100%", "100%", "90px", "80px"]}}*/ width={["sm"]} />
                </MotionFlex>
            </SimpleGrid>
        </MotionBox>
    );
}

export default Greetings;