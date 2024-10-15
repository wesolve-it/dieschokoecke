import React from 'react';
import 'flowbite';
import { Element } from 'react-scroll';

export default function FAQ({faqEntries}) {
  // Array mit dynamischen Fragen und Antworten
  const faqData = [
    {
      title: 'What types of chocolates do you offer?',
      answer: 'We offer a diverse range of chocolates including milk, dark, and white chocolate varieties. Additionally, we have seasonal and limited-edition flavors, as well as artisanal creations.'
    },
    {
      title: 'Are your chocolates handmade?',
      answer: 'Yes, our chocolates are handmade with care using traditional methods, ensuring premium quality and taste in every piece.'
    },
    {
      title: 'Do you use ethically sourced cocoa?',
      answer: 'Absolutely! We source our cocoa from ethical and sustainable farms to ensure fair trade and environmentally friendly practices.'
    }
  ];

  return (
    <Element className='xl:pb-32 max-w-screen-xl mx-auto px-6 xl:px-0 mb-12 lg:mb-0' id="faq" name="faq">
      <div className='text-center mt-12 2xl:mt-20'>
        <h2 className='xl:text-5xl text-3xl mb-3 font-light 2xl:mb-6'>Häufig gefragt</h2>
        <h3 className='xl:text-5xl text-3xl font-serif mb-6 lg:mb-0'>Antworten</h3>
      </div>
      
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-black dark:text-white" data-inactive-classes="text-black dark:text-gray-400" className='xl:mx-auto 2xl:mt-12'>
        {faqEntries.map((faq, index) => (
          <div key={index}>
            <h2 id={`accordion-flush-heading-${index}`}>
              <button
                type="button"
                className="flex items-center justify-between text-left w-full py-5 font-bold rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target={`#accordion-flush-body-${index}`}
                aria-expanded="false"
                aria-controls={`accordion-flush-body-${index}`}>
                <span>{faq.fields.question}</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            <div id={`accordion-flush-body-${index}`} className="hidden" aria-labelledby={`accordion-flush-heading-${index}`}>
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 font-light">{faq.fields.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}