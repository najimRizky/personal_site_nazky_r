import bgBoxBlack from "../assets/bgBoxHomeBlack.svg";
import bgBoxGreen from "../assets/bgBoxHomeGreen.svg";
import bgBoxBlue from "../assets/bgBoxHomeBlue.svg";
import { MoonIcon } from "@chakra-ui/icons";
import WaveBlack from "../assets/WaveBlack.svg";
import WaveGreen from "../assets/WaveGreen.svg";
import WaveBlue from "../assets/WaveBlue.svg";

const initState = {
    theme: "#000000",
    bgBox: bgBoxBlack,
    transition: "all ease 0.2s",
    icon: MoonIcon,
    bgWave: WaveBlack
}

const rootReducer = (state = initState, action) => {
    if(action.type === "CHANGE_THEME"){
        let newBgBox;
        let newTheme;
        let newBgWave;
        switch (action.newTheme) {
            case "#000000":
                newBgBox = bgBoxGreen;
                newTheme = "#002324";
                newBgWave = WaveGreen;
                break;

            case "#002324":
                newBgBox = bgBoxBlue;
                newTheme = "#00102b";
                newBgWave = WaveBlue;
                break;

            case "#00102b":
                newBgBox = bgBoxBlack;
                newTheme = "#000000";
                newBgWave = WaveBlack;
                break;

            default:
                break;
        }
        return {
            ...state,
            theme: newTheme,
            bgBox: newBgBox,
            bgWave: newBgWave
        }
    }
    return state;
}

export default rootReducer;