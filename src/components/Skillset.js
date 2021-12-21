import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
// const MotionFlex = motion(Flex);
const MotionHStack = motion(HStack);

const BaseVariants = {
    hidden: {
        y: 0
    },
    visible: {
        y: 0,
        transition: {
            when: "beforeChildren",
        }
    }
}

const NextVariants = {
    hidden: {
        x: -200,
        // opacity: 0
    },
    visible: {
        x: 0,
        // opacity: 1,
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
        scaleX: 5
    },
    visible: {
        scaleX: 1,
        transition: {
            type: "linear",
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0
    }
}

const Skillset = (props) => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
        // eslint-disable-next-line
    }, [inView]);
    return (
        <MotionBox ref={ref} alignItems="center" variants={BaseVariants} initial="hidden" overflow="hidden" my={3} w="100%" key={props.item.id} animate={animation}>
            <MotionText fontWeight="bold">{props.item.lang}</MotionText>
            <MotionHStack whileHover={{ x: 4, y: -4, transition: { duration: 0.5 } }} w="90%" color={props.color} alignItems="center" spacing={[2, 2, 4, 4]} overflow="hidden">
                <MotionBox variants={NextVariants}  zIndex="1" bg={props.color} w={props.item.levelSkil} h="20px" pr={1} color={props.theme} >
                    <Flex>
                        <Spacer />
                        <Text fontWeight="bold" fontSize={13}>{props.item.levelSkil}</Text>
                    </Flex>
                </MotionBox>
                <MotionBox variants={NextVariants2} w={props.item.levelIdx} h="3px" bg="gray"></MotionBox>
            </MotionHStack>
        </MotionBox>
    );
}

export default Skillset;