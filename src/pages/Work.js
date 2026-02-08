import HeaderNoLanding from "../components/Core/HeaderNoLanding";
import MainWork from "../components/Work/MainWork";

export default function Work () {
    return (
        <div className="workContainer">
            <HeaderNoLanding headerPage="workHeader" navType="noLanding"/>
            <MainWork />
        </div>
    )
}