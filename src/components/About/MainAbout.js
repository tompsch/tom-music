import classes from "./MainAbout.module.css"
import footprints from "../../assets/footprint.png"
import { useLanguage } from "../../context/LangContext"
import bioPic1 from "../../assets/bioPic1.png"
import bioPic2 from "../../assets/bioPic2.png"
import bioPic3 from "../../assets/bioPic3.png"
import bioPic4 from "../../assets/bioPic4.png"
import bioPic5 from "../../assets/bioPic5.png"
import bioPic6 from "../../assets/bioPic6.png"
import Heading from "../Core/Heading"

const englishBio = ["Biography",
    "Born in <b>Buenos Aires<b/>, Argentina, Tomás grew up in a large family that was an important musical influence from a very young age. At a bilingual school, he learned English and began playing <b>electric and acoustic guitar<b/>, taking his first private lessons with a great guitarist and teacher, Daniel Pellegrini, while enjoying band rehearsals with friends.",
    "After finishing high school and exploring his passion for technology and computers, he began his academic career at <b>Escuela de Música Contemporánea<b/> - Berklee Global Partners (BIN), where he studies Jazz Guitar, Music Composition, and Big Band Arranging with amazing musicians and teachers from Latin America.",
    "He graduates from school as a Profesional Musician and pursues further music studies, learning from various guitar teachers while beginning his career as an <b>educator<b/>. He seeks to apply his knowledge by offering private lessons to beginner and intermediate students, while also embarking on a new path in <b>composition<b/>, <b>singing<b/>, and <b>songwriting<b/>.",
    "While performing with other musicians in various band formats—including duos, trios, and larger ensembles across a <b>wide range of musical styles and genres<b/>—he also plays solo gigs and continues to expand his experience as a guitar and music educator, teaching at numerous <b>academies<b/> around Buenos Aires.",
    "Before reaching his thirties, he moves to the inspiring, mountainous landscape of <b>Córdoba<b/>, where he delves even deeper into the academic world of music education and graduates as a <b>Music Professor<b/> from the Facultad de Artes at the Universidad Nacional de Córdoba (<b>UNC<b/>).",
    "Today, he divides his time between <b>teaching music<b/> at various schools and levels of the education system, giving private instrument lessons, composing and arranging songs, practicing, performing, and—over the last three years—exploring his lifelong side interest and hobby: <b>programming<b/>. He emphatically pursues a balanced life centered around his numerous passions and spending time with his family and friends."
];

const spanishBio = ["Biografía",
    "Nacido en <b>Buenos Aires<b/>, Argentina, Tomás creció en una familia numerosa que ejerció una importante influencia musical desde muy joven. Mientras estudiaba inglés en un colegio bilingüe, comenzó a tocar la <b>guitarra eléctrica y acústica<b/>, tomando sus primeras clases particulares con el gran profesor y guitarrista Daniel Pellegrini, mientras disfrutaba de encuentros musicales con sus amigos.",
    "Después de terminar la secundaria y explorar su pasión por la tecnología y las computadoras, comenzó su carrera académica en la <b>Escuela de Música Contemporánea<b/> - Berklee Global Partners (BIN), donde estudia la guitarra de jazz, composición musical y arreglos de big band con prestigiosos músicos y maestros de América Latina.",
    "Se gradúa como Músico Profesional y continúa sus estudios musicales estudiando con variados profesores de guitarra mientras, en paralelo, inicia su carrera como <b>docente<b/>. Busca aplicar sus conocimientos ofreciendo clases particulares a estudiantes de nivel principiante e intermedio, a la vez que emprende un nuevo camino en la <b>composición<b/>, la <b>interpretación vocal<b/> y la <b>composición musical<b/>.",
    "Mientras toca con otros músicos en diversos formatos de banda, incluyendo dúos, tríos y conjuntos más amplios de una <b>amplia gama de estilos y géneros musicales<b/>, realiza conciertos como solista y continúa ampliando su experiencia como guitarrista y profesor musical, enseñando en numerosas <b>academias<b/> de Buenos Aires.",
    "Antes de cumplir los treinta se muda al inspirador y montañoso paisaje de <b>Córdoba<b/>, donde se adentra aún más en el mundo académico de la música y se gradúa como <b>Profesor de Educación Musical<b/> de la Facultad de Artes de la Universidad Nacional de Córdoba (<b>UNC<b/>).",
    "Hoy en día, se reparte su tiempo entre la <b>docencia musical<b/> en diversas escuelas y niveles del sistema educativo, impartiendo clases particulares de instrumento, componiendo y arreglando canciones, practicando, interpretando y, desde hace tres años, explorando también su afición y pasión de toda la vida: la <b>programación<b/>. Busca con ahínco una vida equilibrada centrada en sus numerosas pasiones y en pasar tiempo con su familia y amigos."
]

const pictures = [
    {img: bioPic1,
        altEng: "Tom as a kid riding a motorcycle",
        altEsp: "Tom de niño en una moto",
    },
    {img: bioPic2,
        altEng: "Tom playing the electric guitar",
        altEsp: "Tom tocando la guitarra eléctrica"
    },
    {img: bioPic3,
        altEng: "Tom giving virtual guitar lessons",
        altEsp: "Tom dando clases virtuales"
    },
    {img: bioPic4,
        altEng: "Tom at a concert",
        altEsp: "Tom en un concierto"
    },
    {img: bioPic5,
        altEng: "Tom playing the classical nylon guitar",
        altEsp: "Tom tocando la guitarra clásica"
    },
    {img: bioPic6,
        altEng: "Tom wearing a hat and jacket",
        altEsp: "Tom con gorro y campera"
    }];

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
        <main className={`${classes.aboutMain} animated`}>
            <Heading
                logoAlt={["Footprints and sun kind-of-logo","Tipo de logo con un sol y huellas"]}
                insideAlt={["Footprints", "Huellas"]}
                insideSrc={footprints}
                h1={[englishBio[0], spanishBio[0]]}
                style={{transform: "rotate(29deg)", width:"50px"}}
            />
            <section className={classes.bio}>
                {language === "english" ? englishBio.map((text,index) => {
                    if (index > 0) {
                        return <section className={`${classes.bioPicContainer}`} key={text} >
                            <p >{textDisplay(text)}</p>
                            <img src={pictures[index-1].img} className={`${classes.bioPics} ${classes[`bioPic${index}`]}`} alt={pictures[index-1].altEng}></img>
                        </section>
                } else return null;
                }) : spanishBio.map((text,index) => {
                    if (index > 0) {
                        return <section className={`${classes.bioPicContainer}`} key={text} >
                            <p >{textDisplay(text)}</p>
                            <img src={pictures[index-1].img} className={`${classes.bioPics} ${classes[`bioPic${index}`]}`} alt={pictures[index-1].altEsp}></img>
                        </section>
                } else return null;
            })
                }

            </section>
        </main>
    )
}