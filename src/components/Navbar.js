import { Image } from "@chakra-ui/image";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import logo from "../assets/Logo.png";
// import React, { useEffect } from "react";



const Navbar = () => {
    // const myRef = useRef("tes")
    
    // const executeScroll = () => myRef.current.scrollIntoView();
    const executeScroll = (value) => {
        const yOffset = -70; 
        const myRef = document.getElementById(value);
        const y = myRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        // myRef.scrollIntoView({ block: "start",behavior: "smooth" });

    }

    
    // const useMountEffect = (val) => useEffect(executeScroll(val),[]);
    // useMountEffect("top");

    return (
        <Box className="navBar" bg='black' px={8} py={5} color="white" w="100%">
            <Flex>
                <Image src={logo} htmlWidth="150px" objectFit="cover" />
                <Spacer />
                <Box className="navDesktop">
                    <Flex fontSize="sm" mt={2}>
                        <Text className="underlineHover" onClick={() => executeScroll("home")} mr="7" cursor="pointer" >Home</Text>
                        <Text className="underlineHover" onClick={() => executeScroll("aboutme")} mr="7" cursor="pointer" >About Me</Text>
                        <Text className="underlineHover" onClick={() => executeScroll("skills")} mr="7" cursor="pointer" >Skills</Text>
                    </Flex>
                </Box >
                {/* <Box className="navMobile">  
                        <IconButton onClick={onOpen} size="sm" variant="ghost" _hover={{ bg: "#304078" }} icon={<HamburgerIcon />}></IconButton>
                    </Box> */}
            </Flex>
        </Box>
    );
}

export default Navbar;