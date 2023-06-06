import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('Renders the Choose date form', () => {
    render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => console.log("")}/>);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('Tests the initialTimes function', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const button = screen.getByText("Reservations");
  fireEvent.click(button);
  const optionElement = screen.queryAllByRole("option");
  expect(optionElement).not.toBeNull();
});

test('Tests the updateTimes function', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const button = screen.getByText("Reservations");
  fireEvent.click(button);
  const dateInput = screen.getByLabelText("Choose date")
  console.log(new Date("08.06.2023"))
  fireEvent.change(dateInput, { target: { value: '2023-06-08'} });
  const expectedValues = ["17:00","17:30","18:00","18:30","19:00","19:30","20:30","21:30","22:00", "22:30", "23:00"];
  for (let element of expectedValues) {
    const optionElement = screen.getByText(element);
    expect(optionElement).toBeInTheDocument();
  };
});

test('Tests functionality of handleSubmit', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => {}} handleSubmit={handleSubmit}/>);
  const input = screen.getByLabelText("Choose date");
  fireEvent.change(input, { target: { value: '2023-06-08'} })
  const submitButton = screen.getByRole("button")
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalled();
});

test('Tests date functionality in form', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => {}} handleSubmit={handleSubmit}/>);
  const input = screen.getByLabelText("Choose date");
  fireEvent.change(input, { target: { value: null} });
  const timeInput = screen.getByLabelText("Choose time");
  fireEvent.change(timeInput, { target: { value: "17:00"} });
  const guestsInput = screen.getByLabelText("Number of guests");
  fireEvent.change(guestsInput, { target: { value: "10"} });
  const ocassionInput = screen.getByLabelText("Occasion");
  fireEvent.change(ocassionInput, { target: { value: "Birthday"} });
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});

test('Tests time functionality in form', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => {}} handleSubmit={handleSubmit}/>);
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: '2023-06-08'} })

  const input = screen.getByLabelText("Choose time");
  fireEvent.change(input, { target: { value: ""} })

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});

test('Tests guests functionality in form', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => {}} handleSubmit={handleSubmit}/>);
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: '2023-06-08'} })
  const input = screen.getByLabelText("Number of guests");
  fireEvent.change(input, { target: { value: "-1"} })
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});

test('Tests occassion functionality in form', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm availableTimes={["17:00","18:00","19:00","20:00","21:00","22:00"]} dispatch={() => {}} handleSubmit={handleSubmit}/>);
  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: '2023-06-08'} })
  const input = screen.getByLabelText("Occasion");
  fireEvent.change(input, { target: { value: "Funeral"} })
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");
});