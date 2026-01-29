import ukLogo from "../../assets/uk.png";
import spainLogo from "../../assets/spain.png";
import { useLanguage } from "../../context/LangContext";
import classes from "./LangSelector.module.css"

function LangSelector () {
    const {language,setLanguage} = useLanguage();

    const changeLang = ( toLang ) => {
        if (toLang === "toSpa") {
            language === "english" && setLanguage("spanish");
        }
        else if (toLang === "toEng") {
            language === "spanish" && setLanguage("english");
        }
    }
    return (
        <aside className={classes.lang}>
            <div className={`${classes.english} ${language === "english" ? classes.on : classes.off}`}
                 onClick={() => changeLang("toEng")}
                 aria-label={language === "english" ? "Language selector: English" : "Seleccionador de idioma: inglés"}>
                <p className={classes.eng}>EN</p>
                <img className={classes.engPic} src={ukLogo} alt={language === "english" ? "UK flag" : "Bandera del Reino Unido"}/>
            </div>
            <div className={`${classes.spanish} ${language === "spanish" ? classes.on : classes.off}`}
                 onClick={() => changeLang("toSpa")}
                 aria-label={language === "english" ? "Language selector: Spanish" : "Seleccionador de idioma: español"}>
                <p className={classes.esp}>ES</p>
                <img className={classes.espPic} src={spainLogo} alt={language === "english" ? "Spain flag" : "Bandera de España"}/>
            </div>
        </aside>
    )
};

export default LangSelector;