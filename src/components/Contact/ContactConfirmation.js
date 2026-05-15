import Heading from "../Core/Heading"
import classes from "./MainContact.module.css"
import contact from "../../assets/contact_us.png"
import { Link } from "react-router"

export default function ContactConfirmation () {
    return (
        <main className={`${classes.contactMain} animated`}>
            <Heading logoAlt={["Chat bubble and sun kind-of-logo","Tipo de logo con un sol y un globo de diálogo"]}
            insideAlt={["Chat bubble icon", "Un globo de diálogo"]}
            insideSrc={contact}
            style={{transform: "translate(2px,2px)"}}
            h1={["Contact", "Contacto"]}/>
            <div className={classes.confirmation}>
                <h2>Thank you for your message!</h2>
                <h3>I will get back to you shortly</h3>
                <Link to="/">HOME</Link>
            </div>
        </main>
    )
}