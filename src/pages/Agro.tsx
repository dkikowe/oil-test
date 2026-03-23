import React from 'react';
import { motion } from 'motion/react';
import { Wheat, Factory, Droplets, MapPin, ShieldCheck, Truck } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function Agro() {
  const partners = [
    "РусАгро", "Шымкент май", "Агропорт", "Агро групп"
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F9FAFB] min-h-screen">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-semibold">
              Агросектор
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#0B1221] tracking-tight mb-6 break-words">
            Агропромышленность
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl font-light leading-relaxed mx-auto md:mx-0">
            Мы являемся крупнейшим экспортером сельскохозяйственной продукции. Гарантируем высокое качество сырья, надежное хранение и бесперебойную логистику на международные рынки.
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1221]">Наши ключевые партнеры</h3>
            <p className="text-gray-500 mt-2 font-light">Лидеры агропромышленного комплекса</p>
          </div>
          <div className="relative overflow-hidden w-full bg-white py-8 border-y border-gray-200 flex">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="flex w-max animate-marquee">
              <div className="flex items-center gap-16 px-8">
                {partners.map((partner, idx) => (
                  <span key={idx} className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    {partner}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-16 px-8">
                {partners.map((partner, idx) => (
                  <span key={`dup-${idx}`} className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grains & Flour Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
              <Wheat className="w-6 h-6 text-[#0B1221]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-[#0B1221] tracking-tight mb-6">
              Экспорт зерна и муки
            </motion.h2>
            <motion.div variants={fadeUp} className="prose prose-lg text-gray-600 font-light mb-8">
              <p>
                Мы предлагаем бесперебойные крупнооптовые поставки высококачественных зерновых культур. 
                В нашем ассортименте представлено <strong>зерно всех сортов (3-4 класс)</strong>, а также <strong>мука первого и второго сорта</strong>.
              </p>
              <p>
                Собственные элеваторы и специализированные вагоны-зерновозы позволяют нам обеспечивать идеальные условия хранения и транспортировки на любые расстояния.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white border border-gray-200 p-6 rounded-sm mb-8">
              <h4 className="font-bold text-[#0B1221] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
                Основные направления поставок:
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Иран", "Афганистан", "ОАЭ", "Ирак"].map((country) => (
                  <span key={country} className="bg-[#F9FAFB] border border-gray-200 px-4 py-2 rounded-sm text-sm font-medium text-gray-700 uppercase tracking-wider">
                    {country}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-sm overflow-hidden group col-span-2">
              <img 
                src="/elevator.jpeg" 
                alt="Зерновые элеваторы" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-medium tracking-wide">Современные элеваторы</span>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[250px] rounded-sm overflow-hidden group col-span-2">
              <img 
                src="/vagon.jpg" 
                alt="Вагоны-зерновозы" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-medium tracking-wide">Собственный ЖД парк</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Oils Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            <div className="relative h-[400px] rounded-sm overflow-hidden group col-span-2">
              <img 
                src="/oil.jpg" 
                alt="Подсолнечное масло" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative h-[250px] rounded-sm overflow-hidden group">
              <img 
                src="/oil1.jpeg" 
                alt="Растительное масло оптом" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative h-[250px] rounded-sm overflow-hidden group">
              <img 
                src="/oil2.jpg" 
                alt="Поставка масла" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp} className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
              <Droplets className="w-6 h-6 text-[#0B1221]" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold text-[#0B1221] tracking-tight mb-6">
              Пищевые растительные масла
            </motion.h2>
            <motion.div variants={fadeUp} className="prose prose-lg text-gray-600 font-light mb-8">
              <p>
                Осуществляем крупнооптовые поставки рафинированного и нерафинированного подсолнечного масла высшего качества. 
              </p>
              <p>
                Наша продукция проходит строгий лабораторный контроль на всех этапах производства и розлива, что делает её идеальным выбором как для пищевой промышленности, так и для дистрибуции в розничные сети.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { icon: ShieldCheck, text: "Соответствие международным стандартам качества (Халал, ГОСТ)" },
                { icon: Factory, text: "Прямые поставки с ведущих маслоэкстракционных заводов" },
                { icon: Truck, text: "Оптимизированная логистика в страны Ближнего Востока и Азии" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 border border-gray-100 rounded-sm shadow-sm">
                  <feature.icon className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
