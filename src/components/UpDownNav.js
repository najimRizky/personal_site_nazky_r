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

const executeScroll = () => {
    const yOffset = -70;
    const myRef = document.getElementById("home");
    const y = myRef.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    // myRef.scrollIntoView({ block: "start",behavior: "smooth" });

}

// function isInViewport(el) {
//     console.log(el);
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


// const box = document.getElementById("#skills");

// document.addEventListener('scroll', function () {
//     if (isInViewport(box)) {
//         console.log("Skill");
//     }
// }, {
//     passive: true
// });

const UpDownNav = () => {
    return (
        <Box className="upDownNav" w="100px">
            <VStack>
                <IconButton className="upDownBtn" onClick={() => executeScroll()} {...Attribute} icon={< FiArrowUp />}  ></IconButton>
                <IconButton className="upDownBtn" onClick={() => executeScroll()} {...Attribute} icon={< FiArrowDown />}  ></IconButton>
            </VStack>
        </Box>
    );
}

export default UpDownNav;