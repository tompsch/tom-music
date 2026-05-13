import Heading from "../Core/Heading"
import classes from "./MainContact.module.css"
import contact from "../../assets/contact_us.svg"
import { useLanguage } from "../../context/LangContext"

export default function MainContact () {
    return (
        <main className={`${classes.contactMain} animated`}>
            <Heading logoAlt={["Chat bubble and sun kind-of-logo","Tipo de logo con un sol y un globo de diálogo"]}
            insideAlt={["Chat bubble icon", "Un globo de diálogo"]}
            insideSrc={contact}
            style={{transform: "translate(2px,2px)"}}
            h1={["Contact", "Contacto"]}/>
            <form>
                <label htmlFor="name">{useLanguage().language === "english" ? "Name" : "Nombre"}</label>
                <input type="text" id="name" name="name" required></input>

                <label htmlFor="email">{useLanguage().language === "english" ? "Email" : "Correo electrónico"}</label>
                <input type="email" id="email" name="email" required></input>

                <label htmlFor="message">{useLanguage().language === "english" ? "Message" : "Mensaje"}</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">{useLanguage().language === "english" ? "Send Message" : "Enviar mensaje"}</button>
            </form>
        </main>
)}