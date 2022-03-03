import { faBriefcase, faGraduationCap, faTasks } from "@fortawesome/free-solid-svg-icons";

// const randomBorderColor = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${randomColor}`;
// }

export const listExperiences = ([
    {
        place: "PT. Hashmicro Solusi Indonesia",
        division: "Front End Developer",
        job: "Internship",
        date: "Feb 2022 - Present",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faBriefcase,
        type: "education"
    },
    {
        place: "Universitas Multimedia Nusantara",
        division: "Informatics",
        job: "Student (College)",
        date: "Jul 2019 - Present",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faGraduationCap,
        type: "education"
    },
    {
        place: "Game Expo (G2x) 2022",
        division: "Event Division",
        job: "Comittee",
        date: "Aug 2021 - Feb 2022",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks
    },
    {
        place: "IF Gathering UMN 2021",
        division: "Accomodation Division",
        job: "Comittee",
        date: "Oct 2021 - Nov 2021",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
    {
        place: "SMAN 2 Kota Tangerang Selatan",
        division: "Science",
        job: "Student (Junior High School)",
        date: "Jul 2016 - May 2019",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faGraduationCap,
        type: "education"

    },
    {
        place: "Moonzher Scout Competition (MSC)",
        division: "Event Division",
        job: "Coordinator",
        date: "Oct 2018 - Dec 2018",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
    {
        place: "Moonzher Civics Competition (MCC)",
        division: "Event Division",
        job: "Coordinator",
        date: "Nov 2017 - Feb 2018",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
])