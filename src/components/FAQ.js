import React, { useState } from 'react';

export default function FAQ({ faqEntries }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='xl:pb-32 max-w-screen-xl mx-auto px-6 xl:px-0 mb-12 lg:mb-0' id="faq">
      <div className='text-center mt-12 2xl:mt-20 mb-6'>
        <h2 className='xl:text-5xl text-3xl mb-3 font-light 2xl:mb-6'>Häufig gefragt</h2>
        <h3 className='xl:text-5xl text-3xl font-serif mb-6 lg:mb-0'>Antworten</h3>
      </div>

      <div className='xl:mx-auto 2xl:mt-12'>
        {faqEntries.map((faq, index) => (
          <div key={index}>
            <h2>
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between text-left w-full py-5 font-bold text-black border-b border-gray-200 dark:border-gray-700 gap-3"
              >
                <span>{faq.fields.question}</span>
                <svg
                  className={`w-3 h-3 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            {openIndex === index && (
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 font-light">
                  {faq.fields.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
