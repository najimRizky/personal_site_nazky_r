import Greetings from "../components/Greetings";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Greetings />
            <Aboutme/>
            <Skills/>
            <Portfolio/>
            <Footer/>
        </>
    );
}

export default Home;