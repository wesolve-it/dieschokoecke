import React from 'react'
import Chocolate from '../assets/chocolateOne.svg';

export default function Hero() {
  return (
    <div className='bg-gray-900 text-white py-10 lg:pt-16'>
      <h1 className='text-center text-4xl lg:text-8xl'>Indulge <span className='italic font-light font-serif'>Finest</span></h1>
      <div className='lg:flex'>
        <div className='lg:flex-1'>
          <h2 className='text-center text-3xl font-light lg:text-8xl lg:font-extralight lg:mx-10 lg:text-right lg:mt-10'>Handcrafted Chocolates</h2>
          <h3 className='text-center lg:ml-80 lg:mr-10 lg:mt-5 lg:font-light'>Pure Delight in Every Bite - From Our Factory to Your Doorstep</h3>
        </div>
        <div className='lg:flex-1'>
          <img src={Chocolate} alt="Schokolade" className='h-80 mx-auto mt-10 lg:h-96 lg:-mb-44' />
        </div>
      </div>
    </div>
  )
}
