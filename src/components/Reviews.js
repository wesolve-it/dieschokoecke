import React from 'react'
import Bild from '../assets/266.png'

export default function Reviews() {
  return (
    <div>
      <img src={Bild} alt="Menschen die Kekse essen" />
      <div className='bg-bgBrown lg:pt-8 lg:text-center lg:px-60 lg:pb-12 2xl:px-96 px-6 pt-4 pb-6'>
        <p className='lg:text-2xl text-left font-bold lg:font-normal mb-2 lg:mb-6'>Every bite is an experience. The textures and flavors are well-balanced, making it the best chocolate</p>
        <p className='text-left font-light text-sm lg:text-base'>Sophie L, Connoisseur</p>
      </div>
    </div>
  )
}
