import { useLanguage } from "./context/LangContext";

function Left() {
const {language, setLanguage} = useLanguage();
    return (
        <div className="left">
            <p key={language=="english" ? "stateOne" : "stateTwo"} className="greeting">{language=="english" ? "Hello, I'm" : "Hola, soy"}<br/><b>Tom</b></p>
            <p key={language=="english" ? "stateThree" : "stateFour"} id="jobs">{language=="english" ? "Musician," : "Músico,"}<br/>{language=="english" ? "educator." : "educador."}</p>
        </div> 
    )
}

export default Left;