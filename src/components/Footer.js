import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const AttributeBtnSocmed = {
    bgGradient: "linear(to-l, #000000, #000000, #000000,  #7407f1, #196ad4)",
    transition: "0.4s",
    bgSize: "350%",
    bgPosition: "right",
    _hover: {
        bgPosition: "left",
    },
    fontSize: "xl",
    color: "#ffffff",
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

const Footer = () => {
    return (
        <Box color="rgba(255,255,255,0.8)" bgColor="white" bg="black" px={[5, 5, 40, 40]} pb={1} pt={50} textAlign="center" w="100%" fontFamily="Raleway">
            <Text textAlign="center" mb={6} fontWeight={1000} fontSize={30} >
                Thank You for Coming Here
            </Text>
            <Text textAlign="center" mb={6}  fontSize={16} >
                “Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.” <br /> -Albert Einstein
            </Text>
            <Divider />
            <Center>
                <ButtonGroup w="100%" mb="0px" pt={2} justifyContent="center">
                    <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Github') }} icon={< FiGithub />}  ></IconButton>
                    <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Linkedin') }} icon={< FiLinkedin />} ></IconButton>
                    <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Instagram') }} icon={< FiInstagram />}  ></IconButton>
                    <IconButton {...AttributeBtnSocmed} onClick={() => { openSocMed('Twitter') }} icon={< FiTwitter />} ></IconButton>
                </ButtonGroup>
            </Center>
            <Text fontFamily="Roboto">
                Copyright © 2021 NAZKY
            </Text>
        </Box>

    );
}

export default Footer;