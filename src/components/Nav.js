import { Link } from "react-router";
import { useLanguage } from "../context/LangContext";


export default function Nav () {

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
    <nav className="nav-bar" >
        {elements.map((element) => {
            return (
                <Link to={element.id} key={element.id + language} className={"nav"} style={{ textDecoration: 'none' }}>{language == "english" ? element.inEng : element.inSpa}</Link>
            )
        })}
    </nav>
);
};
