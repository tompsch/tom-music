import foto from '../../assets/fotoFooter.webp'
import scrollUp from '../../assets/downArrow.webp'
import { useEffect, useState } from 'react';
import { useScroll } from "../../context/ScrollContext";
import classes from "./Footer.module.css"
import { useLanguage } from '../../context/LangContext';

export default function Footer () {

    const scrollY = useScroll();
    const [isVisible,setIsVisible] = useState(false);
    const { language } = useLanguage();

    useEffect(()=> {
        if (scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [scrollY])

    const handleClick = () => alert("Going out to login");

    const scrollUpFunction = () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    return (
        <footer className={classes.footer}>
            <button className={classes.login} onClick={handleClick}>Login</button>
            <img className= {`${classes.scrollUp} ${isVisible ? classes.visible : ""}`} src={scrollUp} onClick={scrollUpFunction}
            alt = {language === "english" ? "Point up arrow" : "Flecha hacia arriba"}></img>
            <p className={classes.copyright}>Copyright tom.psch® 2026</p>
            <aside className={classes.fotoFooterContainer}>
                <div className={classes.topWhite}></div>
                <div className={classes.bottomBlack}></div>
                <img src={foto} className={classes.fotoFooter} alt={language === "english" ? "Tom singing and playing guitar" : "Tom cantando y tocando la guitarra"}/>
            </aside>
        </footer>
    )
};