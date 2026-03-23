import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Petroleum from '../pages/Petroleum';
import Agro from '../pages/Agro';
import Contact from '../pages/Contact';
import { LanguageProvider } from '../i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/petroleum" element={<Petroleum />} />
            <Route path="/agro" element={<Agro />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
