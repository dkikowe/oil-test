import React from "react";
import { motion } from "motion/react";
import { Flame, Droplets, Truck, Ship } from "lucide-react";
import { fadeUp } from "../utils/animations";

export default function Petroleum() {
  const partners = [
    "РусНефть",
    "Газпром",
    "KazMunayGas",
    "CNPC",
    "АНПЗ Атырау",
    "ПНХЗ Павлодар",
    "Актобемунайгаз",
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F9FAFB]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-semibold">
              Направление
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#0B1221] tracking-tight mb-6">
            Нефтепродукты
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl font-light mx-auto md:mx-0">
            Прямые поставки высококачественных углеводородов с соблюдением
            строгих международных стандартов безопасности и логистики.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px] mb-32">
          {/* Item 1: Gas (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative overflow-hidden rounded-sm bg-[#0B1221]"
          >
            <img
              src="/gas.jpg"
              alt="Gas storage facilities - Газовые хранилища"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
                <Flame className="w-6 h-6 text-[#0B1221]" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                Газ
              </h3>
              <p className="text-gray-300 font-light max-w-md">
                Сжиженный и природный газ высшего качества для промышленных
                нужд.
              </p>
            </div>
          </motion.div>

          {/* Item 2: Petrol */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 p-8 md:p-10 flex flex-col justify-between hover:border-[#C5A059] transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm group-hover:bg-[#C5A059]/10 transition-colors">
              <Droplets className="w-6 h-6 text-[#0B1221] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3 tracking-tight">
                Бензин
              </h3>
              <p className="text-gray-600 font-light">
                Автомобильные бензины различных марок, соответствующие
                стандартам Евро.
              </p>
            </div>
          </motion.div>

          {/* Item 3: Diesel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 p-8 md:p-10 flex flex-col justify-between hover:border-[#C5A059] transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-sm group-hover:bg-[#C5A059]/10 transition-colors">
              <Truck className="w-6 h-6 text-[#0B1221] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0B1221] mb-3 tracking-tight">
                Дизель
              </h3>
              <p className="text-gray-600 font-light">
                Надежное дизельное топливо для любых климатических условий
                эксплуатации.
              </p>
            </div>
          </motion.div>

          {/* Item 4: Oil Supply (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-sm bg-[#0B1221]"
          >
            <img
              src="/neft.jpg"
              alt="Tank wagons - Железнодорожные цистерны"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
                <Ship className="w-6 h-6 text-[#0B1221]" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                Поставка нефти
              </h3>
              <p className="text-gray-300 font-light max-w-md">
                Сырая нефть напрямую с месторождений. Оптимизированная
                логистика.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Partners Marquee */}
        <div className="mb-32">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1221]">
              Наши партнеры
            </h3>
            <p className="text-gray-500 mt-2 font-light">
              Ведущие предприятия нефтегазового сектора
            </p>
          </div>
          <div className="relative overflow-hidden w-full bg-white py-8 border-y border-gray-200 flex">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex w-max animate-marquee">
              <div className="flex items-center gap-16 px-8">
                {partners.map((partner, idx) => (
                  <span
                    key={idx}
                    className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-16 px-8">
                {partners.map((partner, idx) => (
                  <span
                    key={`dup-${idx}`}
                    className="text-xl md:text-2xl font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure & Storage Gallery */}
        <div>
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0B1221]">
              Инфраструктура и хранение
            </h3>
            <p className="text-gray-500 mt-2 font-light">
              Современные мощности для безопасного хранения и транспортировки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-64 rounded-sm overflow-hidden relative group">
              <img
                src="/neft.jpg"
                alt="Oil refinery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="h-64 rounded-sm overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
                alt="Industrial pipes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
            <div className="h-64 rounded-sm overflow-hidden relative group md:col-span-2 lg:col-span-1">
              <img
                src="/neft.png"
                alt="Freight wagons"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
