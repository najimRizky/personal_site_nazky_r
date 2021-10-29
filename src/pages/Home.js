import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import bgBox from "../assets/bgBoxHome.svg";
import { Heading } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import Me from "../assets/Me2.png";
import { Button } from "@chakra-ui/button";
import '../App.css';


const Home = () => {
    return (
        <Box backgroundImage={bgBox} px={50} pb={60} pt={70} h={["100%", "100%", "500px", "500px"]}>
            <SimpleGrid columns={[1, null, 2]}>
                <Box color="white" w="100%">
                    <Heading bgGradient="linear(to-r, #FF0075, #172774, #FF0075)" bgClip="text" fontSize="70px" style={{ fontWeight: '500' }} lineHeight="70px" >Hi I am <br /> Najim <br />Rizky</Heading>
                    <Text mt={[10]} lineHeight="30px" fontFamily="Raleway" fontWeight="thin" fontSize="14">
                        A <i><b>Junior IT Programmer</b></i> who is currently<br /> studying at Multimedia Nusantara University
                    </Text>
                    <Button
                        className="downloadCVBtn"
                        bgGradient="linear(to-r, #ff00d4, #7407f1, #196ad4)"
                        transition="0.4s"
                        bgSize="200%"
                        _hover={{
                            bgPosition: "right"
                        }} my={[10]} color="black">Download CV</Button>
                </Box>
                <Flex justify={['left',"left","end","center"]} color="white" w="100%" >
                    <Image src={Me} mt={[0,0,10,10]} objectFit="cover" htmlWidth={["350px","350px","100%","100%"]} />
                </Flex>
            </SimpleGrid>
        </Box>
    );
}

export default Home;