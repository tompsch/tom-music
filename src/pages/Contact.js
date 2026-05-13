import HeaderNoLanding from "../components/Core/HeaderNoLanding";
import MainContact from "../components/Contact/MainContact";

export default function Contact () {
    return (
        <div className="contactContainer">
            <HeaderNoLanding headerPage="contactHeader" navType="noLanding"/>
            <MainContact />
        </div>
    )
};