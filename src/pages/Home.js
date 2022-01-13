import Greetings from "../section/Greetings";
import Aboutme from "../section/Aboutme";
import Skills from "../section/Skills";
import Portfolio from "../section/Portfolio";
import Footer from "../section/Footer";
import Experiences from "../section/Experiences";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";

const Home = (props) => {
    return (
        <Box bgImage={props.bgWave} bgSize={"cover"} transition={props.transition}>
            <Greetings/>
            <Aboutme/>
            <Skills/>
            <Portfolio/>
            <Experiences/>
            <Footer/>
        </Box>
    );
}

const getRedux = (state) => {
    return {
        bgWave: state.bgWave,
        transition: state.transition,
        theme: state.theme
    }
}

export default connect(getRedux)(Home);