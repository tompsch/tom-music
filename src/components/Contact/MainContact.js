import Heading from "../Core/Heading"
import classes from "./MainContact.module.css"
import contact from "../../assets/contact_us.svg"
import { useLanguage } from "../../context/LangContext"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"

export default function MainContact () {
    const lang = useLanguage();

    const errors = {
        en:["Please enter a valid name","Maximum 30 characters", "Numbers are not allowed in this field", "Required", "Please enter a valid email", "Please enter at least 20 characters","1500 characters maximum. Need more space? Send me an email!"],
        es:["Por favor ingrese un nombre válido","Máximo 30 caracteres", "Números no admitidos en este campo", "Requerido", "Por favor ingrese un correo electrónico válido", "Por favor, al menos 20 caracteres","1500 caracteres máximo. ¿Necesitás más espacio? ¡Mándame un email!"],
    };

    const formValidation =
            Yup.object().shape({
            name: Yup.string().min(2,
            useLanguage().language === "english" ? errors.en[0] : errors.es[0]).max(30,
            useLanguage().language === "english" ? errors.en[1] : errors.es[1]).matches(/^[^0-9]+$/,
            useLanguage().language === "english" ? errors.en[2] : errors.es[2]).required(
            useLanguage().language === "english" ? errors.en[3] : errors.es[3]),
        email: Yup.string().email(useLanguage().language === "english" ? errors.en[4] : errors.es[4]).required(useLanguage().language === "english" ? errors.en[3] : errors.es[3]),
        message: Yup.string().min(20,useLanguage().language === "english" ? errors.en[5] : errors.es[5]).max(1500,useLanguage().language === "english" ? errors.en[6] : errors.es[6]).required(useLanguage().language === "english" ? errors.en[3] : errors.es[3]),
    })
    const navigate = useNavigate();
    const textRef = useRef(null);
    const formik = useFormik({
        initialValues: {name:"",email:"",message:""},
        validationSchema: formValidation,
        onSubmit: () =>{}
    });
    const netlifySubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then((response) => {
            if (!response.ok) throw new Error('Oops! Form submission failed. Try again!')
            navigate("confirmation")})
        .catch(error => alert(error));
    }

     useEffect(()=>{
        if(!formik) {return}
        (formik.errors.name && formik.touched.name) && formik.setFieldTouched("name",true);
        (formik.errors.email && formik.touched.email) && formik.setFieldTouched("email",true);
        (formik.errors.message && formik.touched.message) && formik.setFieldTouched("message",true);
        }
    ,[lang])
    useEffect(()=>{
        if(textRef.current) {
            textRef.current.style.height = "auto";
            textRef.current.style.height = `${textRef.current.scrollHeight}px`;
        }
    },[formik.values.message])

    return (
        <main className={`${classes.contactMain} animated`}>
            <Heading logoAlt={["Chat bubble and sun kind-of-logo","Tipo de logo con un sol y un globo de diálogo"]}
            insideAlt={["Chat bubble icon", "Un globo de diálogo"]}
            insideSrc={contact}
            style={{transform: "translate(2px,2px)"}}
            h1={["Contact", "Contacto"]}/>

            <form onSubmit={netlifySubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p className={classes.hidden}>
                    <label>
                    Don not fill this out if you are human: <input name="bot-field" type="text" />
                    </label>
                </p>
                <label htmlFor="name">{useLanguage().language === "english" ? "Name" : "Nombre"}</label>
                <input
                    id="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && <div className={classes.error}>{formik.errors.name}</div>}

                <label htmlFor="email">{useLanguage().language === "english" ? "Email" : "Correo electrónico"}</label>
                <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}

                />
                {formik.touched.email && formik.errors.email && <div className={classes.error}>{formik.errors.email}</div>}

                <label htmlFor="message">{useLanguage().language === "english" ? "Message" : "Mensaje"}</label>
                <textarea
                    id="message"
                    ref={textRef}
                    maxLength={1501}
                    {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && <div className={classes.error}>{formik.errors.message}</div>}
                <button disabled={!formik.dirty || !formik.isValid} type="submit">{useLanguage().language === "english" ? "Send Message" : "Enviar mensaje"}</button>

            </form>
        </main>
)}
