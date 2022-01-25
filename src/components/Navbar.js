import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, SimpleGrid, Spacer, Text } from "@chakra-ui/layout";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import '../App.css';
import { useEffect, useState } from "react";
import $ from 'jquery';
import { connect } from "react-redux";
import "jquery-ui-bundle"


const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHamburgerIcon = motion(HamburgerIcon);
const MotionCloseIcon = motion(CloseIcon);

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
        opacity: 0,
    }
}

const MenuIconVariants = {
    hidden: {
        // scaleY: 0,
        rotate: -180,
        opacity: 0
    },
    visible: {
        // scaleY: 1,
        rotate: 180,
        opacity: 1,
        transition: {
            duration: 0.7,
            delay: 0.15,
            type: "linear"
        }
    },
    dismount: {
        opacity: 0,
        // scaleY: 0,
        rotate: 540,
        transition: {
            duration: 0.7,
            type: "linear"
        }
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
    fontFamily: "Raleway",
    variants: subVariant

}


const Navbar = (props) => {
    const [navMobile, setNavMobile] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useViewportScroll();
    // const [oldScrolls, setOldScroll] = useState(0);

    const update = () => {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    const executeScroll = (id) => {
        if (id === "home") {
            $('html, body').animate({
                scrollTop: 0
            }, 1300, "easeInOutExpo");
        } else {
            $('html, body').animate({
                scrollTop: $("#" + id).offset().top - 35
            }, 1300, "easeInOutExpo");
        }
    }

    const toggleNav = () => {
        setNavMobile(!navMobile);
    }
    const attributesIconMenu = {
        variants: MenuIconVariants,
        animate: "visible",
        initial: "hidden",
        exit: "dismount",
        position: "fixed",
        onClick: toggleNav,
        zIndex: "3",
        right: "4",
        cursor: "pointer",

    }
    console.log(scrollY.prev, scrollY.current)

    const executeMobilenav = (value) => {
        toggleNav();
        setTimeout(() => {
            executeScroll(value);
        }, 600)
    }

    window.onscroll = function () { updateProgress() };
    function updateProgress() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    const navbarVariants = {
        show: {
            y: 0, opacity: 1, transition: { type: "linear", duration: "0.5" }
        },
        hide: {
            y: -70, opacity: 0, transition: { type: "linear", duration: "0.5" }
        }
    }

    useEffect(() => {
        return scrollY.onChange(() => update());
    });

    return (
        <>
            <MotionBox animate={hidden ? "hide" : "show"} variants={navbarVariants} boxShadow={"lg"} className="navBar" bg={props.theme} transition={props.transition} px={8} pb={2} pt={4} color={props.color} w="100%">
                <Flex>
                    <Heading fontWeight={500} fontSize="41px" color={props.color} fontFamily="lequire" onClick={() => executeScroll("home")} cursor="pointer">nazky</Heading>
                    <Spacer />
                    <Box className="navDesktop" fontFamily="Raleway" fontWeight={700} display={["none", "none", "block", "block"]}>
                        <Flex fontSize="sm" mt={2}>
                            <Text className="navBarItem navItemhome" mx={1} onClick={() => executeScroll("home")} cursor="pointer" >Home</Text>
                            <Text className="navBarItem navItemprofile" mx={1} onClick={() => executeScroll("profile")} cursor="pointer" >Profile</Text>
                            <Text className="navBarItem navItemskills" mx={1} onClick={() => executeScroll("skills")} cursor="pointer" >Skills</Text>
                            <Text className="navBarItem navItemportfolio" mx={1} onClick={() => executeScroll("portfolio")} cursor="pointer" >Portfolio</Text>
                            <Text className="navBarItem navItemportfolio" mx={1} onClick={() => executeScroll("experiences")} cursor="pointer" >Experiences</Text>
                        </Flex>
                    </Box >

                    <Box className="navMobile" display={["block", "block", "none", "none"]} >
                        <AnimatePresence exitBeforeEnter >
                            {!navMobile && (
                                <MotionHamburgerIcon whileHover={{ scaleY: 1.2, }} mt={3} w={6} h={6} {...attributesIconMenu} />
                            )}
                        </AnimatePresence>
                        <AnimatePresence exitBeforeEnter >
                            {navMobile && (
                                <MotionCloseIcon whileHover={{ scaleY: 1.2, }} mt={4} mr={1} w={4} h={4} {...attributesIconMenu} />
                            )}
                        </AnimatePresence>
                    </Box>
                </Flex>

                <AnimatePresence>
                    {navMobile && (
                        <MotionBox fontFamily="Raleway" py={10} px={6} color={props.color} variants={mobileNavVariants} animate="visible" initial="hidden" exit="dismount" top="70px" left="0" bg={props.theme} zIndex="-3" pos="fixed" w="100%" h="100%">
                            <MotionText ml={3} variants={subVariant} mb={5}>Menu</MotionText>
                            <SimpleGrid justifyItems="left">
                                <MotionHeading style={window.location.hash === "#home" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("home")} {...attributes}  >Home</MotionHeading>
                                <MotionHeading style={window.location.hash === "#profile" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("profile")} {...attributes}  >Profile</MotionHeading>
                                <MotionHeading style={window.location.hash === "#skills" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("skills")} {...attributes}  >Skills</MotionHeading>
                                <MotionHeading style={window.location.hash === "#portfolio" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("portfolio")} {...attributes}  >Portfolio</MotionHeading>
                                <MotionHeading style={window.location.hash === "#experiences" ? { textDecorationLine: "underline" } : {}} onClick={() => executeMobilenav("experiences")} {...attributes} >Experiences</MotionHeading>
                            </SimpleGrid>
                        </MotionBox>
                    )}
                </AnimatePresence>
            </MotionBox>

            <div className="header">
                <div className="progress-container" style={{ backgroundColor: props.theme, transition: props.transition }}>
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </div>
        </>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition,
        color: state.color
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