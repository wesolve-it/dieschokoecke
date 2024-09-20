import React from 'react'
import Chocolate from '../assets/chocolateOne.svg';

export default function Hero() {
  return (
    <div className='bg-gray-900 text-white py-10'>
      <h1 className='text-center text-4xl'>Indulge <span className='italic font-light'>Finest</span></h1>
      <div>
        <h2 className='text-center text-3xl font-light'>Handcrafted Chocolates</h2>
        <h3 className='text-center'>Pure Delight in Every Bite - From Our Factory to Your Doorstep</h3>
      </div>
      <div>
        <img src={Chocolate} alt="Schokolade" className='h-80 mx-auto mt-10' />
      </div>
    </div>
  )
}
