import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Logo.png";
import '../App.css';
// import React, { useEffect } from "react";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const mobileNavVariants = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 10,
            staggerChildren: 0.1,
            delayChildren: 0.5,
            // when:"beforeChildren",
            duration: 0.5
        }
    },
    dismount: {
        y: [0, -100, -50, -600],
        transition: {
            type: "spring"
        }
    }
}

const subVariant = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring"
        }
    },
    dismount: {
        opacity: 0
    }
}

const attributes = {
    fontWeight: 500,
    my: 5,
    // whileHover: { scale: 0.8 },
    cursor: "pointer",
    fontStyle: "normal",
    fontSize: 40,
    className: "navBarItem"
}

const Navbar = () => {
    const [nav, showNav] = useState(false);
    const executeScroll = (value) => {
        const yOffset = -70;
        const myRef = document.getElementById(value);
        const y = myRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    const toggleNav = () => {
        showNav(nav ? false : true);
    }


    const executeMobilenav = (value) => {
        toggleNav();
        setTimeout(() => {
            executeScroll(value);
        }, 700)
    }

    // const [hash, setHash] = useState(window.location.hash);

    // document.addEventListener("scroll", () => {
    //     if (hash !== window.location.hash) {
    //         let tmp = window.location.hash;
    //         document.querySelector(".navItemhome").setAttribute("id", "");
    //         document.querySelector(".navItemprofile").setAttribute("id", "");
    //         document.querySelector(".navItemskills").setAttribute("id", "");
    //         document.querySelector(".navItemportfolio").setAttribute("id", "");
    //         switch (tmp) {
    //             case "#home":
    //                 setHash("#home");
    //                 document.querySelector(".navItemhome").setAttribute("id", "navBarItemActive");
    //                 break;
    //             case "#profile":
    //                 setHash("#profile");
    //                 document.querySelector(".navItemprofile").setAttribute("id", "navBarItemActive");
    //                 break;
    //             case "#skills":
    //                 setHash("#skills");
    //                 document.querySelector(".navItemskills").setAttribute("id", "navBarItemActive");
    //                 break;
    //             case "#portfolio":
    //                 setHash("#portfolio");
    //                 document.querySelector(".navItemportfolio").setAttribute("id", "navBarItemActive");
    //                 break;

    //         }
    //         // console.log(".navItem"+window.location.hash);
    //         // console.log(hash);
    //     }
    // });

    return (
        <Box className="navBar" bg='black' px={8} py={5} color="white" w="100%">
            <Flex>
                <Image onClick={() => executeScroll("home")} cursor="pointer" src={logo} htmlWidth="150px" objectFit="cover" />
                <Spacer />
                <Box className="navDesktop" fontFamily="Raleway" fontWeight={700} display={["none", "none", "block", "block"]}>
                    <Flex fontSize="sm" mt={2}>
                        <Text className="navBarItem navItemhome" mx={1} onClick={() => executeScroll("home")} cursor="pointer" >Home</Text>
                        <Text className="navBarItem navItemprofile" mx={1} onClick={() => executeScroll("profile")} cursor="pointer" >Profile</Text>
                        <Text className="navBarItem navItemskills" mx={1} onClick={() => executeScroll("skills")} cursor="pointer" >Skills</Text>
                        <Text className="navBarItem navItemportfolio" mx={1} onClick={() => executeScroll("portfolio")} cursor="pointer" >Portfolio</Text>
                    </Flex>
                </Box >

                <Box className="navMobile" display={["block", "block", "none", "none"]} >
                    <IconButton position="fixed" onClick={toggleNav} zIndex="3" right="4" size="sm" variant="ghost" _hover={{ bg: "#304078" }} icon={<HamburgerIcon />}></IconButton>
                </Box>
            </Flex>

            <AnimatePresence>
                {nav && (
                    <MotionBox fontFamily="Raleway" p={10} color="white" variants={mobileNavVariants} animate="visible" initial="hidden" exit="dismount" top="0" left="0" bg="black" zIndex="2" pos="fixed" w="100%" h="100%">
                        <SimpleGrid justifyItems="center">
                            <MotionHeading onClick={() => executeMobilenav("home")} {...attributes} variants={subVariant} >Home</MotionHeading>
                            <MotionHeading onClick={() => executeMobilenav("profile")} {...attributes} variants={subVariant} >Profile</MotionHeading>
                            <MotionHeading onClick={() => executeMobilenav("skills")} {...attributes} variants={subVariant} >Skills</MotionHeading>
                            <MotionHeading onClick={() => executeMobilenav("portfolio")} {...attributes} variants={subVariant} >Portfolio</MotionHeading>
                        </SimpleGrid>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default Navbar;