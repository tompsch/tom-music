import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const ScrollContext = createContext(undefined);

export const ScrollProvider = ({children}) => {
    const [scrollY, setScrollY] = useState(window.scrollY);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    return (
        <ScrollContext.Provider value={scrollY}>
            {children}
        </ScrollContext.Provider>
);

};



export const useScroll = () => useContext(ScrollContext);

