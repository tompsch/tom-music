import HeaderNoLanding from "../components/Core/HeaderNoLanding";
import MainAbout from "../components/About/MainAbout";



export default function About () {
    return (
        <div className="aboutContainer">
            <HeaderNoLanding headerPage="aboutHeader" navType="noLanding"/>
            <MainAbout />
        </div>
    )
};