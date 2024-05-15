import { FC, HTMLAttributes } from "react";
import deliveryIcon from "../assets/deliveryIcon.svg";

interface FeaturedFoodCardProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
};

const FeaturedFoodCard: FC<FeaturedFoodCardProps> = ({ imageUrl, title, price, description, ...props }): JSX.Element => {

    return (
        <div className="flex flex-col justify-between w-[300px] min-h-[470px] h-fit bg-primary-color rounded-xl my-10 overflow-hidden" {...props}>
            <figure className="overflow-hidden">
                <img className="object-cover w-[300px] h-[200px] hover:scale-125 transition duration-300 delay-150 ease-in-out" src={imageUrl} />
            </figure>
            <div className="flex justify-between items-center px-6 mt-4 mb-2">
                <span className="title card-title text-2xl font-bold text-secondary-color">{title}</span>
                <span className="price highlight text-xl font-bold text-rose-300">$ {price}</span>
            </div>
            <p className="px-6 mb-4 text-lg leading-snug">
                {description}
            </p>
            <div className="px-6 mb-6 flex justify-center">
                <button className="order-btn highlight flex justify-center items-center">Order a delivery <img className="h-6 ml-4" src={deliveryIcon} alt="Delivery" /></button>
            </div>
        </div>
    );
};

export default FeaturedFoodCard;