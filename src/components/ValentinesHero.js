import React from 'react'
import ValentinesHeart from '../assets/pngtree-valentines-day-with-flowers-and-heart-transparent-background-png-image_14979836-Photoroom.png';
import { Element } from 'react-scroll';

export default function ValentinesHero() {
  return (
    <Element className='bg-valentinesPink text-gray-500 py-10 lg:pt-16' id="home" name="home">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
      <h1 className='text-center text-4xl lg:text-8xl'>Valentinstag <span className='italic font-light font-serif'>is coming</span></h1>
      <div className='lg:flex'>
        <div className='lg:flex-1'>
          <h2 className='text-center text-3xl font-light lg:text-8xl lg:font-extralight lg:text-right mt-6 lg:mt-10'>Eine Rose zu jeder Bestellung</h2>
          <h3 className='text-center lg:ml-80 mt-2 lg:mt-5 font-light lg:text-right'>Bei jeder Bestellung bis 13. Februar 2025. <br></br>Teile mir einen Grußtext für Deine Liebsten mit und ich liefere Deine Bestellung zu Deiner Herzensperson! </h3>
        </div>
        <div className='lg:flex-1'>
          <img src={ValentinesHeart} alt="Schokolade" className='mx-auto h-80 lg:h-auto lg:-mb-96' />
        </div>
      </div>
      </div>
    </Element>
  )
}
