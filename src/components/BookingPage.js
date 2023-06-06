import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <div id="booking">
            <h4>To reserve a table please use our booking system</h4>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} handleSubmit={props.handleSubmit}/>
        </div>
    );
};

export default BookingPage;