import { FC, HTMLAttributes, useEffect, useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Button from "./Button";

const BookingConfirmation: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();
    const [booking, setBooking] = useState<{ name: string,date: string, time: string, guests: string, occasion: string }>();

    useEffect(() => {
        const booking = localStorage.getItem("Bookings");
        if (booking) {
            setBooking(JSON.parse(booking));
        };
    }, []);

    return (
        <section className="booking-comfirmation flex-centered min-h-[70vh]">
            <div className="section-width-default flex-centered flex-col mb-10 lg:mb-0">
                <div className="text-primary-color text-center mt-20 lg:mt-0">
                    <h1 className="text-5xl lg:text-6xl mb-6">Thank you for your reservation!</h1>
                    <h3 className="lead-txt text-2xl lg:text-3xl mb-10 lg:mb-20">We look forward to seeing you at Little Lemon.</h3>
                </div>
                {
                    booking &&
                    <div className="bg-primary-color flex flex-col py-6 px-10 rounded-lg text-2xl gap-4 mb-8">
                        <h2 className="text-2xl lg:text-4xl text-secondary-color font-semibold mb-4">Confirmation details</h2>
                        <span><strong>Name:</strong> {booking.name}</span>
                        <span><strong>Occasion:</strong> {booking.occasion}</span>
                        <span><strong>Guests:</strong> {booking.guests}</span>
                        <span><strong>Date:</strong> {booking.date}</span>
                        <span><strong>Time:</strong> {booking.time}</span>
                    </div>
                }
                <Button aria-label="Go back to the home page" onClick={() => navigate("/")}>Back to home</Button>
            </div>
        </section>
    )
}

export default BookingConfirmation