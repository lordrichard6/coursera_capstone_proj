import { useState, useRef, useEffect, FC, HTMLAttributes } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import restaurant_food from "../assets/restaurantfood.jpeg";
import Button from "../components/Button";
import FeaturedFoodCard from "../components/FeaturedFoodCard";

import greekSalad from "../assets/greekSalad.jpg";
import bruchetta from "../assets/bruchetta.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import TestimonyCard from "../components/TestimonyCard";
import test01 from "../assets/test01.png";
import test02 from "../assets/test02.png";
import test03 from "../assets/test03.png";
import test04 from "../assets/test04.png";
import chef01 from "../assets/chef01.jpg";
import chef02 from "../assets/chef02.jpg";

const featuredDishes = [
  {
    img: greekSalad,
    title: "Greek Salad",
    price: 11.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
  },
  {
    img: bruchetta,
    title: "Bruchetta",
    price: 8.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
  },
  {
    img: lemonDessert,
    title: "Lemon Dessert",
    price: 6.99,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]

const testimonies = [
  {
    rating: 5,
    customerImg: test01,
    customerName: "Jørgen",
    testimonial: "Every bite at your restaurant feels like a love letter to my taste buds! From the tantalizing aromas that greet me at the door to the last lingering flavor, dining here is an unforgettable experience.",
  },
  {
    rating: 4,
    customerImg: test02,
    customerName: "Marco",
    testimonial: "Your restaurant isn't just a place to eat; it's a sanctuary for food enthusiasts like me. Each dish is crafted with passion and precision, turning ordinary meals into extraordinary culinary adventures. Dining here is a celebration of flavor and creativity!",
  },
  {
    rating: 3,
    customerImg: test03,
    customerName: "Gabriela",
    testimonial: "Stepping into your restaurant is like entering a portal to gastronomic paradise! The ambiance, the service, and, above all, the food, create an atmosphere of pure delight. You've mastered the art of culinary bliss, and I'm grateful to be a part of it.",
  },
  {
    rating: 5,
    customerImg: test04,
    customerName: "Mary",
    testimonial: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
  },
]


const Home: FC<HTMLAttributes<HTMLElement>> = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <section className='header-container w-full min-h-[400px] flex-centered bg-primary-color mt-20'>
        <div className="section-width-default flex flex-col lg:flex-row justify-between py-10">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-secondary-color text-6xl font-black mb-4">Little Lemon</h1>
            <h2 className="text-3xl font-black mb-8">Zurich</h2>
            <p className="lead-txt text-center lg:text-left text-xl max-w-[360px] mb-8">
              We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
          </div>
          <div>
            <img className="w-[400px] h-[400px] object-cover rounded-lg mt-10 lg:mt-0 -mb-20" src={restaurant_food} alt="Restaurant Food" />
          </div>
        </div>
      </section>
      <section id="menu" className="featured-container flex-centered w-full py-10 lg:py-20">
        <div className="section-width-default mt-20">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between">
            <h1 className="text-slate-900 font-black text-center mb-10 lg:mb-0">This weeks specials!</h1>
            <Button>Online Menu</Button>
          </div>
          <div className="cards flex justify-center items-center lg:justify-between flex-col lg:flex-row">
            {featuredDishes.map((dish) => {
              return (
                <FeaturedFoodCard
                  key={dish.title}
                  imageUrl={dish.img}
                  title={dish.title}
                  price={dish.price}
                  description={dish.description}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="testimony-container flex-centered w-full bg-secondary-color min-h-[50vh] py-10 lg:py-20">
        <div className="section-width-default">
          <div className="">
            <h2 className="text-4xl text-primary-color font-extrabold text-center mb-10 lg:mb-20">What ours customers say!</h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {testimonies.map((customer) => {
              return (
                <TestimonyCard
                  rating={customer.rating}
                  customerImg={customer.customerImg}
                  customerName={customer.customerName}
                  testimonial={customer.testimonial}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section id="about" className="about-container flex-centered w-full text-slate-900 py-10 lg:py-40">
        <div className="section-width-default flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 h-full lg:pr-40 mb-16 lg:mb-0">
            <h1 className="text-secondary-color text-6xl font-extrabold">Little Lemon</h1>
            <h2 className="text-primary-color text-4xl font-extrabold text-center">Zurich</h2>
            <div className="mt-10 text-lg">
              <p className="lead-txt">
                In the heart of the picturesque Zurich, nestled between on the highest tower, two culinary visionaries, Hans and Liam, embarked on a journey to bring their gastronomic dreams to life.
              </p>
              <br />
              <p className="lead-txt">
                Hans, with his meticulous attention to detail and a deep-rooted passion for Swiss culinary traditions, and Liam, with his daring flair for innovation and love for global flavors, were an unlikely yet perfect pair. They shared a common dream: to create a restaurant that would not only tantalize taste buds but also awaken souls.
              </p>
            </div>
          </div>
          <figure className="flex relative w-full lg:w-1/2 h-auto">
            <img className="w-[140px] h-[200px] lg:w-[300px] lg:h-[400px] -mb-20 ml-10 lg:ml-0 object-cover rounded-xl object-right" src={chef01} alt="chef" />
            <img className="w-[140px] h-[200px] lg:w-[300px] lg:h-[400px] absolute -top-10 right-10 object-cover rounded-xl" src={chef02} alt="chef" />
          </figure>
        </div>
      </section>
    </>
  )
}

export default Home