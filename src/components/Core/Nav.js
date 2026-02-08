import { Link, NavLink, useLocation } from "react-router";
import { useLanguage } from "../../context/LangContext";
import classes from "./Nav.module.css"
import home from "../../assets/home.png"
import login from "../../assets/login-avatar.png"
import world from "../../assets/internet.png"
import LangSelector from "./LangSelector";
import { useEffect, useState } from "react";
import burguer from "../../assets/burguer.svg"
import cross from "../../assets/close.png"

export default function Nav ({type, firstMount}) {

const {language} = useLanguage();
const [isActive, setIsActive] = useState(false);
const [openBurguer, setOpenBurger] = useState(false);
const currentLocation = useLocation();

const handleScroll = () => {
    setIsActive(false);
    setOpenBurger(false);
}


useEffect(()=>{
    if(type === "noLanding") {
        window.addEventListener("scroll",handleScroll);
        return (()=>window.removeEventListener("scroll",handleScroll));
    }
},);
useEffect(()=> {
    window.addEventListener("resize",handleScroll);
    return (()=> window.addEventListener("resize", handleScroll));
})
useEffect(()=>{
    if(type === "noLanding") {
        setIsActive(false);
    }
},[language, type]);

const elements = [
    {
        inEng: "About",
        inSpa: "Acerca",
        path: "/about"
    },
    {
        inEng: "Media",
        inSpa: "Media",
        path: "/media"
    },
    {
        inEng: "Work",
        inSpa: "Trabajo",
        path: "/work"
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
        // path: location.pathname,
        path: "",
    },
];

const handleLangSelector = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
};

const handleBurguer = (e) => {
    e.preventDefault();
    setOpenBurger(!openBurguer);
}

const handleSamePath = (path) => {
    if (path === currentLocation.pathname) {
        setOpenBurger(false);
    }
}
//  ${firstMount && "animated"}
return (
    <nav className={`${type === "noLanding" ? classes.noLandingNav : (firstMount ? "animated" : classes.pseudoAnimated)}`}> 
        {/* ICON WRAPPER FOR NO-LANDING PAGES */}
        <div className={type === "noLanding" ? classes.navIconWrapper : classes.noDisplay}>
            {type === "noLanding" && icons.map(icon =>{
                return (
                    icon.name !== "world" ?
                    <Link to={icon.path} key={icon.name + language}>
                        <img className={classes.noLandingNavIcon} src={icon.src} alt={language === "english" ? icon.altEng : icon.altSpa} ></img>
                    </Link> :
                    <button key={icon.name + language} onClick={handleLangSelector} className={`${classes.langSelector} ${isActive && classes.whileSelecting} `}>
                        <img className={classes.noLandingNavIcon} src={icon.src} alt={language === "english" ? icon.altEng : icon.altSpa} ></img>
                    </button>
                )
            })}
            {isActive ? <LangSelector type={"noLanding"} active={isActive}/> : <LangSelector type={"noLanding"} active={isActive}/>}
        </div>
        {/* NAV LINK-TO-PAGES WRAPPER FOR ALL PAGES */}
        {<div className={type === "landing" ? classes.navWrapper : classes.navWrapperNoLanding}>
            {elements.map((element) => {
                return (
                    <NavLink to={element.path} key={element.path + language} 
                    // className={`${classes.navElement} ${({isActive}) => isActive && "active"}`}>
                    className={({isActive}) => isActive ? `${classes.navElement} ${classes.active}` : classes.navElement}>
                        {language === "english" ? element.inEng : element.inSpa}
                    </NavLink>
                )
            })}
        </div>}
            {type === "noLanding" && <div className={`${classes.navWrapperBurguer} ${openBurguer && classes.open}`}>
                {elements.map((element) => {
                    return (
                        <Link to={element.path} key={element.path + language} className={classes.burguerElement} onClick={()=>handleSamePath(element.path)}>
                            {language === "english" ? element.inEng : element.inSpa}
                        </Link>
                    )
                })}
        </div>}

        {type === "noLanding" && (!openBurguer ?
            <button className={classes.burguer} onClick={handleBurguer} key={burguer}>
                <img src={burguer} alt={language === "english" ? "Hamburguer menu icon" : "Icono de menu de hamburgesa"}></img>
            </button>
            :
            <button className={classes.cross} onClick={handleBurguer} key={cross}>
                <img src={cross} alt={language === "english" ? "Close menu icon" : "Icono de cierre de menú"}></img>
            </button>
        )}

    </nav>
);
};
