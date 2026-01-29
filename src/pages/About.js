import { useLanguage } from "../context/LangContext"
import Nav from "../components/Landing/Nav"



export default function About () {
    const language = useLanguage();
    return (
        <aside>
            <Nav orientation={"vertical"} />
        </aside>
    // <aside className="background" style={{
    //     width: "auto",
    //     height: "100svh",
    //     backgroundColor: "bisque",
    //     display: "flex",
    //     justifyContent: "space-between",
    // }}>
    //     <div className="block" style={{width: "70vw"}}>
    //         <h1>About me</h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aut modi cum nobis nam at,
    //             fugit minima obcaecati earum dolor laborum consectetur asperiores laudantium voluptatem
    //             voluptatibus necessitatibus nesciunt, vero fuga.</p>
    //         <h1>Music</h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aut modi cum nobis nam at,
    //             fugit minima obcaecati earum dolor laborum consectetur asperiores laudantium voluptatem
    //             voluptatibus necessitatibus nesciunt, vero fuga.</p>
    //         <h1>Co</h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aut modi cum nobis nam at,
    //             fugit minima obcaecati earum dolor laborum consectetur asperiores laudantium voluptatem
    //             voluptatibus necessitatibus nesciunt, vero fuga.</p>
    //     </div> 
        
    //     <Nav style={{
    //         flexDirection: "column",
    //         alignContent: "flex-end",
    //         margin: "0",
    //         height: "478px",
    //     }}/>
    // </aside>
    )
};