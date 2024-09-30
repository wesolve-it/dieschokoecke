import React from 'react'
import Bild from '../assets/266.png'

export default function Reviews() {
  return (
    <div>
      <img src={Bild} alt="Menschen die Kekse essen" />
      <div className='bg-bgBrown lg:pt-8 lg:text-center lg:px-60 lg:pb-12 2xl:px-96'>
        <p className='lg:text-2xl lg:text-left lg:mb-6'>Every bite is an experience. The textures and flavors are well-balanced, making it the best chocolate</p>
        <p className='lg:text-left lg:font-light'>Sophie L, Connoisseur</p>
      </div>
    </div>
  )
}
