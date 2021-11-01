import { Box, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react"
import { ButtonGroup, IconButton } from "@chakra-ui/button";
import '../App.css';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import BgWave from "../assets/Wave.svg";


const AttributeBtnSocmed = {
    bgGradient: "linear(to-l, #000000, #000000, #000000,  #7407f1, #196ad4)",
    transition: "0.4s",
    bgSize: "350%",
    bgPosition: "right",
    _hover: {
        bgPosition: "left",
        boxShadow: "2px 2px 2px #888888"
    },
    fontSize:"xl",
    color:"#ffffff",
    isRound: true,
}

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

const Aboutme = () => {
    return (
        <Box id="aboutme" bgColor="white" bgImage={BgWave} bgSize={[1700,1700,1700,1500]} px={[5,5,20,20]}  pt={70} fontFamily="Raleway">
            <Heading mb={10} fontWeight={400} fontSize={50} >
                About
            </Heading>
            <Text w={["100%","100%","50%","50%"]}>
                Currently I'm still a third year student majoring in <b>Informatics</b> at <b>Multimedia Nusantara University</b>. Even though I'm still a student, I have some ability in web development, machine learning, android apps, etc. To find out what I can do, see my Portfolio.
            </Text>
            <Heading size="md" my="5" fontWeight={400} >Contact Me</Heading>
            <Text fontWeight="bold">Name: </Text>
            <Text>Najim Rizky</Text>
            <Text fontWeight="bold">Email: </Text>
            <Text>najimajim1@gmail.com</Text>
            <Text  fontWeight="bold">Age:</Text>
            <Text>20 Years</Text>
            
            {/* <Text>(+62)895604565752</Text> */}
            
            <ButtonGroup w="100%" mb="0px" py={5}>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Github') }} icon={< FiGithub />}  ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Linkedin') }} icon={< FiLinkedin />} ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Instagram') }} icon={< FiInstagram />}  ></IconButton>
                <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Twitter') }} icon={< FiTwitter />} ></IconButton>
            </ButtonGroup>
        </Box>
    );
}

export default Aboutme;