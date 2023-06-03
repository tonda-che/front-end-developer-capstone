import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Reserve from "./Reserve";
import { Route, Routes } from "react-router-dom";

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<><Hero /><Highlights /><Testimonials /><About /></>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/reserve" element={<Reserve />}/>
            </Routes>
        </main>
    );
};

export default Main;