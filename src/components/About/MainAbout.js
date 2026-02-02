import classes from "./MainAbout.module.css"
import sun from "../../assets/sun.png"
import footprints from "../../assets/footprint.png"
import { useLanguage } from "../../context/LangContext"
import bioPic1 from "../../assets/bioPic1.png"
import bioPic2 from "../../assets/bioPic2.png"
import bioPic3 from "../../assets/bioPic3.png"
import bioPic4 from "../../assets/bioPic4.png"
import bioPic5 from "../../assets/bioPic5.png"
import bioPic6 from "../../assets/bioPic6.png"

const englishBio = ["Biography","Born in <b>Buenos Aires<b/>, Argentina, Tomás grew up in a large family that was an important musical influence from a very young age. At a bilingual school, he learned English and began playing <b>electric and acoustic guitar<b/>, taking his first private lessons with a great guitarist and teacher, Daniel Pellegrini, while enjoying band rehearsals with friends.",
    "After finishing high school and exploring his passion for technology and computers, he began his academic career at <b>Escuela de Música Contemporánea<b/> - Berklee International Network (BIN), where he studies Jazz Guitar, Music Composition, and Big Band Arranging with amazing musicians and teachers from Latin America.",
    "He graduates from school as a Profesional Musician and pursues further music studies, learning from various guitar teachers while beginning his career as an <b>educator<b/>. He seeks to apply his knowledge by offering private lessons to beginner and intermediate students, while also embarking on a new path in <b>composition<b/>, <b>singing<b/>, and <b>songwriting<b/>.",
    "While performing with other musicians in various band formats—including duos, trios, and larger ensembles across a <b>wide range of musical styles and genres<b/>—he also plays solo gigs and continues to expand his experience as a guitar and music educator, teaching at numerous <b>academies<b/> around Buenos Aires.",
    "Before reaching his thirties, he moves to the inspiring, mountainous landscape of <b>Córdoba<b/>, where he delves even deeper into the academic world of music education and graduates as a <b>Music Professor<b/> from the Facultad de Artes at the Universidad Nacional de Córdoba (UNC).",
    "Today, he divides his time between <b>teaching music<b/> at various schools and levels of the education system, giving private instrument lessons, composing and arranging songs, practicing, performing, and—over the last three years—exploring his lifelong side interest and hobby: <b>programming<b/>. He emphatically pursues a balanced life centered around his numerous passions and spending time with his family and friends."
];

const spanishBio = ["Biografía",]

const pictures = [bioPic1,bioPic2,bioPic3,bioPic4,bioPic5,bioPic6]

const textDisplay = (text) => {
    let stringSeparator1 = text.indexOf("<b>");
    let stringSeparator2 = text.indexOf("<b/>");
    if (stringSeparator1 === -1 || stringSeparator2 === -1) {
        return text;
    }
    else {
        let beforeBold = text.slice(0,stringSeparator1)
        let bold = text.slice(stringSeparator1+3,stringSeparator2);
        let afterBold = text.slice(stringSeparator2+4);
        return <span>{beforeBold}<b>{bold}</b>{textDisplay(afterBold)}</span>
    }
}


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
                        return <section className={`${classes.bioPicContainer}`} key={text} >
                            <p >{textDisplay(text)}</p>
                            <img src={pictures[index-1]} className={`${classes.bioPics} ${classes[`bioPic${index}`]}`}></img>
                        </section>
                }})
                }

            </section>
        </main>
    )
}