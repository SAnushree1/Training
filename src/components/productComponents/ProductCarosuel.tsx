import React, { useState } from "react";

interface ProductCarosuelProps {
    images: string[];
}

const ProductCarosuel: React.FC<ProductCarosuelProps> = ({ images }) => {

    const [current, setCurrent] = useState<number>(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % length);
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + length) % length);
    }

    return (
        <div className=" relative overflow-hidden w-full bg-white rounded p-5">
            <div className="flex transition-transform duration-700 ease-in-out "
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="flex-none w-full flex items-center justify-center">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-60 h-60 object-cover m-10"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-5/12 mx-10"
            >
                <img src="/assets/leftarrow.png" alt="left arrow" className="cursor-pointer" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-5/12 mx-10"
            >
                <img src="/assets/rightarrow.png" alt="right arrow" className="cursor-pointer" />
            </button>

            <div className="flex justify-center gap-2">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setCurrent(index)}
                        className={`w-13 h-12 rounded border-2 cursor-pointer ${current === index ? "border-red-300" : "border-transparent"}`}
                    />
                ))}
            </div>
        </div>
    )
};

export default ProductCarosuel;
