import React from 'react'
import Truffel from '../assets/truffel.svg';

export default function Products() {
  return (
    <div>
      <div>
        <h2 className='text-4xl text-center'>Crafting Quality with Every Detail</h2>
        <p>We believe in the art of chocolate making. What started as a small family business has grown into a brand loved by chocolate enthusiasts worldwide. Our dedication to quality, sustainability, and innovation sets us apart. From bean to bar, we take pride in every step of the process.</p>
        <button className='rounded-full py-2 px-4 bg-chocolateBrown text-textBrown font-light'>Explore our chocolates</button>
      </div>
      <div>
        <img src={Truffel} alt="Trüffel" />
      </div>
    </div>
  )
}
