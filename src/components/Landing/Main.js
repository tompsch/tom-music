import wapp from '../../assets/wapp.png';
import arrow from '../../assets/downArrow2.png';
import { useLanguage } from '../../context/LangContext';
import { useRef } from 'react';
import classes from "./Main.module.css"
import { Link } from 'react-router';

function Main () {
    const {language} = useLanguage();

    const arrowRefOne = useRef(null);
    const arrowRefTwo = useRef(null);
    const wantSome = ["want some","lessons?","reach me out for more information"]
    const queresUnas = ["¿querés unas","clases?","contáctame para más información"]

    const handleClick = (to) => to.current.scrollIntoView({behavior: 'smooth'});

    return (
    <main className={`${classes.landingMain} animated`}>
            <Link to={"/"} onClick={() => handleClick(arrowRefOne)} ref={arrowRefOne}>
                <img src={arrow} className={classes.arrow} alt={language === "english" ? "Arrow pointing down" : "Flecha hacia abajo"}/>
            </Link>
            <section className={classes.lessons} >
                <p key= { language } id={classes.want}>{language === "english" ? wantSome[0] : queresUnas[0]}</p>
                <p key={ language + 1 } id={classes.lesson}>{language === "english" ? wantSome[1] : queresUnas[1]}</p>
                <Link to={"https://wa.me/5491161900557"} target='_blank'>
                    <img id={classes.wapp} src={wapp} alt={language === "english" ? "WhatsApp icon" : "Logo de WhatsApp"} />
                </Link>
                <p key={ language + 2 } id={classes.reachMe}>{language === "english" ? wantSome[2] : queresUnas[2]}</p>
            </section>
            <Link to={"/"} onClick={() => handleClick(arrowRefTwo)} ref={arrowRefTwo}>
            <img src={arrow} className={classes.arrow} alt={language === "english" ? "Arrow pointing down" : "Flecha hacia abajo"}/>
            </Link>
    </main>
    );
}



export default Main;