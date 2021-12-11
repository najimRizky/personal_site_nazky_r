import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { useEffect } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { connect } from "react-redux";

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

const Footer = (props) => {
    const { ref, inView } = useInView();
    const id = "footer"
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
    }, [inView]);

    const AttributeBtnSocmed = {
        bgGradient: `linear(to-l, ${props.theme}, ${props.theme}, ${props.theme}, #7407f1, #196ad4)`,
        transition: "all ease 0.4s",
        bgSize: "350%",
        bgPosition: "right",
        _hover: {
            bgPosition: "left",
            // boxShadow: "2px 2px 2px #888888"
        },
        fontSize: "xl",
        color: "#ffffff",
        isRound: true,
    }

    return (
        <Box id="footer" color="rgba(255,255,255,0.8)" ref={ref} bg={props.theme} transition={props.transition} px={[5, 5, 40, 40]} pb={1} pt={50} textAlign="center" w="100%" fontFamily="Raleway">
            <Text textAlign="center" mb={6} fontWeight={1000} fontSize={30} >
                Thank You for Coming Here
            </Text>
            <Text textAlign="center" mb={6} fontSize={16} >
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
            <Text fontFamily="Roboto" my={4} fontSize="sm">
                Copyright © {new Date().getFullYear()} NAZKY
            </Text>
            <Button size="xs" colorScheme="blackAlpha" onClick={onOpen}>Disclaimer</Button>
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="blackAlpha.900" color="white">
                    <ModalHeader>Disclaimer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        This website design is not original by me. I used many reference to create this website design. My main ability is implement the existing designs into a code/script.
                    </ModalBody>

                    <ModalFooter>
                        <Button size="xs" colorScheme="red" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition
    }
}
export default connect(getRedux)(Footer);