import React from 'react'
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import ChristmasModal from '../components/ChristmasModal';

export default function Home({faqEntries}) {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Features />
      <Reviews />
      <FAQ faqEntries={faqEntries} />
    </>
  )
}
