import React from 'react';
import 'flowbite';
import { Element } from 'react-scroll';

export default function FAQ() {
  return (
    <Element className='xl:pb-32 max-w-screen-xl mx-auto px-6 xl:px-0 mb-12 lg:mb-0' id="faq" name="faq">
      <div className='text-center mt-12 2xl:mt-20'>
        <h2 className='xl:text-5xl text-3xl mb-3 font-light 2xl:mb-6'>Häufig gefragt</h2>
        <h3 className='xl:text-5xl text-3xl font-serif mb-6 lg:mb-0'>Antworten</h3>
      </div>
    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-black dark:text-white" data-inactive-classes="text-black dark:text-gray-400" className='xl:mx-auto 2xl:mt-12'>
  <h2 id="accordion-flush-heading-1">
    <button type="button" className="flex items-center justify-between text-left w-full py-5 font-bold rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>What types of chocolates do you offer?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400 font-light">We offer a diverse range of chocolates including milk, dark, and white chocolate varieties. Additionally, we have seasonal and limited-edition flavors, as well as artisanal creations.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-2">
    <button type="button" className="flex items-center text-left justify-between w-full py-5 font-bold rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span>Are your chocolates handmade?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400 font-light">We offer a diverse range of chocolates including milk, dark, and white chocolate varieties. Additionally, we have seasonal and limited-edition flavors, as well as artisanal creations.</p>
    </div>
  </div>
  <h2 id="accordion-flush-heading-3">
    <button type="button" className="flex items-center text-left justify-between w-full py-5 font-bold rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
      <span>Do you use ethically source cocoa?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400 font-light">We offer a diverse range of chocolates including milk, dark, and white chocolate varieties. Additionally, we have seasonal and limited-edition flavors, as well as artisanal creations.</p>
    </div>
  </div>
      </div>
      </Element>
  )
}
