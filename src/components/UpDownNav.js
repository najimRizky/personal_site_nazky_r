import { IconButton } from "@chakra-ui/button";
import { Box, VStack } from "@chakra-ui/layout";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Attribute = {
    bgGradient: "linear(to-l, #242424, #242424, #242424,  #7407f1, #196ad4)",
    transition: "0.4s",
    bgSize: "350%",
    bgPosition: "right",
    _hover: {
        bgPosition: "left",
    },
    fontSize: "md",
    size: "md",
    color: "#ffffff",
    isRound: true,
    _active: { color: "white" }
}


const calculateDir = (direction) => {
    const segmentList = ["#home", "#about", "#skills"];
    let currentPos = window.location.hash;
    let currentIndex = segmentList.indexOf(currentPos);
    let nextIndex;
    
    if (direction === "up" && currentIndex > 0) {
        nextIndex = currentIndex - 1;
        return segmentList[nextIndex];
    } else if (direction === "down" && currentIndex < (segmentList.length-1)) {
        nextIndex = currentIndex + 1;
        return segmentList[nextIndex];  
    } else {
        return "skip";
    }
}

const executeScroll = (direction) => {
    let id = calculateDir(direction);
    
    if(id !== "skip") {
        const yOffset = -70; 
        const myRef = document.querySelector(id);
        const y = myRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        window.history.replaceState(null, "", "http://localhost:3000/" + id);
    }
}

const UpDownNav = () => {
    return (
        <Box className="upDownNav" w="100px">
            <VStack>
                <IconButton className="upDownBtn" onClick={() => executeScroll("up")} {...Attribute} icon={< FiArrowUp />}  ></IconButton>
                <IconButton className="upDownBtn" onClick={() => executeScroll("down")} {...Attribute} icon={< FiArrowDown />}  ></IconButton>
            </VStack>
        </Box>
    );
}

export default UpDownNav;