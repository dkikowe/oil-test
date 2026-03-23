import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-[#0B1221] min-h-screen border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-semibold">
                Связь с нами
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6">
              Контакты
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-400 font-light mb-12 max-w-md mx-auto md:mx-0">
              Готовы обсудить условия сотрудничества? Оставьте заявку, и наши специалисты свяжутся с вами.
            </motion.p>
            
            <motion.div variants={fadeUp} className="space-y-10 flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Офис</h4>
                  <p className="text-gray-400 font-light">Достык 20, г. Астана<br/>Казахстан</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Телефоны</h4>
                  <p className="text-gray-400 font-light">+7 777 777 17 78</p>
                  <p className="text-gray-400 font-light">+7 707 398 88 88</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 text-[#C5A059]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 uppercase tracking-wider text-sm">Email</h4>
                  <p className="text-gray-400 font-light">info@eoagroup.kz</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="bg-white/5 border border-white/10 p-10 rounded-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Ваше имя / Компания</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light"
                    placeholder="Введите данные"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light"
                    placeholder="+7 (___) ___ __ __"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Интересующая продукция</label>
                  <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light appearance-none">
                    <option className="bg-[#0B1221]">Нефтепродукты</option>
                    <option className="bg-[#0B1221]">Агропромышленность</option>
                    <option className="bg-[#0B1221]">Другое</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#C5A059] hover:bg-[#E8D08D] text-[#0B1221] font-semibold py-4 rounded-sm transition-colors uppercase tracking-wider text-sm">
                    Отправить заявку
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
