import React from 'react'
import Bild from '../assets/266.png'

export default function Reviews() {
  return (
    <div>
      <img src={Bild} alt="Menschen die Kekse essen" />
      <div className='bg-bgBrown'>
        <p>Every bite is an experience. The textures and flavors are well-balanced, making it the best chocolate</p>
        <p>Sophie L, Connoisseur</p>
      </div>
    </div>
  )
}
