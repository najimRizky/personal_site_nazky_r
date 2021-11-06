import { Badge, Box, Center, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import bgPortfolio from "../assets/large-triangles.svg"
import { Image } from "@chakra-ui/image";
import imgNYLCinema21 from "../assets/NYL Cinema21.png"
// import { motion } from "framer-motion";
import Tilt from "react-vanilla-tilt"

import vueLogo from "../assets/logoPortfolio/vue.png"
import vuetifyLogo from "../assets/logoPortfolio/vuetify.png"
import { Tooltip } from "@chakra-ui/react";

// const MotionBox = motion(Box);

const Portfolio = () => {
    const { ref, inView } = useInView();
    const id = "portfolio"

    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);


    return (
        <Box id={id} bgColor="white" bgImage={bgPortfolio} bgSize="70%" px={[5, 5, 20, 20]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} fontWeight={400} fontSize={50} >
                Portfolio
            </Heading>
            <SimpleGrid columns={[1, 1, 1, 2]} justifyItems="center">
                <Tilt className="tiltCard" >
                    <Box my={5} w={["100%", "100%", "90%", "90%"]} className="portfolioCard" >
                        <HStack>
                            <Box p={2} w="30%" >
                                <Center>
                                    <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                                </Center>
                            </Box>
                            <Box w="70%" p={2} h="150px">
                                <Heading size="md">NYL Cinema 21
                                    <Badge ml="1" fontSize="0.7rem" variant="subtle" colorScheme="red">
                                        Team Project
                                    </Badge>
                                </Heading>
                                <Text mt={0} fontWeight={700}>Movie Information Site</Text>
                                <Text mt={0} fontSize={12} fontWeight={1000}>December 19</Text>
                                <HStack>
                                    <Text>

                                    Build with: 
                                    </Text>
                                    <Tooltip label="Vue js">
                                        <Image src={vueLogo} w={5}></Image>
                                    </Tooltip>
                                    <Tooltip label="Vuetify">
                                        <Image src={vuetifyLogo} w={4}></Image>
                                    </Tooltip>
                                </HStack>
                            </Box>
                        </HStack>
                    </Box>
                </Tilt>
            </SimpleGrid>
        </Box>
    );
}

export default Portfolio;