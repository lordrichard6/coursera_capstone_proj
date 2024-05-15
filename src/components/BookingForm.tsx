import { useEffect, FC, HTMLAttributes, Dispatch } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { submitAPI } from "../utils/temp";
import { useFormik } from "formik";
import * as Yup from "yup";

interface BookingFormProps extends HTMLAttributes<HTMLDivElement> {
    dispatch: Dispatch<{ type: string, date: Date }>;
    availableTimes: {
        times: string[];
    };
};

const BookingForm: FC<BookingFormProps> = ({ availableTimes, dispatch, ...props }): JSX.Element => {
    const navigate: NavigateFunction = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: (new Date()).toLocaleDateString("en-CA"),
            time: availableTimes.times[0],
            guests: 1,
            occasion: "birthday",
        },
        onSubmit: (values) => {
            const response: boolean = submitAPI(values);
            if (response) {
                localStorage.setItem("Bookings", JSON.stringify(values));
                navigate("/confirmation");
                // console.log(values);
            };
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Date is required"),
            time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
            guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
            occasion: Yup.string().oneOf(["birthday", "engagement", "anniversary"]).required("Occasion is required"),
        }),
    });

    useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
    }, [formik.values.date]);


    return (
        <section {...props} id="menu" className=" flex-centered flex-col min-h-[70vh]">
            <div className="text-slate-900 mb-10 mt-20">
                <h1>Book Now</h1>
            </div>
            <form className="flex flex-col bg-primary-color w-full lg:w-[600px] lg:min-h-[600px] py-6 lg:px-4 rounded-lg mb-10 lg:mb-0" onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" data-testid="res-date" id="res-date" {...formik.getFieldProps("date")} />
                <span className="form-message-error" data-testid="res-date-error">
                    {formik.touched.date && formik.errors.date}
                </span>
                <label htmlFor="res-time">Choose time</label>
                <select data-testid="res-time" id="res-time" {...formik.getFieldProps("time")}>
                    {availableTimes.times.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                <span className="form-message-error" data-testid="res-time-error">
                    {formik.touched.time && formik.errors.time}
                </span>
                <label htmlFor="guests">Number of guests</label>
                <input data-testid="guests" type="number" placeholder="1" min="1" max="10" id="guests" {...formik.getFieldProps("guests")} />
                <span className="form-message-error" data-testid="guests-error">
                    {formik.touched.guests && formik.errors.guests}
                </span>
                <label htmlFor="occasion">Occasion</label>
                <select data-testid="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
                    <option value="birthday" className="opt">Birthday</option>
                    <option value="engagement" className="opt">Engagement</option>
                    <option value="anniversary" className="opt">Anniversary</option>
                </select>
                <span className="form-message-error" data-testid="occasion-error">
                    {formik.touched.occasion && formik.errors.occasion}
                </span>
                <input className="bg-secondary-color mt-auto mb-0 cursor-pointer" data-testid="submit-btn" type="submit" value="Make Your reservation" />
            </form>

        </section>
    )
}

export default BookingForm