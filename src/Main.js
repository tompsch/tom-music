import wapp from './assets/wapp.png';
import arrow from './assets/downArrow2.png';
import { useLanguage } from './context/LangContext';
import { useRef } from 'react';

function Main () {
const {language, setLanguage} = useLanguage();

const arrowRefOne = useRef(null);
const arrowRefTwo = useRef(null);

// const arrowElement = document.getElementById('arrows'); 
const handleClick = (to) => {
    // console.log("Hola");
    to.current.scrollIntoView({behavior: 'smooth'});
};

return (
<main>
        <a onClick={() => handleClick(arrowRefOne)} ref={arrowRefOne}><img src={arrow} className="arrow" /></a>
        <div className="lessons" > 
            
            <p key={language=="english" ? "stateOne" : "stateTwo"} id="want">{language=="english" ? "want some" : "¿querés unas"}</p>
            <p key={language=="english" ? "stateThree" : "stateFour"} id="lesson">{language=="english" ? "lessons?" : "clases?"}</p>
            <a>
                <img id="wapp" src={wapp} onClick={() => {language=="english" ? alert("Heading out to external link") : alert("Saliendo del sitio")}} />
            </a>
            <p key={language=="english" ? "stateFive" : "stateSix"} id="reachMe">{language=="english" ? "reach me out for more information" : "contáctame para más información"}</p>
        </div>
        <a onClick={() => handleClick(arrowRefTwo)} ref={arrowRefTwo}><img src={arrow} className="arrow" /></a>  
</main>
);
}



export default Main;