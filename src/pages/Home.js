import React from 'react'
import ValentinesHero from '../components/ValentinesHero';
import Products from '../components/Products';
import About from '../components/About';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import CouponModal from '../components/CouponModal';
import HeimatCoupon from '../components/HeimatCoupon';

export default function Home({faqEntries}) {
  return (
    <>
      <ValentinesHero />
      <Products />
      <About />
      <Features />
      <HeimatCoupon />
      <Reviews />
      <FAQ faqEntries={faqEntries} />
      <CouponModal />
    </>
  )
}
