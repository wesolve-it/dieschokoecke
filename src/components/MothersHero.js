import React from 'react';
import { Element } from 'react-scroll';
import Flowers from '../assets/flowers.png';

export default function MothersHero() {
  return (
    <Element className='bg-mothersGreen text-gray-500 py-10 lg:pt-16' id="home" name="home">
          <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
          <h1 className='text-center text-4xl lg:text-8xl'>Muttertagsaktion <span className='italic font-light font-serif'>30%</span></h1>
          <div className='lg:flex'>
            <div className='lg:flex-1'>
              <h2 className='text-center text-3xl font-light lg:text-8xl lg:font-extralight lg:text-right mt-6 lg:mt-10'>Auf eine Auswahl an Trüffel</h2>
              <h3 className='text-center lg:ml-80 mt-2 lg:mt-5 font-light lg:text-right'>Wegen der wärmeren Temperaturen haben wir ab dem 24.4 bis einschließlich 30.4 <br></br> 30% auf alle Trüffel, außer auf Kakao-Trüffel.</h3>
            </div>
            <div className='lg:flex-1'>
              <img src={Flowers} alt="Schokolade" className='mx-auto h-80 lg:h-auto lg:-mb-96' />
            </div>
          </div>
          </div>
        </Element>
  )
}
