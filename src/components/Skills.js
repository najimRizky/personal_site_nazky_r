import { Box, Center, Flex, Heading, HStack, SimpleGrid, Spacer, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import bgBox from "../assets/bgBoxHome.svg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
// import Icon from "@chakra-ui/icon";

// import { DiJavascript1, DiCss3, DiPython, DiHtml5, DiReact, DiJava } from "react-icons/di";
// import { SiCsharp, SiPhp, SiCoursera } from "react-icons/si"

const MotionBox = motion(Box);
const MotionText = motion(Text);
// const MotionFlex = motion(Flex);
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

const framework_library = ([
    { lang: "Vue js", rank: "Intermediate", levelSkil: "60%", levelIdx: "40%", id: 1 },
    { lang: "React js", rank: "Intermediate", levelSkil: "40%", levelIdx: "40%", id: 2 },
    { lang: "Laravel", rank: "Intermediate", levelSkil: "50%", levelIdx: "50%", id: 3 },
    { lang: "Codeigniter", rank: "Intermediate", levelSkil: "60%", levelIdx: "40%", id: 4 },
    { lang: "Semantic UI", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 5 },
    { lang: "Bootstrap", rank: "Beginner", levelSkil: "80%", levelIdx: "20%", id: 6 },
    { lang: "Chakra UI", rank: "Intermediate", levelSkil: "65%", levelIdx: "35%", id: 7 },
    { lang: "Material UI", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 8 },
    { lang: "Vuetify", rank: "Intermediate", levelSkil: "70%", levelIdx: "30%", id: 9 },
]);

/*const progLang = ([
    { lang: "HTML", icon: DiHtml5, color: "#fc4503", id: 1 },
    { lang: "Javascript", icon: DiJavascript1, color: "orange", id: 2 },
    { lang: "CSS", icon: DiCss3, color: "blue", id: 3 },
    { lang: "Python", icon: DiPython, color: "#0242c2", id: 4 },
    { lang: "Java", icon: DiJava, color: "#bf0020", id: 5 },
    { lang: "React", icon: DiReact, color: "#03dbfc", id: 6 },
    { lang: "C#", icon: SiCsharp, color: "#9221fc", id: 7 },
    { lang: "PHP", icon: SiPhp, color: "#7867a8", id: 8 },
    { lang: "C", icon: SiCoursera, color: "#5131ad", id: 9 },
])*/

/* const language = ([
//     { lang: "Bahasa Indonesia", rank: "Advance", levelSkil: "90%", levelIdx: "10%", id: 1 },
//     { lang: "English", rank: "Intermediate", levelSkil: "60%", levelIdx: "40%", id: 2 },
 ]);*/

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
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "linear",
            duration: 0.6,
        }
    },
    exit: {
        opacity: 0
    }
}

/*const NextVariants2 = {
    hidden: {
        scaleX: 4,
        opacity: 0

    },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            type: "spring",
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
*/
const Skills = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    const id = "skills"

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
        // eslint-disable-next-line
    }, [inView]);

    return (
        <MotionBox id={id} color="white" backgroundImage={bgBox} px={[4, 4, 20, 20]} pb={[10, 10, 30, 30]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} px={[5, 5, 0, 0]} fontWeight={400} fontSize={50} >
                Skills
            </Heading>
            <AnimatePresence >
                <motion.div variants={BaseVariants} initial="hidden" animate={animation} >
                    <Center my={5}>
                        <Text>Programming Language</Text>
                    </Center>
                    <SimpleGrid columns={[1, null, 2]} justifyItems="center">
                        {programming.length && programming.map((item) => (
                            <MotionBox variants={NextVariants} alignItems="center" overflow="hidden" my={3} w="100%" key={item.id}>
                                <MotionText  fontWeight="bold">{item.lang}</MotionText>
                                <MotionHStack whileHover={{ x: 4, y:-4, transition:{ duration: 0.5}}} w="90%" color="white" alignItems="center" spacing={[2, 2, 4, 4]} overflow="hidden">
                                    <MotionBox zIndex="1"  bg="white" w={item.levelSkil} h="20px" pr={1} color="black" >
                                        <Flex>
                                            <Spacer />
                                            <Text fontWeight="bold" fontSize={13}>{item.levelSkil}</Text>
                                        </Flex>
                                    </MotionBox>
                                    <MotionBox  w={item.levelIdx} h="3px" bg="gray"></MotionBox>
                                </MotionHStack>
                                {/* <MotionText variants={NextVariants3} w="100px" ml={[2, 2, 8, 8]} >{item.rank}</MotionText> */}
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                    <hr />

                    <Center my={5}>
                        <Text>Framework and Library</Text>
                    </Center>
                    <SimpleGrid columns={[1, null, 2]} justifyItems="center">
                        {framework_library.length && framework_library.map((item) => (
                            <MotionBox  variants={NextVariants}   alignItems="center" overflow="hidden" my={3} w="100%" key={item.id}>
                                <MotionText    fontWeight="bold">{item.lang}</MotionText>
                                <MotionHStack whileHover={{ x: 4, y:-4, transition:{duration: 0.5}}} w="90%" color="white" alignItems="center" spacing={[2, 2, 4, 4]} overflow="hidden">
                                    <MotionBox
                                        zIndex="1" bg="white" w={item.levelSkil} h="20px" pr={1} color="black" >
                                        <Flex>
                                            <Spacer />
                                            <Text fontWeight="bold" fontSize={13}>{item.levelSkil}</Text>
                                        </Flex>
                                    </MotionBox>
                                    <MotionBox w={item.levelIdx} h="3px" bg="gray"></MotionBox>
                                </MotionHStack>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </motion.div>
            </AnimatePresence>
        </MotionBox>
    );
}
export default Skills;