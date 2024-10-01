import React from 'react';
import Cake from '../assets/cake.svg';
import Coffee from '../assets/coffee.svg';
import Acorn from '../assets/acorn.svg';
import Truffel from '../assets/FeaturesTruffel.svg';

export default function Features() {
  return (
    <div className='max-w-screen-xl px-6 xl:px-0 mx-auto mt-8 mb-12'>
      <h2 className='text-2xl font-light mb-6'>Exceptional Features <span className='text-lg'>of Our</span> <span className='font-serif'>Chocolates</span></h2>
      <div>
        <section className='mb-8'>
          <section className='flex flex-row mb-4'>
            <img src={Acorn} alt="An Acorn" className='h-10' />
            <h3 className='my-auto ml-4 font-bold'>Handcrafted Perfection</h3>
          </section>
          <p className='font-light'>Expertly crafted by skilled chocolatiers for a unique taste experience</p>
        </section>
        <section className='mb-8'>
          <section className='flex flex-row mb-4'>
            <img src={Coffee} alt="An Acorn" className='h-10' />
            <h3 className='my-auto ml-4 font-bold'>Rich Flavors</h3>
          </section>
          <p className='font-light'>A diverse range of flavors, from classic milk chocolate to intense dark varieties</p>
        </section>
        <section>
          <section className='flex flex-row mb-4'>
            <img src={Cake} alt="An Acorn" className='h-10' />
            <h3 className='my-auto ml-4 font-bold'>Ethically Sourced Cocoa</h3>
          </section>
          <p className='font-light'>Made with the finest cocoa beans and high-quality natural ingredients</p>
        </section>
      </div>
      <section>
        <img src={Truffel} alt='' className='' />
      </section>
    </div>
  )
}
