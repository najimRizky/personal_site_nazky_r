import Greetings from "../section/Greetings";
import Aboutme from "../section/Aboutme";
import Skills from "../section/Skills";
import Portfolio from "../section/Portfolio";
import Footer from "../section/Footer";
import Experiences from "../section/Experiences";

const Home = () => {
    return (
        <>
            <Greetings/>
            <Aboutme/>
            <Skills/>
            <Portfolio/>
            <Experiences/>
            <Footer/>
        </>
    );
}

export default Home;