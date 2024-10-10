import React from 'react';
import Product from '../components/Product';
import { chocolates } from '../data/chocolates';

export default function Products() {
  return (
    <div className='mt-12 mb-20'>
      <h1 className='max-w-screen-xl text-4xl mx-auto px-6'>Hier finden sie unsere Auswahl an leckeren Trüffeln</h1>
      <div className='max-w-screen-xl flex flex-row flex-wrap justify-start mx-auto gap-x-28 lg:gap-x-0'>
        {
          chocolates.map(chocolate => (
            <div className="w-full md:w-1/3 p-4" key={chocolate.name}>
              <Product product={chocolate} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
