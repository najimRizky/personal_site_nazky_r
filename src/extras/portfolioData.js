import vue from "../assets/logoPortfolio/vue.png"
import vuetifyLogo from "../assets/logoPortfolio/vuetify.png"
import laravel from "../assets/logoPortfolio/laravel.png"
import bootstrap from "../assets/logoPortfolio/bootstrap.png"
import codeigniter from "../assets/logoPortfolio/codeigniter.png"
import semanticUI from "../assets/logoPortfolio/semanticUI.png"
import react from "../assets/logoPortfolio/react.png"
import materialUI from "../assets/logoPortfolio/materialUI.png"
import unity from "../assets/logoPortfolio/unity.png"
import firebase from "../assets/logoPortfolio/firebase.png"
import android from "../assets/logoPortfolio/android.png"


import nyl from '../assets/logoPortfolio/pages/nyl.webp'
import findumois from "../assets/logoPortfolio/pages/findumois.webp"
import gema from "../assets/logoPortfolio/pages/gema.webp"
import converter from "../assets/logoPortfolio/pages/allUCanConvert.webp"
import countdown from "../assets/logoPortfolio/pages/timer.webp"
import simpleCalc from "../assets/logoPortfolio/pages/simpleCalc.webp"
import covid19 from "../assets/logoPortfolio/pages/covidIndo.webp"
import lemo from "../assets/logoPortfolio/pages/lemo.webp"
import myWeather from "../assets/logoPortfolio/pages/myWeather.webp"
import drFaben from "../assets/logoPortfolio/pages/drFaben.webp"
import workoutkuy from "../assets/logoPortfolio/pages/workoutkuy.webp"


export const allPortfolio = ([
    {
        type: "vue",
        name: "NYL CINEMA 21",
        desc: "Movie database and detail information",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "Vue js", logo: vue },
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: nyl,
        urlSite: "https://nyl-cinema21.vercel.app/",
        urlRepo: "https://github.com/najimRizky/NYL-Cinema21"
    },
    {
        type: "laravel",
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
        type: "codeigniter",
        name: "Gema ゲームー",
        desc: "Online Games Store (Simulation)",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "June 2021",
        tool: [
            { id: 1, name: "Codeigniter", logo: codeigniter },
            { id: 2, name: "Semantic UI", logo: semanticUI },
        ],
        background: gema,
        urlSite: "http://gemabeta.000webhostapp.com/",
        urlRepo: "https://github.com/najimRizky/Project_UAS_Rental"
    },
    {
        type: "unity",
        name: "Dr. Faben's Clinic",
        desc: "Clinic simulation idle game",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "December 2021",
        tool: [
            { id: 1, name: "Unity", logo: unity },
        ],
        background: drFaben,
        urlSite: "https://gamepipe.io/@najimrizky16/dr--faben-s-clinic",
        urlRepo: "https://github.com/ayaayawae/Dr.-Faben-s-Clinic"
    },
    {
        type: "android",
        name: "WorkOutKuy",
        desc: "Exercise assistant mobile application",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "December 2021",
        tool: [
            { id: 1, name: "Android", logo: android },
            { id: 2, name: "Firebase", logo: firebase },
        ],
        background: workoutkuy,
        urlSite: "https://play.google.com/store/apps/details?id=id.ac.umn.workoutkuy",
        urlRepo: "https://github.com/ayaayawae/WorkoutKuy"
    },
    {
        type: "vue",
        name: "All You Can Convert",
        desc: "Unit Converter",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "November 2020",
        tool: [
            { id: 1, name: "Vue.js", logo: vue },
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: converter,
        urlSite: "http://all-you-can-convert-git-main.najimrizky.vercel.app/",
        urlRepo: "https://github.com/najimRizky/All-You-Can-Convert"
    },
    {
        type: "vue",
        name: "Simple Countdown Timer",
        desc: "Countdown Timer",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "Vue.js", logo: vue },
            { id: 2, name: "Vuetify", logo: vuetifyLogo },
        ],
        background: countdown,
        urlSite: "https://countdowntimer-week13-najimrizky-git-main-najimrizky.vercel.app",
        urlRepo: "https://github.com/najimRizky/Countdown-Timer"
    },
    {
        type: "react",
        name: "Covid-19 Indonesia Info",
        desc: "Real-time updates on Covid-19 cases in Indonesia",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
        ],
        time: "January 2021",
        tool: [
            { id: 1, name: "React.js", logo: react },
            { id: 2, name: "Material UI", logo: materialUI },
        ],
        background: covid19,
        urlSite: "https://covid-19-indonesia.vercel.app/",
        urlRepo: "https://github.com/najimRizky/Covid-19-Indonesia"
    },
    {
        type: "react",
        name: "Simple React Calculator",
        desc: "Calculator",
        status: [
            { id: 1, name: "Practice", color: "yellow" },
        ],
        time: "December 2020",
        tool: [
            { id: 1, name: "React.js", logo: react },
        ],
        background: simpleCalc,
        urlSite: "https://calculator-nr.najimrizky.vercel.app/",
        urlRepo: "https://github.com/najimRizky/React-Calculator"
    },
    {
        type: "react",
        name: "My Weather",
        desc: "Real-time weather forecasting",
        status: [
            { id: 1, name: "Individual Project", color: "green" },
            { id: 2, name: "In Development", color: "red" }
        ],
        time: "August 2021",
        tool: [
            { id: 1, name: "React.js", logo: react },
            { id: 2, name: "Semantic UI", logo: semanticUI },
        ],
        background: myWeather,
        urlSite: "https://my-weather-three.vercel.app/",
        urlRepo: "https://my-weather-three.vercel.app/"
    },
    {
        type: "codeigniter",
        name: "Lemo",
        desc: "Online Hotel Reservation (Simulation)",
        status: [
            { id: 1, name: "Team Project", color: "blue" },
            { id: 2, name: "Final term project", color: "orange" }
        ],
        time: "June 2021",
        tool: [
            { id: 1, name: "Codeigniter", logo: codeigniter },
            { id: 2, name: "Bootstrap", logo: bootstrap },
        ],
        background: lemo,
        urlSite: "http://lemobeta.000webhostapp.com/",
        urlRepo: "https://github.com/najimRizky/Project_UAS_Hotel"
    },

])

export const tags = ([
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
    {
        "id": "unity",
        "name": "Unity",
        "icon": unity
    },
    {
        "id": "android",
        "name": "Android",
        "icon": android
    }
])