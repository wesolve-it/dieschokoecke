import React from 'react'
import Truffel from '../assets/truffel.svg';

export default function Products() {
  return (
    <div className='max-w-screen-xl mx-auto px-6 xl:px-0 mt-12 xl:mt-0'>
      <div className='lg:mt-24 lg:flex-row-reverse lg:flex'>
        <div className='lg:flex-1 lg:my-auto'>
          <h2 className='text-4xl text-center mb-6 lg:text-6xl lg:text-left font-extralight leading-snug'>Crafting Quality <span className='text-xl lg:text-3xl'>With</span> <span className='font-serif'>Every Detail</span></h2>
          <p className='mb-6 leading-7 font-light'>We believe in the art of chocolate making. What started as a small family business has grown into a brand loved by chocolate enthusiasts worldwide. Our dedication to quality, sustainability, and innovation sets us apart. From bean to bar, we take pride in every step of the process.</p>
          <section className='text-center'>
            <button className='rounded-full py-2 px-4 bg-chocolateBrown text-textBrown font-light uppercase'>Explore our chocolates</button>
          </section>
        </div>
      <div className='lg:flex-1'>
        <img src={Truffel} alt="Trüffel" className='lg:h-auto lg:mr-20 lg:shadow-l' />
      </div>
      </div>
    </div>
  )
}
