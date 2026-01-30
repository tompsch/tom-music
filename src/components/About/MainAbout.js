import classes from "./MainAbout.module.css"
import sun from "../../assets/sun.png"
import footprints from "../../assets/footprint.png"
import { useLanguage } from "../../context/LangContext"

const englishBio = ["Biography","Born in Buenos Aires, Argentina, Tomás grew up in a large family that was an important musical influence from a very young age. At a bilingual school, he learned English and began playing electric and acoustic guitar, taking his first private lessons with a great guitarist and teacher, Daniel Pellegrini, while enjoying band rehearsals with friends.",
    "After finishing high school and exploring his passion for technology and computers, he began his academic career at Escuela de Música Contemporánea - Berklee International Network (BIN), where he studies Jazz Guitar, Music Composition, and Big Band Arranging with amazing musicians and teachers from Latin America.",
    "He graduates from school as a Profesional Musician and pursues further music studies, learning from various guitar teachers while beginning his career as an educator. He seeks to apply his knowledge by offering private lessons to beginner and intermediate students, while also embarking on a new path in composition, singing, and songwriting.",
    "While performing with other musicians in various band formats—including duos, trios, and larger ensembles across a wide range of musical styles and genres—he also plays solo gigs and continues to expand his experience as a guitar and music educator, teaching at numerous academies around Buenos Aires.",
    "Before reaching his thirties, he moves to the inspiring, mountainous landscape of Córdoba, where he delves even deeper into the academic world of music education and graduates as a Music Professor from the Facultad de Artes at the Universidad Nacional de Córdoba (UNC).",
    "Today, he divides his time between teaching music at various schools and levels of the education system, giving private instrument lessons, composing and arranging songs, practicing, performing, and—over the last three years—exploring his lifelong side interest and hobby: programming. He emphatically pursues a balanced life centered around his numerous passions and spending time with his family and friends."
];

const spanishBio = ["Biografía",]

export default function MainAbout () {
    const {language} = useLanguage();

    return (
        <main className={classes.aboutMain}>
            <section className={classes.heading}>
                <div className={classes.sunFootprint} aria-label={language === "english" ? "Footprints and sun kind-of-logo" : "Tipo de logo con un sol y huellas"}>
                    <img src={sun} className={classes.sunPic} alt={language === "english" ? "Sun" : "Sol"}></img>
                    <img src={footprints} className={classes.footprintsPic} alt={language === "english" ? "Footprints" : "Huellas"}></img>
                </div>
                <h1 key={englishBio[0] + language}>{language === "english" ? englishBio[0] : spanishBio[0]}</h1>
            </section>
            <section className={classes.bio}>
                {language === "english" &&  englishBio.map((text,index) => {
                    if (index > 0) {
                        return <p key={text}>{text}</p>
                }})
                }

            </section>
        </main>
    )
}