import React from 'react';
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import { Element } from 'react-scroll';

export default function About() {
  return (
    <Element className='bg-bgBrown' id="about" name="about">
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0 pt-8 pb-8 xl:pt-14'>
        <h2 className='text-center text-xl font-extralight lg:text-5xl lg:pr-72'>Über</h2>
        <div className='lg:flex lg:flex-row'>
          <div className='hidden lg:block'>
            <img src={Image2} alt="Bild von Trüffeln" className='lg:h-2/3 lg:mt-12 lg:ml-[25%]' />
          </div>
          <div className='lg:flex-1'>
            <div>
              <h1 className='text-3xl text-center lg:text-left font-light mb-6 lg:text-5xl'>dieschokoecke</h1>
              <p className='font-light text-left'>Mein Name ist Anja Scharf, ich bin geboren in Bochum und lebe seit 30 Jahren im schönen Lauf. Ich bin verheiratet und habe 2 erwachsene Söhne.
Ich darf seit September 2024 exklusiv, die Kakao-Trüffel und Pralinen/Trüffel, der Firma Selectinas anbieten und verkaufen. 
Die Trüffel sind vielen noch bekannt, denn eine große Auswahl gab es bei der Firma Mundi-Weine, die mittlerweile geschlossen ist.
Gerne dürfen Sie mich telefonisch, per Email, oder WhatsApp kontaktieren.
Ich freue mich auf Sie! <br/>
Ihre Anja Scharf</p>
            </div>
            <div className='lg:flex lg:flex-row'>
              <img src={Image3} alt="Bild von Trüffeln" className='hidden lg:block lg:pl-20 lg:mt-32 lg:h-96' />
              <img src={Image1} alt="Bild von Trüffeln" className='mx-auto pt-8 pb-8 lg:h-96 lg:hidden xl:block' />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}