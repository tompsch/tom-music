import HeaderNoLanding from "../components/Core/HeaderNoLanding";
import { Outlet } from "react-router";

export default function Contact () {
    return (
        <div className="contactContainer">
            <HeaderNoLanding headerPage="contactHeader" navType="noLanding"/>
            <Outlet />
        </div>
    )
};