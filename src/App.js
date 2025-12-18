import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Impressum from './pages/Impressum';
import NotFound from './pages/NotFound';
import 'flowbite/dist/flowbite.min.js';
import { useEffect, useState } from 'react';
import client from './Client';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [products, setProducts] = useState([]);
  const [faqEntries, setFaqEntries] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    client.getEntries({ content_type: 'product'})
      .then((response) => setProducts(response.items))
      .catch(console.error);

    client.getEntries({content_type: 'faq'})
      .then((response) => setFaqEntries(response.items))
      .catch(console.error);
  }, [])

  return (
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index element={<Home faqEntries={faqEntries} />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="produkte" element={<Products products={products} />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
