import classes from "./HeaderNoLanding.module.css"
import Nav from "./Nav"

export default function HeaderNoLanding ({headerPage, navType}) {
    return (
        <header className={classes[headerPage]}>
            <Nav type={navType} />
        </header>
    )
};