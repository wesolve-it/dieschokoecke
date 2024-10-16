import React from 'react'
import Truffel from '../assets/truffel.svg';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className='max-w-screen-xl mx-auto px-6 xl:px-0 mt-12 xl:mt-0'>
      <div className='lg:mt-24 lg:flex-row-reverse lg:flex'>
        <div className='lg:flex-1 lg:my-auto'>
          <h2 className='text-4xl text-center mb-6 lg:text-6xl lg:text-left font-extralight leading-snug'>Handwerkliche Qualität <span className='text-xl lg:text-3xl'>bis</span> <span className='font-serif'>ins Detail</span></h2>
          <p className='mb-6 leading-7 font-light'>Belgische Kakao-Trüffel unsere Gaumenschmeichler und Geheimtipp für Geburtstage, als Geschenke für gute Kunden, oder sich selbst zu beschenken. Verpackt im Geschenkkarton oder im Organzasäckchen.</p>
          <section className='text-center'>
            <Link to="Produkte">
              <button className='rounded-full py-2 px-4 bg-chocolateBrown text-textBrown font-light uppercase'>Entdecke unsere Schokolade</button>
            </Link>
          </section>
        </div>
      <div className='lg:flex-1'>
        <img src={Truffel} alt="Trüffel" className='lg:h-auto lg:mr-20 lg:shadow-l' />
      </div>
      </div>
    </div>
  )
}
