import { useState, useRef, useEffect, FC, HTMLAttributes } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import restaurant_food from "../assets/restaurantfood.jpg";
import Button from "../components/Button";


const Home: FC<HTMLAttributes<HTMLElement>> = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className='w-full flex flex-col items-center'>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </div>
      <div>
        <img className="w-[300px]" src={restaurant_food} alt="Restaurant Food" />
      </div>
    </div>
  )
}

export default Home