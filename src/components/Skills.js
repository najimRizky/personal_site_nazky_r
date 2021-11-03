import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import bgBox from "../assets/bgBoxHome.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);



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

// const language = ([
//     { lang: "Bahasa Indonesia", rank: "Advance", levelSkil: "90%", levelIdx: "10%", id: 1 },
//     { lang: "English", rank: "Intermediate", levelSkil: "60%", levelIdx: "40%", id: 2 },
// ]);

const BaseVariants = {
    hidden: {
        y: 0
    },
    visible: {
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
}

const NextVariants = {
    hidden: {
        x: -700,
    },
    visible: {
        x: 0,
        transition: {
            type: "linear",
            duration: 0.6,
        }
    },
    exit: {
        opacity: 0
    }
}

const NextVariants2 = {
    hidden: {
        scaleX: 8,
        opacity: 0

    },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            type: "linear",
            duration: 0.6
        }
    },
    exit: {
        opacity: 0
    }
}

const NextVariants3 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        opacity: 0
    }
}

const Skills = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const id = "skills"

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            window.history.replaceState(null, "", "http://localhost:3000/#"+id);
        }
        // eslint-disable-next-line
    }, [inView]);

    return (
        <MotionBox  id={id} color="white" backgroundImage={bgBox} px={[1, 1, 20, 20]} pb={[10, 10, 30, 30]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} px={[5, 5, 0, 0]} fontWeight={400} fontSize={50} >
                Skills
            </Heading>
            <AnimatePresence >
                <motion.div variants={BaseVariants} initial="hidden" animate={animation} >
                    {programming.length && programming.map((item) => (
                        <MotionFlex alignItems="center" overflow="hidden" my={7} w="100%" key={item.id}>
                            <MotionHStack w="90%" color="white" alignItems="center" spacing={[2, 2, 8, 8]} overflow="hidden">
                                <MotionBox zIndex="1" variants={NextVariants} bg="white" w={item.levelSkil} h="40px" p="2" color="black" >
                                    <Flex>
                                        <Text fontWeight="bold">{item.lang}</Text>
                                        <Spacer />
                                        <Text fontWeight="bold">{item.levelSkil}</Text>
                                    </Flex>
                                    {/* {item.lang} */}
                                </MotionBox>
                                <MotionBox variants={NextVariants2} w={item.levelIdx} h="3px" bg="gray"></MotionBox>
                            </MotionHStack>
                            <MotionText variants={NextVariants3} w="100px" ml={[2, 2, 8, 8]} >{item.rank}</MotionText>
                        </MotionFlex>
                    ))}
                </motion.div>
            </AnimatePresence>
        </MotionBox>
    );
}

export default Skills;