import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='flex justify-center items-center'>
            <a href="/">
                <img className="p-8 rounded-t-lg text-center" src="data:image/png;base64,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" alt="product_image1" />
            </a>
            </div>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
