import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion";
import { Box,Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import bgBox from "../assets/bgBoxHome.svg";

const MotionBox = motion(Box);
const programming = ([
    { lang: "HTML", rank: "Intermediate", levelSkil: "80%", levelIdx: "20%", id: 1 },
    { lang: "CSS", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 2 },
    { lang: "Javascript", rank: "Intermediate", levelSkil: "65%", levelIdx: "35%", id: 3 },
    { lang: "Java", rank: "Intermediate", levelSkil: "50%", levelIdx: "50%", id: 4 },
    { lang: "PHP", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 5 },
    { lang: "Python", rank: "Beginner", levelSkil: "40%", levelIdx: "60%", id: 6 },
    { lang: "C", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 7 },
    { lang: "MySQL", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 8 },
]);

const language = ([
    { lang: "Bahasa Indonesia", rank: "Advance", levelSkil: "90%", levelIdx: "10%", id: 1 },
    { lang: "English", rank: "Intermediate", levelSkil: "60%", levelIdx: "40%", id: 2 },
]);

const Skills = () => {
    return (
        <Box id="skills" color="white" backgroundImage={bgBox} px={[1,1,20,20]} pb={[10, 10, 30, 30]} pt={70} fontFamily="Raleway">
            <Heading mb={10} px={[5,5,0,0]} fontWeight={400} fontSize={50} >
                Skills
            </Heading>
            <Accordion allowToggle defaultIndex={[0]} style={{border: "0px solid rgba(0,0,0,0)"}} >
                <AccordionItem >
                    <AccordionButton _hover={{bgColor: "rgba(255,255,255,0.1)"}} borderRadius="20px" transition="0.2s" border="none">
                        <Box flex="1" textAlign="left">
                            Programming
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    {programming.map((item) => (
                        <Flex alignItems="center" overflow="hidden" my={7} w="100%" key={item.id}>
                            <HStack w="90%" color="white" alignItems="center" spacing={[2,2,8,8]} overflow="hidden">
                                <MotionBox bg="white" w={item.levelSkil} h="40px" p="2" color="black" >
                                    <Flex>
                                        <Text fontWeight="bold">{item.lang}</Text>
                                        <Spacer/>
                                        <Text fontWeight="bold">{item.levelSkil}</Text>
                                    </Flex>
                                    {/* {item.lang} */}
                                </MotionBox>
                                <MotionBox w={item.levelIdx} h="3px" bg="gray"></MotionBox>
                            </HStack>
                            <Text w="100px" ml={[2,2,8,8]} >{item.rank}</Text>
                        </Flex>
                    ))}
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <AccordionButton _hover={{bgColor: "rgba(255,255,255,0.1)"}} borderRadius="20px" transition="0.2s" border="none">
                        <Box flex="1" textAlign="left">
                            Languages
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    {language.map((item) => (
                        <Flex alignItems="center" overflow="hidden" my={7} w="100%" key={item.id}>
                            <HStack w="90%" color="white" alignItems="center" spacing={[2,2,8,8]} overflow="hidden">
                                <MotionBox bg="white" w={item.levelSkil} h="40px" p="2" color="black" >
                                    <Flex>
                                        <Text fontWeight="bold">{item.lang}</Text>
                                        <Spacer/>
                                        <Text fontWeight="bold">{item.levelSkil}</Text>
                                    </Flex>
                                    {/* {item.lang} */}
                                </MotionBox>
                                <Box w={item.levelIdx} h="3px" bg="gray"></Box>
                            </HStack>
                            <Text w="100px" ml={[2,2,8,8]} >{item.rank}</Text>
                        </Flex>
                    ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default Skills;