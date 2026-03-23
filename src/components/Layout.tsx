import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const languages: Language[] = ['KZ', 'RU', 'EN', 'FA'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.petroleum'), path: '/petroleum' },
    { name: t('nav.agro'), path: '/agro' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#0B1221] font-sans selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      <ScrollToTop />
      
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[#0B1221]/90 backdrop-blur-lg border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                EOA<span className="text-[#C5A059] ml-1">GROUP</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((item, i) => (
                <Link 
                  key={i} 
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-300 hover:text-white'
                  } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#C5A059] after:transition-all after:duration-300 ${
                    location.pathname === item.path ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-4 w-24 bg-[#0B1221] border border-white/10 rounded-sm shadow-2xl py-2"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => { setLanguage(lang); setIsLangMenuOpen(false); }}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            language === lang ? 'text-[#C5A059]' : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Button */}
              <a
                href="tel:+77777771778"
                className="group flex items-center space-x-2 bg-white/5 hover:bg-[#C5A059] border border-white/10 hover:border-[#C5A059] text-white px-6 py-2.5 rounded-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">{t('header.phone')}</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0B1221] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-6 flex flex-col items-center text-center">
                {navLinks.map((item, i) => (
                  <Link 
                    key={i}
                    to={item.path} 
                    className={`block text-lg ${location.pathname === item.path ? 'text-[#C5A059]' : 'text-gray-300 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex space-x-6 pt-4 border-t border-white/10 w-full justify-center">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`text-sm font-medium ${language === lang ? 'text-[#C5A059]' : 'text-gray-500'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1221] pt-20 pb-10 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left mb-16">
            <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white block mb-2">
                EOA<span className="text-[#C5A059] ml-1">GROUP</span>
              </span>
              <p className="text-gray-500 font-light text-sm max-w-xs">
                {t('footer.desc')}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link to="/petroleum" className="text-sm text-gray-400 hover:text-white transition-colors">{t('nav.petroleum')}</Link>
              <Link to="/agro" className="text-sm text-gray-400 hover:text-white transition-colors">{t('nav.agro')}</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-600 font-light">
            <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
