import Greetings from "../components/Greetings";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

const Home = () => {
    return (
        <>
            <Greetings />
            <Aboutme/>
            <Skills/>
            <Portfolio/>
        </>
    );
}

export default Home;