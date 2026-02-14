import { useLanguage } from "../../context/LangContext"
import classes from "./Heading.module.css"
import sun from "../../assets/sun.jpg"

export default function Heading ({logoAlt, insideAlt, insideSrc, h1, style}) {
const {language} = useLanguage();
    return(
        <section className={classes.heading}>
            <div className={classes.logo} aria-label={language === "english" ? logoAlt[0] : logoAlt[1]}>
                <img src={sun} className={classes.sunPic} alt={language === "english" ? "Sun" : "Sol"}></img>
                <img style={style} src={insideSrc} className={classes.picture} alt={language === "english" ? insideAlt[0] : insideAlt[1]}></img>
            </div>
            <h1>{language === "english" ? h1[0] : h1[1]}</h1>
        </section>
    )
}