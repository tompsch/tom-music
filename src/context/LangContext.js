import { createContext, useContext } from "react";
import { useState } from "react";


const LangContext = createContext({language:"english", setLanguage: () => {}});

const browserLang = navigator.language === "es-ES" ? "spanish" : "english";

export const LangProvider = ({children}) => {

    const [language,setLanguage] = useState(browserLang);

    return (
        <LangContext.Provider value={{language,setLanguage}}>
            {children}
        </LangContext.Provider>
);

};



export const useLanguage = () => useContext(LangContext);