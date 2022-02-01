import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/image";
import { allPortfolio } from "../extras/portfolioData";
import { Tag, TagLabel } from "@chakra-ui/react";
import { connect } from "react-redux";
import { sectionList } from "../extras/sectionList";
import { Wrap, WrapItem } from '@chakra-ui/react'

import { tags } from "../extras/portfolioData";
import PortfolioCard from "../components/PortfolioCard";
import {AnimateSharedLayout, motion, useAnimation } from "framer-motion";

const MotionSimpleGrid = motion(SimpleGrid);
const MotionWrap = motion(Wrap);
const MotionWrapItem = motion(WrapItem);


const Portfolio = (props) => {
    const { ref, inView } = useInView();
    const id = sectionList[3];
    const [detail, showDetail] = useState(0);
    const [filter, setFilter] = useState("all");
    const [dataPortfolio, setDataPortfolio] = useState(allPortfolio);
    const animation = useAnimation();


    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
            animation.start("visible");
        }
        if (!dataPortfolio) {
            setActive()
        }
        // eslint-disable-next-line
    }, [inView, dataPortfolio]);

    const showdetail = (val) => {
        showDetail(val);
    }

    const hidedetail = () => {
        showDetail(0);
    }

    const setNull = (element) => {
        setFilter(element);
        setDataPortfolio(null);
    }

    const setActive = () => {
        let tmp = allPortfolio.filter(item => item.type.includes(filter !== "all" ? filter : ""))
        setDataPortfolio(tmp);
    }

    const BaseVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const ChildVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
            // transition: {
            //     when: "beforeChildren",
            // }
        }
    }

    return (
        <Box id={id} transition={props.transition} minHeight="100%" pb={10} px={[5, 5, 10, 20]} pt={70} fontFamily="Raleway">
            <Heading color={props.color} ref={ref} mb={10} fontWeight={400} fontSize={50} >
                PORTFOLIO
            </Heading>
            <MotionWrap variants={BaseVariants} mb={"20px"} initial="hidden" animate={animation}>
                {tags.map((tag, id) =>
                    <MotionWrapItem variants={ChildVariants} key={id}>
                        <Tag onClick={() => setNull(tag.id)} className={filter === tag.id ? "filterActive" : ""} px={"25px"} py={"12px"} cursor={"pointer"} borderRadius='full' size="md" _hover={{ bg: "rgba(0,0,0,0.2)" }} transition={"0.2s"} variant='outline' color={props.color}>
                            <TagLabel >{tag.name}</TagLabel>
                            {tag.id !== "all" &&
                                <Image ml={2} width={"20px"} height={"20px"} src={tag.icon}></Image>
                            }
                        </Tag>
                    </MotionWrapItem>
                )}
            </MotionWrap>
            <AnimateSharedLayout >
                <MotionSimpleGrid layout columns={[1, 1, 2, 2]} >
                    {dataPortfolio !== null && dataPortfolio.map((item, id) => (
                        <PortfolioCard key={id} detail={detail} showdetail={showdetail} hidedetail={hidedetail} item={item} />
                    ))}
                </MotionSimpleGrid >
            </AnimateSharedLayout>
        </Box >
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