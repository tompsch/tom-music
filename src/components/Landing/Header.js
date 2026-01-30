import classes from "./Header.module.css"
import pic1 from '../../assets/portadaShakes.png';
import Nav from "./Nav";
import LangSelector from './LangSelector';
import { useLanguage } from "../../context/LangContext";
import yellow from "../../assets/yellow stripe.png"

function Header () {
const { language } = useLanguage();

const greeting = ["Hello, I'm","Musician,","educator."];
const saludo = ["Hola, soy","Músico,","educador."];

return (
    <header className={classes.landingHeader}>
        <section className={classes.left}>
            <img src={yellow} className={classes.yellow} alt={language === "english" ? "A yellow paint stripe" : "Una tira de pintura amarilla"}></img>
            <p className={classes.greeting} key={language}>{language === "english" ? greeting[0] : saludo[0]}<br/><b>Tom</b></p>
            <p key={language + 1} id={classes.jobs}>{language === "english" ? greeting[1] : saludo[1]}<br/>{language === "english" ? greeting[2] : saludo[2]}</p>
        </section>
        <section className={classes.center}>
            <img id={classes.pic} src={pic1} alt={language === "english" ? "Arms crossed Tom" : "Tom con los brazos cruzados"}/>
        </section>
        <section className={classes.right}>
            <Nav type={"landing"}/>
            <LangSelector />
        </section>
    </header>
);
};

export default Header;