import { createContext, useContext } from "react";
import { useState } from "react";


const LangContext = createContext({language:"english", setLanguage: () => {}});

export const LangProvider = ({children}) => {
    
    const [language,setLanguage] = useState("english");    

    return (
        <LangContext.Provider value={{language,setLanguage}}>
            {children}
        </LangContext.Provider>
);

};



export const useLanguage = () => useContext(LangContext);