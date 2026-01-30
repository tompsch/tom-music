import { useLanguage } from "../context/LangContext"
import HeaderNoLanding from "../components/About/HeaderNoLanding";
import MainAbout from "../components/About/MainAbout";



export default function About () {
    const { language } = useLanguage();
    return (
        <div className="aboutContainer">
            <HeaderNoLanding headerPage="aboutHeader" navType="noLanding"/>
            <MainAbout />
        </div>
    )
};