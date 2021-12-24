import bgBoxDark from "../assets/bgBoxHomeDark.svg";
import bgBoxLight from "../assets/bgBoxHomeLight.svg";
import WaveDark from "../assets/WaveDark.svg";
import WaveLight from "../assets/WaveLight.svg";
import { MoonIcon } from "@chakra-ui/icons";

const initState = {
    theme: "#1A202C",
    bgBox: bgBoxDark,
    transition: "all ease 0.2s",
    icon: MoonIcon,
    bgWave: WaveDark,
    color: "#FFFFFF",
    intro: true,
}

const rootReducer = (state = initState, action) => {
    if(action.type === "CHANGE_THEME"){
        let newBgBox, newTheme, newBgWave, newColor;
        switch (action.newTheme) {
            case "#FFFFFF":
                newTheme = "#1A202C"; // Dark
                newBgBox = bgBoxDark;
                newBgWave = WaveDark;
                newColor = "#FFFFFF";
                break;

            case "#1A202C":
                newTheme = "#FFFFFF"; // Light
                newBgBox = bgBoxLight;
                newBgWave = WaveLight;
                newColor = "#1A202C";
                break;

            default:
                break;
        }
        return {
            ...state,
            theme: newTheme,
            bgBox: newBgBox,
            bgWave: newBgWave,
            color: newColor
        }
    }else if(action.type === "FINISH_INTRO"){
        return{
            ...state,
            intro: action.intro
        }
    }
    return state;
}

export default rootReducer;