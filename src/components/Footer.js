import React from 'react'
import Chocolate from '../assets/FullLogo_Transparent_NoBuffer.png'
import Instagram from '../assets/instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-bgBrown dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center flex-col">
                  <img src={Chocolate} className="h-8 me-3 lg:h-20" alt="dieschokoecke Logo" />
                  <span className="self-center mt-4 text-gray-500 whitespace-nowrap dark:text-white font-light">QUALITÄT IN SCHOKOLADE</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informationen</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Produkte</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">FAQ</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Kontakt</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://dieschokoecke.de/kontakt" className="hover:underline ">Kontaktiere uns</a>
                      </li>
                      <li className="mb-4">
                          <a href="mailto:kontakt@dieschokoecke.de" className="hover:underline">Email</a>
                      </li>
                      <li>
                          <a href="https://wa.me/491748130465" className="hover:underline">WhatsApp</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Rechtliches</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Impressum</a>
                      </li>
                      <li>
                          <a href="https://flowbite.com/" className="hover:underline">Datenschutz</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-row gap-x-3">
                      <li className="mb-4">
                      <a href="https://www.instagram.com/dieschokoecke/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  {/* <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg> */}
                    <img src={Instagram} alt="Instagram Logo" className='h-5'/>
                  <span className="sr-only">Instagram page</span>
              </a>
                      </li>
                      <li>
                      <a href="https://www.instagram.com/dieschokoecke/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 mx-auto dark:text-gray-400">©2024 <a href="https://dieschokoecke.de" className="hover:underline">dieschokoecke</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>
  )
}
