import { Link } from "react-router";
import { useLanguage } from "../../context/LangContext";
import classes from "./Nav.module.css"
import home from "../../assets/home.png"
import login from "../../assets/login-avatar.png"
import world from "../../assets/internet.png"
import { useLocation } from "react-router";
import LangSelector from "./LangSelector";
import { useEffect, useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";


export default function Nav ({type}) {

const {language} = useLanguage();
const location = useLocation();
const [isActive, setIsActive] = useState(false);
const handleScroll = () => setIsActive(false);

useEffect(()=>{
    isActive && setIsActive(false);
    window.addEventListener("scroll",handleScroll);
    return (()=>window.removeEventListener("scroll",handleScroll));
},[]);

useEffect(()=>{
    setIsActive(false);
},[language]);

const elements = [
    {
        inEng: "About",
        inSpa: "Acerca",
        path: "/about"
    },
    {
        inEng: "Work",
        inSpa: "Trabajo",
        path: "/work"
    },
    {
        inEng: "Media",
        inSpa: "Media",
        path: "/photos"
    },
    {
        inEng: "Contact",
        inSpa: "Contacto",
        path: "/contact"
    },
    
];

const icons = [
    {
        name: "home",
        src: home,
        altEng: "Home icon",
        altSpa: "Icono de casa",
        path: "/",
    },
    {
        name: "login",
        src: login,
        altEng: "Person icon",
        altSpa: "Icono de persona",
        path: "/",
    },
    {
        name: "world",
        src: world,
        altEng: "World icon",
        altSpa: "Icono de mundo",
        path: location.pathname,
    },
];


const handleLangSelector = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    // await new Promise = setTimeout((resolve)=>(resolve));
};

return (
    <nav className={type === "noLanding" ? classes.noLandingNav : classes.landingNav} >
        <div className={type === "noLanding" ? classes.navIconWrapper : classes.noDisplay}>
        {type === "noLanding" && icons.map(icon =>{
            return (
                <Link to={icon.path} key={icon.name + language} onClick={icon.name === "world" && handleLangSelector} className={`${icon.name==="world" && classes.langSelector} ${(isActive && icon.name==="world") && classes.whileSelecting}`}>
                    <img className={classes.noLandingNavIcon} src={icon.src} alt={language === "english" ? icon.altEng : icon.altSpa} ></img>
                </Link>
            )
        })}
        {isActive && <LangSelector type={"noLanding"} />}
        </div>
        <div className={type === "landing" ? classes.navWrapper : classes.navWrapperNoLanding}>
            {elements.map((element) => {
                return (
                    <Link to={element.path} key={element.path + language} className={type === "landing" ? classes.navElement : `${classes.navElement} ${classes.noLandingNavElement}`}>
                        {language === "english" ? element.inEng : element.inSpa}
                    </Link>
                )
            })}
        </div>
    </nav>
);
};
