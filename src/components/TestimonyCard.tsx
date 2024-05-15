import { FC, HTMLAttributes } from "react";

interface TestimonyCardProps extends HTMLAttributes<HTMLDivElement> {
    rating: number;
    customerImg: string;
    customerName: string;
    testimonial: string;
};

const TestimonyCard: FC<TestimonyCardProps> = ({
    rating,
    customerImg,
    customerName,
    testimonial,
    ...props
}): JSX.Element => {
    const stars: { [key: number]: string } = {
        1: "★☆☆☆☆",
        2: "★★☆☆☆",
        3: "★★★☆☆",
        4: "★★★★☆",
        5: "★★★★★",
    };

    return (
        <div className="bg-slate-50 text-slate-900 lg:w-[200px] rounded-2xl flex flex-col justify-start items-center px-4 py-6 text-center drop-shadow-md hover:drop-shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out delay-150 z-0" {...props}>
            <span className="text-primary-color text-2xl mb-2">
                {stars[rating]}
            </span>
            <span>
                <img src={customerImg} alt={customerName} />
                <span className="highlight text-2xl font-bold">{customerName}</span>
            </span>
            <p className="highlight text-base font-light leading-snug mt-2">
                {testimonial}
            </p>
        </div>
    );
};

export default TestimonyCard;