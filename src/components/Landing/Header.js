import classes from "./Header.module.css"
import pic1 from '../../assets/portadaShakes.png';
import Nav from "../Core/Nav";
import LangSelector from '../Core/LangSelector';
import { useLanguage } from "../../context/LangContext";
import yellow from "../../assets/yellow stripe.png"

function Header ({firstMount}) {
const { language } = useLanguage();

const greeting = ["Hello, I'm","Musician,","educator."];
const saludo = ["Hola, soy","Músico,","educador."];

return (
    <header className={classes.landingHeader}>
        <section className={`${classes.left} animated`}>
            <div className={`${classes.greeting}`}>
                <p key={language}>{language === "english" ? greeting[0] : saludo[0]}</p>
                <p className={`${classes.tom}`}><b>Tom</b></p>
            </div>
            <p key={language + 1} id={classes.jobs}>{language === "english" ? greeting[1] : saludo[1]}<br/>{language === "english" ? greeting[2] : saludo[2]}</p>
        </section>
        <section className={`${classes.center}`}>
            <img className="animated" id={classes.pic} src={pic1} alt={language === "english" ? "Arms crossed Tom" : "Tom con los brazos cruzados"}/>
        </section>
        <section className={classes.right}>
            <Nav type={"landing"} firstMount={firstMount}/>
            <LangSelector type={"landing"} active={true}/>
        </section>
    </header>
);
};

export default Header;