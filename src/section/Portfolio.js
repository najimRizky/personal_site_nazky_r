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
import {AnimateSharedLayout, motion } from "framer-motion";

const MotionSimpleGrid = motion(SimpleGrid);


const Portfolio = (props) => {
    const { ref, inView } = useInView();
    const id = sectionList[3];
    const [detail, showDetail] = useState(0);
    const [filter, setFilter] = useState("all");
    const [dataPortfolio, setDataPortfolio] = useState(allPortfolio);



    useEffect(() => {
        if (inView) {
            window.history.replaceState(null, "", window.location.origin + "/#" + id);
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

    return (
        <Box id={id} transition={props.transition} minHeight="100%" pb={10} px={[5, 5, 10, 20]} pt={70} fontFamily="Raleway">
            <Heading color={props.color} ref={ref} mb={10} fontWeight={400} fontSize={50} >
                PORTFOLIO
            </Heading>
            <Wrap mb={"20px"}>
                {tags.map((tag, id) =>
                    <WrapItem key={id}>
                        <Tag onClick={() => setNull(tag.id)} className={filter === tag.id ? "filterActive" : ""} px={"25px"} py={"12px"} cursor={"pointer"} borderRadius='full' size="md" _hover={{ bg: "rgba(0,0,0,0.2)" }} transition={"0.2s"} variant='outline' color={props.color}>
                            <TagLabel >{tag.name}</TagLabel>
                            {tag.id !== "all" &&
                                <Image ml={2} width={"20px"} height={"auto"} src={tag.icon}></Image>
                            }
                        </Tag>
                    </WrapItem>
                )}
            </Wrap>
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