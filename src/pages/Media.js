import HeaderNoLanding from "../components/Core/HeaderNoLanding";
import MainMedia from "../components/Media/MainMedia";

export default function Media () {
    return (
        <div className="mediaContainer">
            <HeaderNoLanding headerPage="mediaHeader" navType="noLanding"/>
            <MainMedia />
        </div>
    )
}