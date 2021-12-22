import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Divider } from "@chakra-ui/react";
import Skillset from "../components/Skillset";
import { programming, framework_library } from "../extras/skillData";

const Skills = (props) => {
    const { ref, inView } = useInView();
    const id = "skills"

    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);

    return (
        <Box id={id} color={props.color} bg={props.theme} backgroundImage={props.bgBox} transition={props.transition} px={[4, 4, 20, 20]} pb={[10, 10, 30, 30]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} px={[5, 5, 0, 0]} fontWeight={400} fontSize={50} >
                SKILLS
            </Heading>
            <AnimatePresence >
                <motion.div  initial="hidden"  >
                    <Center my={5}>
                        <Heading fontWeight={500}>Programming Language</Heading>
                    </Center>
                    <SimpleGrid columns={[1, null, 2]} justifyItems="center">
                        {programming.length && programming.map((item) => (
                            <Skillset key={item.id} item={item} color={props.color} theme={props.theme} />
                        ))}
                    </SimpleGrid>
                    <Divider bg={props.color} />
                    <Center my={5}>
                        <Heading fontWeight={500}>Framework and Library</Heading>
                    </Center>
                    <SimpleGrid columns={[1, null, 2]} justifyItems="center">
                        {framework_library.length && framework_library.map((item) => (
                            <Skillset key={item.id} item={item} color={props.color} theme={props.theme} />
                        ))}
                    </SimpleGrid>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
}
const getRedux = (state) => {
    return {
        theme: state.theme,
        bgBox: state.bgBox,
        transition: state.transition,
        color: state.color
    }
}
export default connect(getRedux)(Skills);