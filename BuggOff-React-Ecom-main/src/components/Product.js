import React from 'react';
import image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating,setRating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime,setHasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="flex flex-rowfhf items-end flex-wrap w-80 bg-white rounded-lg shadow-lg overflow-hidden p-3 ">
            <div className="pb-3">
                <img src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <p className="text-gray-500 uppercase text-xs mb-1">{category}</p>
                <h2 className="text-lg font-medium mb-1">{title}</h2>
                <div className="flex items-center mb-1">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-yellow-100" />
                        ))}
                </div>
                <p className="text-gray-500 text-sm mb-2 line-clamp-3">{description}</p>
                <div className="flex items-center mb-2">
                    <Currency quantity={price+800} currency="INR" />
                    
                </div>
                <button className="bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
