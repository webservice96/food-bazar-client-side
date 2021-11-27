import React from 'react';
import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom';
const subCategories = [
    { name: 'Cheese', href: '/meals/Cheese' },
    { name: 'Fish', href: '/meals/Fish' },
    { name: 'Meat', href: '/meals/Meat' },
    { name: 'Breakfast', href: '/meals/Breakfast' },
    { name: 'Cake', href: '/meals/Cake' },
];
const filters = [
    {
        id: 'countries',
        name: 'By Countries',
        options: [
            { name: 'American', to: '/country/American' },
            { name: 'British', to: '/country/British' },
            { name: 'Canadian', to: '/country/Canadian' },
            { name: 'Jamaican', to: '/country/Jamaican' },
            { name: 'Indian', to: '/country/Indian' },
            { name: 'French', to: '/country/French' },
            { name: 'Mexican', to: '/country/Mexican' },
            { name: 'Irish', to: '/country/Irish' },
            { name: 'Portuguese', to: '/country/Portuguese' },
            { name: 'Greek', to: '/country/Greek' },
            { name: 'Morocco', to: '/country/Moroccan' },
            { name: 'Polish', to: '/country/Polish' },
        ],
    },
    {
        id: 'ingredient',
        name: 'By Ingredient',
        options: [
            { name: 'Olive Oil', to: '/mealingredient/Olive_Oil' },
            { name: 'Courgettes', to: '/mealingredient/Courgettes' },
            { name: 'Milk', to: '/mealingredient/Milk' },
            { name: 'Celery', to: '/mealingredient/Celery' },
            { name: 'Sugar', to: '/mealingredient/Sugar' },
            { name: 'Passata', to: '/mealingredient/Passata' },
            { name: 'Tomatoes', to: '/mealingredient/Tomatoes' },
            { name: 'Dill', to: '/mealingredient/Dill' },
            { name: 'garlic', to: '/mealingredient/garlic' },
            { name: 'Salmon', to: '/mealingredient/Salmon' },
            { name: 'Raspberries', to: '/mealingredient/Raspberries' },
            { name: 'Blueberries', to: '/mealingredient/Blueberries' },
            { name: 'Butter', to: '/mealingredient/Butter' },
        ],
    },
];

const laterFilters = [
    {
        id: 'by_first_letter',
        name: 'By First Letter',
        options: [
            { name: 'A', to: '/mealfierst/a' },
            { name: 'B', to: '/mealfierst/b' },
            { name: 'C', to: '/mealfierst/c' },
            { name: 'D', to: '/mealfierst/d' },
            { name: 'E', to: '/mealfierst/e' },
            { name: 'F', to: '/mealfierst/f' },
            { name: 'G', to: '/mealfierst/g' },
            { name: 'H', to: '/mealfierst/h' },
            { name: 'I', to: '/mealfierst/i' },
            { name: 'J', to: '/mealfierst/j' },
            { name: 'K', to: '/mealfierst/k' },
            { name: 'L', to: '/mealfierst/l' },
            { name: 'M', to: '/mealfierst/m' },
            { name: 'N', to: '/mealfierst/n' },
            { name: 'O', to: '/mealfierst/o' },
            { name: 'P', to: '/mealfierst/p' },
            { name: 'R', to: '/mealfierst/r' },
            { name: 'S', to: '/mealfierst/s' },
            { name: 'T', to: '/mealfierst/t' },
            { name: 'V', to: '/mealfierst/v' },
            { name: 'W', to: '/mealfierst/w' },
            { name: 'Y', to: '/mealfierst/y' },
        ],
    }
]


const Sidebar = () => {
    return (
        <div className="md:col-span-3 xs:col-span-12 sm:col-span-12">
            <div className="bg-white p-4 shadow-md">
                {/* Filters */}
                <form className="">
                    <h3 className="sr-only">Categories</h3>
                    <ul className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                        {subCategories.map((category) => (
                            <li key={category.name}>
                                <NavLink to={category.href}>{category.name}</NavLink>
                            </li>
                        ))}
                    </ul>

                    {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                                <>
                                    <h3 className="-my-3 flow-root">
                                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900 font-bold">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                                {open ? (
                                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                        <div className="space-y-4">
                                            {section.options.map((option, optionIdx) => (
                                                <div key={option.name} className="flex items-center">
                                                    <NavLink to={option.to}>{option.name}</NavLink>
                                                </div>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}

                    {laterFilters.map((laterFilter) => (
                        <Disclosure as="div" key={laterFilter.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                                <>
                                    <h3 className="-my-3 flow-root">
                                        <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900 font-bold">{laterFilter.name}</span>
                                            <span className="ml-6 flex items-center">
                                                {open ? (
                                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                ) : (
                                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                                )}
                                            </span>
                                        </Disclosure.Button>
                                    </h3>
                                    <Disclosure.Panel className="pt-6">
                                        <div className="flex flex-wrap later-sec">
                                            {laterFilter.options.map((option, optionIdx) => (
                                                <div key={option.name} className="single-later h-8 w-8 bg-blue-600 hover:bg-blue-700 leading-8 ring-4 ring-indigo-300 shadow rounded-full text-center font-semibold text-white m-3">
                                                    <NavLink to={option.to} className="block">{option.name}</NavLink>
                                                </div>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Sidebar;