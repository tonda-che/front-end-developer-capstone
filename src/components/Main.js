import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/API";

function Main() {

    const updateTimes = (state, action) => {
        const data = fetchAPI(action.date);
        return data;
    }
    const initializeTimes = () => {
        const data = fetchAPI(new Date());
        return data;
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitAPI();
        navigate("confirmed");
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <Routes>
                <Route path="/" element={<><Hero /><Highlights /><Testimonials /><About /></>} />
                <Route path="/about" element={<About />} />
                <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} />} />
                <Route path="/menu" element={<Highlights />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
};

export default Main;