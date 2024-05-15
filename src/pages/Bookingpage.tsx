import { useReducer, FC } from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../utils/temp";

const Bookingpage: FC = (): JSX.Element => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  
  return (
    <div className="section-width-default mx-auto">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </div>
  )
}

export default Bookingpage