import { Badge, Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/image";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@chakra-ui/button";
import { allPortfolio } from "../extras/portfolioData";
import { Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { hoverOpac, hoverScale, hoverX, hoverY } from "../extras/hoverTypePortfolio";
import { connect } from "react-redux";
import { sectionList } from "../extras/sectionList";
import { Wrap, WrapItem } from '@chakra-ui/react'
import laravel from "../assets/logoPortfolio/laravel.png"
import react from "../assets/logoPortfolio/react.png"
import vue from "../assets/logoPortfolio/vue.png"
import codeigniter from "../assets/logoPortfolio/codeigniter.png"

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionBadge = motion(Badge);
const MotionButton = motion(Button);
const MotionHStack = motion(HStack);

const arrVariantHover = [hoverY, hoverX, hoverOpac, hoverScale]

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
            //     duration: 0.2
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
        // y: -10,
        // scaleY: 0
    }
}

const Portfolio = (props) => {
    const { ref, inView } = useInView();
    const id = sectionList[3];
    const [detail, showDetail] = useState(0);
    const [filter, setFilter] = useState("all");
    const [dataPortfolio, setDataPortfolio] = useState(allPortfolio);

    const tags = ([
        {
            "id": "all",
            "name": "All",
            "icon": ""
        },
        {
            "id": "react",
            "name": "React.js",
            "icon": react
        },
        {
            "id": "vue",
            "name": "Vue.js",
            "icon": vue
        },
        {
            "id": "laravel",
            "name": "Laravel",
            "icon": laravel
        },
        {
            "id": "codeigniter",
            "name": "Codeigniter",
            "icon": codeigniter
        },
    ])

    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
        }
        // eslint-disable-next-line
    }, [inView]);

    const showdetail = (val) => {
        showDetail(val);
    }

    const hidedetail = () => {
        showDetail(0);
    }

    const goToLink = (url) => {
        window.open(url, "_blank");
    }

    const setActive = (element) => {
        let tmp = allPortfolio.filter(item => item.type.includes(element !== "all" ? element : ""))
        setDataPortfolio(tmp);
        setFilter(element);
    }

    return (
        <Box id={id} transition={props.transition} minHeight="100%" bgImage={props.bgWave} bgSize="cover" pb={10} px={[5, 5, 10, 20]} pt={70} fontFamily="Raleway">
            <Heading color={props.color} ref={ref} mb={10} fontWeight={400} fontSize={50} >
                PORTFOLIO
            </Heading>
            <Wrap mb={"20px"}>
                {tags.map((tag) =>
                    <WrapItem key={tag.id}>
                        <Tag onClick={() => setActive(tag.id)} className={filter === tag.id ? "filterActive" : ""} px={"25px"} py={"12px"} cursor={"pointer"} borderRadius='full' size="md" _hover={{ bg: "rgba(0,0,0,0.2)" }} transition={"0.2s"} variant='outline' color={props.color}>
                            <TagLabel >{tag.name}</TagLabel>
                            {tag.id !== "all" &&
                                <Image ml={2} width={"20px"} height={"auto"} src={tag.icon}></Image>
                            }
                        </Tag>
                    </WrapItem>
                )}
            </Wrap>
            <SimpleGrid columns={[1, 1, 2, 2]} >
                <AnimatePresence >
                {dataPortfolio.map(item => (
                    // <Tilt className="tiltCard" key={item.id} >
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
                    // </Tilt>
                    ))}
                    </AnimatePresence>
            </SimpleGrid>
        </Box>
    );
}

const getRedux = (state) => {
    return {
        theme: state.theme,
        bgWave: state.bgWave,
        transition: state.transition,
        color: state.color
    }
}

export default connect(getRedux)(Portfolio);
