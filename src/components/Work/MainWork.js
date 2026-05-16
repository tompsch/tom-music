import classes from "./MainWork.module.css"
import playIcon from "../../assets/playIcon.png"
import { useLanguage } from "../../context/LangContext"
import Heading from "../Core/Heading"

export default function MainWork () {
const { language } = useLanguage();

const englishFAQ = [
    {h: "What do I do?",
    p: "I'm a musician and music professor (and a web developer, but that's another story)."},
    {h: "Which services do I provide?",
    p: "I teach electric, acoustic, and classical guitar, as well as music theory and production, ear training, song arranging, band orchestration, and more. I also support other musicians with their personal projects—for example, building or mocking up tracks, recording, and arranging for different ensembles."},
    {h: "Do you offer virtual sessions?",
    p: "Absolutely. I teach virtual lessons via Zoom, Microsoft Teams, or Google Meet. I can also work with you remotely on music production and recording projects."},
    {h: "Where is your physical workplace?",
    p: "I currently offer in-person services in Jesús María and Córdoba Capital, in the province of Córdoba, Argentina."},
];
const spanishFAQ = [
    {h: "¿Qué es lo qué hago?",
    p: "Soy músico y profesor en educación músical (también soy desarrollador web, pero esa es otra historia)."},
    {h: "¿Qué servicios brindo?",
    p: "Enseño guitarra eléctrica, acústica y clásica, teoría y producción musical, audioperceptiva, arreglos, orquestación, y más. También ayudo a otros músicos con sus proyectos personales, por ejemplo, en la maquetación de pistas y el armado de tracks, grabaciones y arreglos para diferentes ensambles."},
    {h: "¿Ofrecés sesiones virtuales?",
    p: "¡Por supuesto! Podemos coordinar encuentros virtuales via Zoom, Microsoft Teams o Google Meet. También podemos trabajar de manera remota en producción musical y grabaciones de proyectos."},
    {h: "¿Dónde trabajás presencialmente?",
    p: "En la actualidad, ofrezco sesiones y clases presenciales en Jesús María y Córdoba Capital, en la provincia de Córdoba, Argentina."},
];

return (
        <main className={`${classes.workMain} animated`}>
            <Heading logoAlt={["Play triangle and sun kind-of-logo","Tipo de logo con un sol y un triángulo de reproducción"]}
            insideAlt={["A play icon", "Un ícono de reproducir"]}
            insideSrc={playIcon}
            h1={["Work", "Trabajo"]}/>

            <section className={classes.faq}>
                {language === "english" ? englishFAQ.map((element) => {
                    return (
                        <div className={classes.QA} key={element.h}>
                            <h2>{element.h}</h2>
                            <p>{element.p}</p>
                        </div>
                    )
                })
                : spanishFAQ.map((element) => {
                    return (
                        <div className={classes.QA} key={element.h}>
                            <h2>{element.h}</h2>
                            <p>{element.p}</p>
                        </div>
                    )
                }) }
            </section>
        </main>
)}