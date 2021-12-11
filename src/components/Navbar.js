import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/Logo.png";
import '../App.css';
// import React, { useEffect } from "react";
import { useState } from "react";
import $ from 'jquery';
import { connect } from "react-redux";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHamburgerIcon = motion(HamburgerIcon);
const MotionArrowForwardIcon = motion(SmallCloseIcon);

const mobileNavVariants = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "linear",
            // damping: 10,
            staggerChildren: 0.1,
            delayChildren: 0.1,
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
        x: -200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "linear"

        }
    },
    dismount: {
        opacity: 0
    }
}

const MenuIconVariants = {
    hidden: {
        opacity: 0,
        rotate: 0
    },
    visible: {
        opacity: 1,
        rotate: 180
    },
    dismount: {
        rotate: 180,
        opacity: 0
    }
}

const attributes = {
    fontWeight: 700,
    mt: 1,
    // whileHover: { scale: 0.8 },
    cursor: "pointer",
    fontStyle: 'normal',
    fontSize: 37,
    className: "navBarItem",
    fontFamily: "Raleway"

}


const Navbar = (props) => {
    const [nav, showNav] = useState(false);
    const executeScroll = (id) => {
        if (id === "home") {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#" + id).offset().top - 35
            }, 1000);
        }
    }

    const toggleNav = () => {
        showNav(nav ? false : true);
    }
    const attributesIconMenu = {
        variants: MenuIconVariants,
        animate: "visible",
        initial: "hidden",
        exit: "dismount",
        position: "fixed",
        mt: 2,
        onClick: toggleNav,
        zIndex: "3",
        right: "4",
        cursor: "pointer",
        w: 6,
        h: 6,
    }

    const executeMobilenav = (value) => {
        toggleNav();
        setTimeout(() => {
            executeScroll(value);
        }, 700)
    }

    window.onscroll = function () { myFunction() };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    
    return (
        <>
            <Box className="navBar" bg={props.theme} transition={props.transition} px={8} py={5} color="white" w="100%">
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
                        <AnimatePresence>
                            {!nav ? (
                                <MotionHamburgerIcon {...attributesIconMenu} />
                            ) : (
                                <MotionArrowForwardIcon {...attributesIconMenu} />
                            )}
                        </AnimatePresence>
                    </Box>
                </Flex>

                <AnimatePresence>
                    {nav && (
                        <MotionBox fontFamily="Raleway" py={10} px={6} color="white" variants={mobileNavVariants} animate="visible" initial="hidden" exit="dismount" top="75px" left="0" bg={props.theme} zIndex="-3" pos="fixed" w="100%" h="100%">
                            <MotionText ml={3} variants={subVariant} mb={5}>Menu</MotionText>
                            <SimpleGrid justifyItems="left">
                                <MotionHeading style={window.location.hash === "#home" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("home")} {...attributes} variants={subVariant} >Home</MotionHeading>
                                <MotionHeading style={window.location.hash === "#profile" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("profile")} {...attributes} variants={subVariant} >Profile</MotionHeading>
                                <MotionHeading style={window.location.hash === "#skills" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("skills")} {...attributes} variants={subVariant} >Skills</MotionHeading>
                                <MotionHeading style={window.location.hash === "#portfolio" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("portfolio")} {...attributes} variants={subVariant} >Portfolio</MotionHeading>
                            </SimpleGrid>
                        </MotionBox>
                    )}
                </AnimatePresence>
            </Box>
            <div className="header">
                <div className="progress-container" style={{backgroundColor: props.theme, transition: props.transition}}>
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </div>
        </>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition
    }
}

export default connect(getRedux)(Navbar);

/*const [hash, setHash] = useState(window.location.hash);

    document.addEventListener("scroll", () => {
        if (hash !== window.location.hash) {
            let tmp = window.location.hash;
            document.querySelector(".navItemhome").setAttribute("id", "");
            document.querySelector(".navItemprofile").setAttribute("id", "");
            document.querySelector(".navItemskills").setAttribute("id", "");
            document.querySelector(".navItemportfolio").setAttribute("id", "");
            switch (tmp) {
                case "#home":
                    setHash("#home");
                    document.querySelector(".navItemhome").setAttribute("id", "navBarItemActive");
                    break;
                case "#profile":
                    setHash("#profile");
                    document.querySelector(".navItemprofile").setAttribute("id", "navBarItemActive");
                    break;
                case "#skills":
                    setHash("#skills");
                    document.querySelector(".navItemskills").setAttribute("id", "navBarItemActive");
                    break;
                case "#portfolio":
                    setHash("#portfolio");
                    document.querySelector(".navItemportfolio").setAttribute("id", "navBarItemActive");
                    break;

            }
            // console.log(".navItem"+window.location.hash);
            // console.log(hash);
        }
    });*/