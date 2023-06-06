import { useState } from "react";


function BookingForm(props) {

    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [occassion, setOccassion] = useState("Birthday");
    const [time, setTime] = useState("18:00");

    const validate = () => {
        let en = true;
        console.log(date);
        if (date === null | date === undefined | date === "") {
            en = false;
        }
        if (guests < 1 | guests > 10) {
            en = false;
        }
        if (!(occassion === "Birthday" | occassion === "Anniversary")) {
            en = false;
        }
        if (time.length !== 5) {
            en = false;
        }
        return en;
    };

    return (
        <>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={props.handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={e => {
                    setDate(e.target.value);
                    props.dispatch({ date: new Date(e.target.value) });
                }
                } />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={e => { setTime(e.target.value); }}>
                    {props.availableTimes.map(time => {
                        return <option key={time}>{time}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => { setGuests(e.target.value); }} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occassion} onChange={e => { setOccassion(e.target.value); }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" aria-label="On Click" disabled={!validate()} />
            </form>
        </>
    );
};

export default BookingForm;