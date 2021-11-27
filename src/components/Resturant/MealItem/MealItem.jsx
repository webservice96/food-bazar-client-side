import React from 'react';
import { Link } from 'react-router-dom';
import './MealItem.css';
const MealItem = ({ product }) => {
    const { strMeal, strMealThumb, strInstructions } = product;
    const singleLink = `/meal/${strMeal.replace(/ /g, '-').toLowerCase()}`;
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <Link to={singleLink}>
                <img className="rounded-t-lg" src={strMealThumb} alt="Thumbnail not found!" />
            </Link>
            <div className="p-5">
                <Link to={singleLink}>
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{strMeal.slice(0, 25)} ...</h5>
                </Link>

                {strInstructions && (
                    <>
                        <p className="font-normal text-gray-700 mb-3 meal-desc">
                            {
                                strInstructions.slice(0, 120) + ' [...]'
                            }
                        </p>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>

                            </button>
                            <button
                                type="button"
                                className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform mx-5"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MealItem;