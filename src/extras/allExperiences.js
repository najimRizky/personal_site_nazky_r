import { faGraduationCap, faTasks } from "@fortawesome/free-solid-svg-icons";

// const randomBorderColor = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return `#${randomColor}`;
// }

export const listExperiences = ([
    {
        id: 1,
        place: "Universitas Multimedia Nusantara",
        division: "Informatics",
        job: "Student (College)",
        date: "Jul 2019 - Present",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faGraduationCap,
        type: "education"
    },
    {
        id: 2,
        place: "Game Expo (G2x) 2022",
        division: "Event Division",
        job: "Comittee",
        date: "Aug 2021 - Present",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks
    },
    {
        id: 3,
        place: "IF Gathering UMN 2021",
        division: "Accomodation Division",
        job: "Comittee",
        date: "Oct 2021 - Nov 2021",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
    {
        id: 4,
        place: "SMAN 2 Kota Tangerang Selatan",
        division: "Science",
        job: "Student (Junior High School)",
        date: "Jul 2016 - May 2019",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faGraduationCap,
        type: "education"

    },
    {
        id: 5,
        place: "Moonzher Scout Competition (MSC)",
        division: "Event Division",
        job: "Coordinator",
        date: "Oct 2018 - Dec 2018",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
    {
        id: 6,
        place: "Moonzher Civics Competition (MCC)",
        division: "Event Division",
        job: "Coordinator",
        date: "Nov 2017 - Feb 2018",
        topLine: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        icon: faTasks,
        type: "volunteer"
    },
])