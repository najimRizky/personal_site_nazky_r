import { Box, Center, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import BgShape from "../assets/Wave.svg";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import imgNYLCinema21 from "../assets/NYL Cinema21.png"
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Portfolio = () => {
    const { ref, inView } = useInView();
    const id = "portfolio"

    useEffect(() => {
        if (inView) {
        window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);


    return ( 
        <Box id={id} bgColor="white" bgImage={BgShape} bgSize="100%" px={[5,5,20,20]}  pt={70} fontFamily="Raleway">
            <Heading ref={ref}  mb={10} fontWeight={400} fontSize={50} >
                Portfolio
            </Heading>
            <SimpleGrid columns={[1,1,1,2]} justifyItems="center">
                <MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox>
                <MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox><MotionBox  w="90%" my={5} borderRadius="15px" overflow="hidden" bg="blackAlpha.300"  transition="0.3s">
                    <HStack>
                        <Box p={2} w="30%" >
                            <Center>
                                <Image boxSize={20} alignSelf="center" src={imgNYLCinema21} />
                            </Center>
                        </Box>
                        <Box w="70%" p={2} h="150px">
                            <Heading size="md">NYL Cinema 21</Heading>
                            <Text my={2}>Movie Information Site</Text>
                            <Text my={2}>December 19</Text>
                            <Button size="sm">
                                Visit
                            </Button>
                        </Box>
                    </HStack>
                </MotionBox>
            </SimpleGrid>
        </Box>
    );
}
 
export default Portfolio;