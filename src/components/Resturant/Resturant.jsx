import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealItem from './MealItem/MealItem';

const Resturant = () => {
    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true);

    /* set url dynamically */
    let { mealName, ingredient, mealcountry, meallater } = useParams();
    let URL = `https://www.themealdb.com/api/json/v1/1/search.php?s`;
    if (mealName) {
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    } else if (ingredient) {
        URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    } else if (mealcountry) {
        URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealcountry}`;
    } else if (meallater) {
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${meallater}`;
    }

    const fetchProducts = () => {
        axios.get(URL)
            .then((res) => {
                setProducts(res.data.meals);
                setProductLoading(false);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchProducts();
    }, [products]);

    if (productLoading) {
        return (
            <div className="flex justify-center items-center">
                <div
                    className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                ></div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                products.map(product => <MealItem key={product.idMeal} product={product} />)
            }
        </div>
    );
};

export default Resturant;