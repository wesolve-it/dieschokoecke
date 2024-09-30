import React from 'react'
import Truffel from '../assets/truffel.svg';

export default function Products() {
  return (
    <div>
      <div className='lg:mt-24 lg:flex-row-reverse lg:flex lg:mx-32'>
        <div className='lg:flex-1 lg:my-auto'>
        <h2 className='text-4xl text-center lg:mb-6 lg:text-6xl lg:text-left lg:font-extralight lg:leading-snug'>Crafting Quality <span className='lg:text-3xl'>With</span> <span className='lg:font-serif'>Every Detail</span></h2>
        <p className='lg:mb-6 lg:leading-7'>We believe in the art of chocolate making. What started as a small family business has grown into a brand loved by chocolate enthusiasts worldwide. Our dedication to quality, sustainability, and innovation sets us apart. From bean to bar, we take pride in every step of the process.</p>
        <button className='rounded-full py-2 px-4 bg-chocolateBrown text-textBrown font-light lg:uppercase'>Explore our chocolates</button>
        </div>
      <div className='lg:flex-1'>
        <img src={Truffel} alt="Trüffel" className='lg:h-auto lg:mr-20 lg:shadow-l' />
      </div>
      </div>
    </div>
  )
}
