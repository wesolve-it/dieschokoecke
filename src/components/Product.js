import React from 'react';

export default function Product({product}) {
  const { price, name, image, description } = product;

  return (
    <div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img class="h-96 w-full object-cover object-center" src={image} alt={name} />
      <div class="p-4">
        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">{description}</p>
        <div class="flex items-center">
          <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{price}</p>
          {/* <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p> */}
          {/* <p class="ml-auto text-base font-medium text-green-500">20% off</p> */}
        </div>
      </div>
    </div>
  )
}
