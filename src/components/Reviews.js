import React from 'react'
import Bild from '../assets/266.png'

export default function Reviews() {
  return (
    <div className='w-screen'>
      <img src={Bild} alt="Menschen die Kekse essen" className='lg:object-fill object-cover w-screen min-h-64 lg:h-96' />
      <div className='bg-bgBrown lg:pt-8 lg:text-center lg:px-60 lg:pb-12 2xl:px-96 px-6 pt-4 pb-6'>
        <div className='max-w-screen-xl'>
          <p className='lg:text-2xl text-left font-bold lg:font-normal mb-2 lg:mb-6'>Jeder Bissen ist ein Erlebnis. Die Texturen und Aromen sind gut ausbalanciert, was sie zur besten Schokolade macht</p>
          <p className='text-left font-light text-sm lg:text-base'>Michael R</p>
        </div>
      </div>
    </div>
  )
}
