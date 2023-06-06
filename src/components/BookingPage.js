import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} handleSubmit={props.handleSubmit}/>
        </>
    );
};

export default BookingPage;