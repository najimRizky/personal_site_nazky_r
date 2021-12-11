import vueLogo from "../assets/logoPortfolio/vue.png"
import vuetifyLogo from "../assets/logoPortfolio/vuetify.png"
import laravel from "../assets/logoPortfolio/laravel.png"
import bootstrap from "../assets/logoPortfolio/bootstrap.png"
import codeigniter from "../assets/logoPortfolio/codeigniter.png"
import semanticUI from "../assets/logoPortfolio/semanticUI.png"
import react from "../assets/logoPortfolio/react.png"
import materialUI from "../assets/logoPortfolio/materialUI.png"

import nyl from '../assets/logoPortfolio/nyl.png'
import findumois from "../assets/logoPortfolio/findumois.png"
import gema from "../assets/logoPortfolio/gema.png"
import converter from "../assets/logoPortfolio/allUCanConvert.png"
import countdown from "../assets/logoPortfolio/timer.png"
import simpleCalc from "../assets/logoPortfolio/simpleCalc.png"
import covid19 from "../assets/logoPortfolio/covidIndo.png"
import lemo from "../assets/logoPortfolio/lemo.png"
import myWeather from "../assets/logoPortfolio/myWeather.png"

export const allPortfolio = ([
    {
        id: 1,
        name: "NYL CINEMA 21",
        desc: "Movie database and detail information",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "Vue js", logo: vueLogo },
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: nyl,
        urlSite: "https://nyl-cinema21.vercel.app/",
        urlRepo: "https://github.com/najimRizky/NYL-Cinema21"
    },
    {
        id: 2,
        name: "Findumois",
        desc: "Restaurant online order services (Simulation)",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "March 2021",
        tool: [
            { id: 1, name: "Laravel", logo: laravel },
            { id: 2, name: "Bootstrap", logo: bootstrap },
        ],
        background: findumois,
        urlSite: "http://findumois.000webhostapp.com/",
        urlRepo: "https://github.com/najimRizky/Project-UTS-Pemweb-Findumois"
    },
    {
        id: 3,
        name: "Gema ゲームー",
        desc: "Online Games Store (Simulation)",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "June 2021",
        tool: [
            { id: 1, name: "Codeigniter", logo:  codeigniter},
            { id: 2, name: "Semantic UI", logo: semanticUI },
        ],
        background: gema,
        urlSite: "http://gemabeta.000webhostapp.com/",
        urlRepo: "https://github.com/najimRizky/Project_UAS_Rental"
    },
    {
        id: 4,
        name: "All You Can Convert",
        desc: "Unit Converter",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "November 2020",
        tool: [
            { id: 1, name: "Vue js", logo:  vueLogo},
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: converter,
        urlSite: "http://all-you-can-convert-git-main.najimrizky.vercel.app/",
        urlRepo: "https://github.com/najimRizky/All-You-Can-Convert"
    },
    {
        id: 5,
        name: "Simple Countdown Timer",
        desc: "Countdown Timer",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "Vue js", logo:  vueLogo},
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: countdown,
        urlSite: "https://countdowntimer-week13-najimrizky-git-main-najimrizky.vercel.app",
        urlRepo: "https://github.com/najimRizky/Countdown-Timer"
    },
    {
        id: 6,
        name: "Simple React Calculator",
        desc: "Calculator",
        status: [
            { id: 1, name: "Practice", color: "yellow" },
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "React js", logo:  react},
        ],
        background: simpleCalc,
        urlSite: "https://calculator-nr.najimrizky.vercel.app/",
        urlRepo: "https://github.com/najimRizky/React-Calculator"
    },
    {
        id: 7,
        name: "Covid-19 Indonesia Info",
        desc: "Real-time updates on Covid-19 cases in Indonesia",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "January 2021",
        tool: [
            { id: 1, name: "React js", logo:  react},
            { id: 2, name: "Material UI", logo:  materialUI},
        ],
        background: covid19,
        urlSite: "https://covid-19-indonesia.vercel.app/",
        urlRepo: "https://github.com/najimRizky/Covid-19-Indonesia"
    },
    {
        id: 8,
        name: "Lemo",
        desc: "Online Hotel Reservation (Simulation)",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "June 2021",
        tool: [
            { id: 1, name: "Codeigniter", logo: codeigniter},
            { id: 2, name: "Bootstrap", logo: bootstrap},
        ],
        background: lemo,
        urlSite: "http://lemobeta.000webhostapp.com/",
        urlRepo: "https://github.com/najimRizky/Project_UAS_Hotel" 
    },
    {
        id: 9,
        name: "My Weather",
        desc: "Real-time weather forecasting",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
            { id: 2, name: "In Development", color: "red" }
        ],
        time: "August 2021",
        tool: [
            { id: 1, name: "React", logo: react},
            { id: 2, name: "Semantic UI", logo: semanticUI},
        ],
        background: myWeather,
        urlSite: "https://my-weather-three.vercel.app/",
        urlRepo: "https://my-weather-three.vercel.app/" 
    },

])