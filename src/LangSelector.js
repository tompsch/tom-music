import ukLogo from "./assets/uk.png";
import spainLogo from "./assets/spain.png";
import { useContext } from "react";
import { useLanguage } from "./context/LangContext";

function LangSelector () {
    const {language,setLanguage} = useLanguage();

    const toSpa = () => {
        // console.log(props.language); 
        if (language == "english") {
            console.log(`Language is ${language}, changing to Spanish`)
            setLanguage("spanish");
        } else {
            console.log(`El idioma ya es ${language}`)
        }
    };

    const toEng = () => {
        if (language == "spanish") {
                    console.log(`El idioma es ${language}, changing to English`);
                    setLanguage("english");
                } else {
                    console.log(`Language is already ${language}`)
                }
     };
    
    return (
        <div className="lang">
                <div className={"english" + " " + (language=="english" ? "on" : "off")} onClick={toEng}>
                    <p className="eng">EN</p>
                    <img className="eng-pic" src={ukLogo}/>
                </div>
                
                <div className={"spanish" + " " + (language=="spanish" ? "on" : "off")} onClick={toSpa}>
                    <p className="esp">ES</p>
                    <img className="esp-pic" src={spainLogo}/>
                </div>
            </div>
    )
};

export default LangSelector;