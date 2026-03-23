import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Handshake,
  Award,
  Flame,
  Wheat,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0B1221]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial global supply"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221]/80 via-[#0B1221]/50 to-[#0B1221]"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-20 text-center md:text-left">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto md:mx-0"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center md:justify-start space-x-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-semibold">
                {t('home.hero.subtitle')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-8"
            >
              {t('home.hero.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#E8D08D]">
                {t('home.hero.title2')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-12 leading-relaxed"
            >
              {t('home.hero.desc')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0B1221] font-semibold text-sm uppercase tracking-wider overflow-hidden rounded-sm"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t('home.hero.btn')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-5xl font-serif font-bold text-[#0B1221] tracking-tight mb-6"
              >
                {t('home.about.title')}
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="w-20 h-1 bg-[#C5A059] mb-8"
              ></motion.div>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 font-light leading-relaxed mb-6"
              >
                {t('home.about.p1')}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 font-light leading-relaxed"
              >
                {t('home.about.p2')}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "15+", label: t('home.stats.countries') },
                { number: "1M+", label: t('home.stats.tons') },
                { number: "100%", label: t('home.stats.quality') },
                { number: "24/7", label: t('home.stats.logistics') },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-[#F9FAFB] p-8 rounded-sm border border-gray-100 text-center"
                >
                  <div className="text-4xl font-bold text-[#0B1221] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions Teaser */}
      <section className="py-24 bg-[#0B1221]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
              {t('home.dir.title')}
            </h2>
            <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
              {t('home.dir.desc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Petroleum Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[500px] overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
                alt="Petroleum"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
                  <Flame className="w-7 h-7 text-[#0B1221]" />
                </div>
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
                  {t('home.dir.petroleum')}
                </h3>
                <p className="text-gray-300 font-light mb-8 max-w-md">
                  {t('home.dir.petroleum.desc')}
                </p>
                <Link
                  to="/petroleum"
                  className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition-colors font-medium uppercase tracking-wider text-sm"
                >
                  <span>{t('home.dir.more')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Agro Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
                alt="Agriculture"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/60 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm">
                  <Wheat className="w-7 h-7 text-[#0B1221]" />
                </div>
                <h3 className="text-2xl  md:text-4xl font-serif font-bold text-white mb-4">
                  {t('home.dir.agro')}
                </h3>
                <p className="text-gray-300 font-light mb-8 max-w-md">
                  {t('home.dir.agro.desc')}
                </p>
                <Link
                  to="/agro"
                  className="inline-flex items-center space-x-2 text-[#C5A059] hover:text-white transition-colors font-medium uppercase tracking-wider text-sm"
                >
                  <span>{t('home.dir.more')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Globe,
                title: t('home.adv.logistics'),
                desc: t('home.adv.logistics.desc'),
              },
              {
                icon: ShieldCheck,
                title: t('home.adv.quality'),
                desc: t('home.adv.quality.desc'),
              },
              {
                icon: Handshake,
                title: t('home.adv.contracts'),
                desc: t('home.adv.contracts.desc'),
              },
              {
                icon: Award,
                title: t('home.adv.reliability'),
                desc: t('home.adv.reliability.desc'),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-sm border border-gray-100 hover:border-[#C5A059] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-[#F9FAFB] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#0B1221] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#0B1221] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
