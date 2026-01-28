import foto from './assets/fotoFooter.jpg'
import scrollUp from './assets/downArrow.webp'
import { useEffect, useState } from 'react';
import { useScroll } from "./context/ScrollContext";

export default function Footer () {

    const scrollY = useScroll();
    const [isVisible,setIsVisible] = useState(false);

    useEffect(()=>
    {
        if (scrollY > 400) {
            console.log("ahora si");
            setIsVisible(true);
        } else {
            console.log("ahora no");
            setIsVisible(false);
        }
        
        
    }, [scrollY])

    
    const handleClick = () => alert("Going out to login");

    const scrollUpFunction = () => window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    return (
        <footer className="footer">
            <button className="login" onClick={handleClick}>Student <br></br>Login</button>
            <img className= {isVisible ? "scrollUp visible" : "scrollUp"} src={scrollUp} onClick={scrollUpFunction}></img>
            
            <p className="copyright">Copyright Maddox® 2025</p>
            
            <div className="fotoFooterContainer">
                <div className="topWhite"></div>
                <div className="bottomBlack"></div>
                <img src={foto} className="fotoFooter"/>
            </div>
        </footer>
    )
};