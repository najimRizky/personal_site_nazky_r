import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react"
import { ButtonGroup, IconButton } from "@chakra-ui/button";
import '../App.css';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { connect } from "react-redux";
import { sectionList } from "../extras/sectionList";




// const MotionIconButton = motion(IconButton)

const openSocMed = (val) => {
    let url = '';
    switch (val) {
        case 'Github':
            url = 'https://github.com/najimRizky'
            break;
        case 'Linkedin':
            url = 'https://www.linkedin.com/in/najim-rizky/'
            break;
        case 'Instagram':
            url = 'https://instagram.com/nazky_r'
            break;
        case 'Twitter':
            url = 'https://twitter.com/erSySz'
            break;
        default:
    }
    window.open(url, "_blank");
}

const Aboutme = (props) => {
    const AttributeBtnSocmed = {
        bgGradient: `linear(to-l, ${props.color}, ${props.color}, ${props.color}, #7407f1, #196ad4)`,
        transition: "0.4s",
        bgSize: "350%",
        bgPosition: "right",
        _hover: {
            bgPosition: "left",
            // boxShadow: `2px 2px 2px ${props.color}`,
            color: "#fff"
        },
        fontSize: "xl",
        color: props.theme,
        isRound: true,
    }

    const { ref, inView } = useInView();
    const id = sectionList[1]

    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
        // eslint-disable-next-line
    }, [inView]);

    return (
        <Box id={id} color={props.color} transition={props.transition}  px={[5, 5, 20, 20]} pt={70} fontFamily="Raleway">
            <Heading ref={ref} mb={10} fontWeight={400} fontSize={50} >
                PROFILE
            </Heading>
            <Text w={["100%", "100%", "50%", "50%"]}>
                Currently I'm still a third year student majoring in <b>Informatics</b> at <b>Multimedia Nusantara University</b>. Even though I'm still a student, I have some ability in web development, machine learning, android apps, etc. To find out what I can do, see my Portfolio.
            </Text>
            <Heading size="md" my="5" fontWeight={400} >Contact Me</Heading>
            <Text fontWeight="bold">Name: </Text>
            <Text>Najim Rizky</Text>
            <Text fontWeight="bold">Email: </Text>
            <Text>najimajim1@gmail.com</Text>
            <Text fontWeight="bold">Age:</Text>
            <Text>20 Years</Text>

            {/* <Text>(+62)895604565752</Text> */}

            <ButtonGroup w="100%" mb="0px" py={5} spacing={"5"}>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Github') }} icon={< FiGithub />}  ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Linkedin') }} icon={< FiLinkedin />} ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Instagram') }} icon={< FiInstagram />}  ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Twitter') }} icon={< FiTwitter />} ></IconButton>
            </ButtonGroup>
        </Box>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition,
        bgWave: state.bgWave,
        color: state.color
    }
}

export default connect(getRedux)(Aboutme);