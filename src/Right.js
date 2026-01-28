
import Nav from "./Nav";
import LangSelector from './LangSelector';
import { useLanguage } from "./context/LangContext";

function Right () {
const {language, setLanguage} = useLanguage();
console.log(language);
    return (
    <div className="right">
            <Nav key={language} />
            <LangSelector />
            
    </div>
)
}

export default Right;