import { Badge, Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import bgPortfolio from "../assets/large-triangles.svg"
import { Image } from "@chakra-ui/image";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-vanilla-tilt"
import { Button } from "@chakra-ui/button";

import { allPortfolio } from "../dataStorage/portfolioData";

import { Tooltip } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const dataPortfolio = allPortfolio;

const Portfolio = () => {
    const { ref, inView } = useInView();
    const id = "portfolio"
    const [detail, showDetail] = useState(0);

    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);

    const showdetail = (val) => {
        showDetail(val);
    }

    const hidedetail = () => {
        showDetail(0);
    }

    const goToLink = (url) => {
        window.open(url, "_blank");
    }

    return (
        <Box id={id} bgColor="white" bgImage={bgPortfolio} bgSize="70%" pb={10} px={[5, 5, 10, 20]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} fontWeight={400} fontSize={50} >
                Portfolio
            </Heading>
            <SimpleGrid columns={[1, 1, 2, 2]} >
                {dataPortfolio.map((item) => (
                    <Tilt className="tiltCard" key={item.id} >
                        <Box onMouseEnter={() => showdetail(item.id)} onMouseLeave={hidedetail} my={5} w={["100%", "450px", "320px", "405px"]} overflow="hidden" height={["170px", "255px", "185px", "230px"]} bgSize="100%" bgImage={item.background} className="portfolioCard" >
                            <AnimatePresence>
                                {detail === item.id && (
                                    <MotionBox animate={{ y: 0, transition: { type: "linear" } }} initial={{ y: -240 }} exit={{ y: -200, transition: { type: "linear" } }} color="white" p={4} w="100%" h="100%" bg="blackAlpha.700">
                                        <Text fontSize={[16, 26, 20, 24]} fontWeight={700}>
                                            {item.name}
                                        </Text>
                                        <Box ml={0}>
                                            <Text fontSize={[8, 14, 10, 12]}>
                                                {item.desc}
                                            </Text>
                                            {item.status.map((item) => (
                                                <Badge mr={1} fontSize={["0.4rem", "0.6rem", "0.5rem", "0.6rem"]} variant="solid" colorScheme={item.color} key={item.id}>
                                                    {item.name}
                                                </Badge>
                                            ))}
                                            <Text position="fixed" top="-2" right="3" mt={4} fontSize={12}>
                                                <TimeIcon h={3} mb={1} /> {item.time}
                                            </Text>
                                            <HStack>
                                                <Text fontSize={[8, 16, 12, 14]} >
                                                    Build with:
                                                </Text>
                                                {item.tool.map((item) => (
                                                    <Tooltip label={item.name}>
                                                        <Image src={item.logo} w={4} h={4}></Image>
                                                    </Tooltip>
                                                ))}
                                            </HStack>
                                            <Button className="downloadCVBtn"
                                                bgGradient="linear(to-r, #ff00d4, #7407f1, #196ad4)"
                                                transition="0.4s"
                                                bgSize="200%"
                                                _hover={{
                                                    bgPosition: "right"
                                                }} my={[10]} w="100%" mb={[2, 4, 2, 4]} mt={[2, 4, 2, 4]} onClick={() => goToLink(item.urlSite)} size="xs" colorScheme="purple">Visit Site</Button>
                                            <Button w="100%" size="xs" colorScheme="teal" onClick={() => goToLink(item.urlSite)} >Visit Repo</Button>
                                        </Box>
                                    </MotionBox>
                                )}
                            </AnimatePresence>
                        </Box>
                    </Tilt>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default Portfolio;
