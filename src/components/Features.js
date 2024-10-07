import React from 'react';
import Cake from '../assets/cake.svg';
import Coffee from '../assets/coffee.svg';
import Acorn from '../assets/acorn.svg';
import Truffel from '../assets/FeaturesTruffel.svg';

export default function Features() {
  return (
    <div className='max-w-screen-xl px-6 xl:px-0 mx-auto mt-8 mb-12 xl:mt-12'>
      <h2 className='text-2xl font-light mb-6 xl:text-5xl xl:mb-10 xl:w-2/5 xl:leading-snug'>Außergewöhnliche Eigenschaften <span className='text-lg'>unserer</span> <span className='font-serif'>Schokolade</span></h2>
      <div className='xl:flex xl:flex-row xl:gap-x-12'>
        <section className='mb-8'>
          <section className='flex flex-row mb-4 xl:flex-col'>
            <img src={Acorn} alt="An Acorn" className='h-10 xl:mr-auto xl:mb-2' />
            <h3 className='my-auto ml-4 font-bold xl:ml-0'>Handgefertigte Perfektion</h3>
          </section>
          <p className='font-light'>Von erfahrenen Chocolatiers fachmännisch hergestellt für ein einzigartiges Geschmackserlebnis</p>
        </section>
        <section className='mb-8'>
          <section className='flex flex-row mb-4 xl:-mt-20 xl:flex-col'>
            <img src={Coffee} alt="An Acorn" className='h-10 xl:mr-auto xl:mb-2' />
            <h3 className='my-auto ml-4 font-bold xl:ml-0'>Reichhaltige Aromen</h3>
          </section>
          <p className='font-light'>Eine vielfältige Geschmacksvielfalt, von klassischer Milchschokolade bis hin zu intensiven dunklen Sorten</p>
        </section>
        <section>
          <section className='flex flex-row mb-4 xl:-mt-20 xl:flex-col'>
            <img src={Cake} alt="An Acorn" className='h-10 xl:mr-auto xl:mb-2' />
            <h3 className='my-auto ml-4 font-bold xl:ml-0'>Ethisch angebauter Kakao</h3>
          </section>
          <p className='font-light'>Hergestellt aus feinsten Kakaobohnen und hochwertigen natürlichen Zutaten</p>
        </section>
      </div>
      <section>
        <img src={Truffel} alt='' className='xl:ml-auto md:w-4/6 md:mx-auto xl:-mt-48' />
      </section>
    </div>
  )
}
