import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Features from './components/Features';

import 'flowbite';

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Features />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
