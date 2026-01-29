import { Link } from "react-router";
import { useLanguage } from "../../context/LangContext";
import classes from "./Nav.module.css"


export default function Nav ({orientation}) {

const {language} = useLanguage();

const elements = [
    {
        inEng: "About",
        inSpa: "Acerca",
        id: "about"
    },
    {
        inEng: "Work",
        inSpa: "Trabajo",
        id: "work"
    },
    {
        inEng: "Photos",
        inSpa: "Fotos",
        id: "photos"
    },
    {
        inEng: "Contact",
        inSpa: "Contacto",
        id: "contact"
    },
    
];

return (
    <nav className={orientation === "vertical" && classes.verticalNavBar} >
        {elements.map((element) => {
            return (
                <Link to={element.id} key={element.id + language} className={orientation === "horizontal" ? classes.navElement : classes.navElementVertical}>
                    {language == "english" ? element.inEng : element.inSpa}
                </Link>
            )
        })}
    </nav>
);
};
