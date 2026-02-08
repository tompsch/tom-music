import Header from "../components/Landing/Header"
import Main from "../components/Landing/Main"
import Footer from "../components/Landing/Footer"

export default function Landing ({firstMount}) {
    return (
    <div className={`landingContainer ${firstMount && "animated"}`}>
        <Header firstMount={firstMount}/>
        <Main />
        <Footer />
    </div>
    )
}