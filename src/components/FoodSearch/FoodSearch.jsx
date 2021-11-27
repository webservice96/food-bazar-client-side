import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function FoodSearch() {
    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    const fetchProducts = () => {
        axios.get('http://localhost:4000/meals')
            .then((res) => {
                setProducts(res.data);
                setProductLoading(false);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchProducts();
    }, [products]);
    return (
        <>
            {/* start seach box */}
            <div className=" bg-gray-100 flex justify-center items-center">
                <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
                    <form>
                        <h1 className="text-center mb-4 font-bold text-white text-4xl">Find your meals</h1>
                        <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                            <input className="border-none focus:outline-none border-transparent text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search your domain name" />
                            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                                <button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* end seach box */}

            {/* start product */}
        </>
    )
}
