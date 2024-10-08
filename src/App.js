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
import 'flowbite';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="produkte" element={<Products />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
