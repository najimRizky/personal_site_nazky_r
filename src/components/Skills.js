import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion";
import { Box,Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import bgBox from "../assets/bgBoxHome.svg";

const MotionBox = motion(Box);
const skillDetail = ([
    { lang: "HTML", rank: "Intermediate", levelSkil: "80%", levelIdx: "20%", id: 1 },
    { lang: "CSS", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 2 },
    { lang: "Javascript", rank: "Intermediate", levelSkil: "65%", levelIdx: "35%", id: 3 },
    { lang: "Java", rank: "Intermediate", levelSkil: "50%", levelIdx: "50%", id: 4 },
    { lang: "PHP", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 5 },
    { lang: "Python", rank: "Beginner", levelSkil: "40%", levelIdx: "60%", id: 6 },
    { lang: "C", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 7 },
]);

const Skills = () => {
    return (
        <Box color="white" backgroundImage={bgBox} px="75px" pb={[10, 10, 30, 30]} pt={70} fontFamily="Raleway">
            <Heading mb={10} fontWeight={400} fontSize={50} >
                Skills
            </Heading>
            <Accordion allowMultiple style={{border: "0px solid rgba(0,0,0,0)"}} >
                <AccordionItem >
                    <AccordionButton _hover={{bgColor: "rgba(255,255,255,0.1)"}} borderRadius="20px" transition="0.2s" border="none">
                        <Box flex="1" textAlign="left">
                            Programming Language
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    {skillDetail.map((item) => (
                        <Flex alignItems="center" overflow="hidden" my={7} w="100%" key={item.id}>
                            <HStack w="90%" color="white" alignItems="center" spacing={8} overflow="hidden">
                                <MotionBox bg="white" w={item.levelSkil} h="50px" p="4" color="black" >
                                    <Text fontWeight="1000">{item.lang}</Text>
                                </MotionBox>
                                <MotionBox w={item.levelIdx} h="3px" bg="gray"></MotionBox>
                            </HStack>
                            <Text w="100px" ml={8} >{item.rank}</Text>
                        </Flex>
                    ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default Skills;