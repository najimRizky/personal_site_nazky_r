import { Badge, Box, HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { hoverOpac, hoverScale, hoverX, hoverY } from "../extras/hoverTypePortfolio";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionBadge = motion(Badge);
const MotionButton = motion(Button);
const MotionHStack = motion(HStack);

const arrVariantHover = [hoverY, hoverX, hoverOpac, hoverScale]

const PortfolioCard = ({ item, showdetail, hidedetail, detail }) => {
    const childVariant = {
        hidden: {
            scaleY: 0,
            y: -10
        },
        visible: {
            y: 0,
            scaleY: 1,
            transition: {
                type: "linear",
            }
        },
        exit: {
            y: -10,
            scaleY: 0
        }
    }
    const tes = {
        hidden: {
            x: 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                type: "linear"
            }
        },
        exit: {
        }
    }
    const goToLink = (url) => {
        window.open(url, "_blank");
    }
    return (
        <MotionBox key={item.id} variants={tes} initial="hidden" animate="visible" exit="exit" onMouseEnter={() => showdetail(item.id)} onMouseLeave={hidedetail} my={5} w={["100%", "450px", "320px", "405px"]} overflow="hidden" height={["170px", "255px", "185px", "230px"]} bgSize="100%" bgImage={item.background} className="portfolioCard" >
            <AnimatePresence>
                {detail === item.id && (
                    <MotionBox variants={arrVariantHover[Math.floor(Math.random() * arrVariantHover.length)]} initial="hidden" animate="visible" exit="exit" color="white" p={4} w="100%" h="100%" bg="blackAlpha.700">
                        <MotionText variants={childVariant} fontSize={[16, 26, 20, 24]} fontWeight={700}>
                            {item.name}
                        </MotionText>
                        <Box ml={0}>
                            <MotionText variants={childVariant} fontSize={[8, 14, 10, 12]}>
                                {item.desc}
                            </MotionText>
                            {item.status.map((item) => (
                                <MotionBadge variants={childVariant} mr={1} fontSize={["0.4rem", "0.6rem", "0.5rem", "0.6rem"]} variant="solid" colorScheme={item.color} key={item.id}>
                                    {item.name}
                                </MotionBadge>
                            ))}
                            <MotionText variants={childVariant} position="fixed" top="-2" right="3" mt={4} fontSize={12}>
                                <TimeIcon h={3} mb={1} /> {item.time}
                            </MotionText>
                            <MotionHStack variants={childVariant}>
                                <Text fontSize={[8, 16, 12, 14]} >
                                    Build with:
                                </Text>
                                {item.tool.map((item) => (
                                    <Tooltip key={item.id} label={item.name}>
                                        <Image src={item.logo} w={4} h={4}></Image>
                                    </Tooltip>
                                ))}
                            </MotionHStack>
                            <MotionButton variants={childVariant} className="downloadCVBtn" my={[10]} w="100%" mb={[2, 4, 2, 4]} mt={[2, 4, 2, 4]} onClick={() => goToLink(item.urlSite)} size="xs" colorScheme="purple">Visit Site</MotionButton>
                            <MotionButton variants={childVariant} w="100%" size="xs" colorScheme="teal" onClick={() => goToLink(item.urlRepo)} >Visit Repo</MotionButton>
                        </Box>
                    </MotionBox>
                )}
            </AnimatePresence>
        </MotionBox>
    )
}

export default PortfolioCard;