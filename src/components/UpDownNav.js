import { IconButton } from "@chakra-ui/button";
import { Box, VStack } from "@chakra-ui/layout";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import $ from 'jquery';
import { connect } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";




const calculateDir = (direction) => {
    const segmentList = ["home", "profile", "skills", "portfolio", "footer"];
    let currentPos = window.location.hash;
    let currentIndex = segmentList.indexOf(currentPos.substring(1));
    let nextIndex;
    // console.log(window.location)

    if (direction === "up" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        return segmentList[nextIndex];
    } else if (direction === "down" && currentIndex < (segmentList.length - 1)) {
        nextIndex = currentIndex + 1;
        return segmentList[nextIndex];
    } else {
        return "skip";
    }
}

const executeScroll = (direction) => {
    let id = calculateDir(direction);

    if (id !== "skip") {
        if (id === "home") {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#" + id).offset().top - 35
            }, 1000);
        }
        window.history.replaceState(null, "", window.location.origin + "/#" + id);
    }
}

const UpDownNav = (props) => {
    const Attribute = {
        bgGradient: `linear(to-l, ${props.theme}, ${props.theme},${props.theme},  #7407f1, #196ad4)`,
        transition: "0.4s",
        bgSize: "350%",
        bgPosition: "right",
        _hover: {
            bgPosition: "left",
        },
        fontSize: "md",
        size: "md",
        border: `1px solid #888888`,
        color: props.color,
        _active: { color: "white" }
    }

    const toggleTheme = () => {
        props.changeTheme(props.theme);
    }
    return (
        <Box className="upDownNav" w="100px">
            <VStack>
                <IconButton  onClick={() => executeScroll("up")} {...Attribute} icon={< FiArrowUp />}  ></IconButton>
                <IconButton  onClick={toggleTheme} {...Attribute} icon={props.color !== "#FFFFFF" ? < FaSun /> : <FaMoon/>}  ></IconButton>
                {/* <Box p="5px" cursor="pointer" w={10} h={10} {...Attribute} borderRadius={5} onClick={toggleTheme}  ><Box w="100%" h="100%" borderRadius={5} bg={props.theme} transition={props.transition} /></Box> */}
                <IconButton  onClick={() => executeScroll("down")} {...Attribute} icon={< FiArrowDown />}  ></IconButton>
            </VStack>
        </Box>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        transition: state.transition,
        color: state.color
    }
}

const setDispatchRedux = (dispatch) => {
    return {
        changeTheme: (newTheme) => { dispatch({ type: 'CHANGE_THEME', newTheme: newTheme }) }
    }
}

export default connect(getRedux, setDispatchRedux)(UpDownNav);