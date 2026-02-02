import classes from "./Header.module.css"
import pic1 from '../../assets/portadaShakes.png';
import Nav from "../Core/Nav";
import LangSelector from '../Core/LangSelector';
import { useLanguage } from "../../context/LangContext";
import yellow from "../../assets/yellow stripe.png"

function Header () {
const { language } = useLanguage();

const greeting = ["Hello, I'm","Musician,","educator."];
const saludo = ["Hola, soy","Músico,","educador."];

return (
    <header className={classes.landingHeader}>
        <section className={classes.left}>
            <div className={classes.greeting}>
                {/* <img src={yellow} className={classes.yellow} alt={language === "english" ? "A yellow paint stripe" : "Una tira de pintura amarilla"}></img> */}
                <p key={language}>{language === "english" ? greeting[0] : saludo[0]}</p>
                <p className={classes.tom} key={language+1}><b>Tom</b></p>
            </div>
            <p key={language + 1} id={classes.jobs}>{language === "english" ? greeting[1] : saludo[1]}<br/>{language === "english" ? greeting[2] : saludo[2]}</p>
        </section>
        <section className={classes.center}>
            <img id={classes.pic} src={pic1} alt={language === "english" ? "Arms crossed Tom" : "Tom con los brazos cruzados"}/>
        </section>
        <section className={classes.right}>
            <Nav type={"landing"}/>
            <LangSelector type={"landing"}/>
        </section>
    </header>
);
};

export default Header;