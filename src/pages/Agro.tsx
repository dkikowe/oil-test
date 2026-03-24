import React from "react";
import { motion } from "motion/react";
import {
  Wheat,
  Factory,
  Droplets,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useLanguage } from "../i18n/LanguageContext";

export default function Agro() {
  const { t } = useLanguage();

  const partners = [
    "РусАгро",
    "Шымкент май",
    "Агропорт",
    "Агро групп",
    "KRYSTAN TURAN",
  ];

  const routeKeys = [
    "agro.route.iran",
    "agro.route.afghanistan",
    "agro.route.uae",
    "agro.route.iraq",
  ] as const;

  const oilFeatures = [
    { icon: ShieldCheck, key: "agro.oil.f1" as const },
    { icon: Factory, key: "agro.oil.f2" as const },
    { icon: Truck, key: "agro.oil.f3" as const },
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] uppercase tracking-[0.2em] text-sm font-semibold">
              {t("agro.badge")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#0B1221] tracking-tight mb-6 break-words">
            {t("nav.agro")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl font-light leading-relaxed mx-auto md:mx-0">
            {t("agro.lead")}
          </p>
        </motion.div>

        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0B1221]">
              {t("agro.partners.title")}
            </h3>
            <p className="text-gray-500 mt-2 font-light">
              {t("agro.partners.subtitle")}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm"
            >
              <Wheat className="w-6 h-6 text-[#0B1221]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold text-[#0B1221] tracking-tight mb-6"
            >
              {t("agro.grains.title")}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="prose prose-lg text-gray-600 font-light mb-8"
            >
              <p>{t("agro.grains.p1")}</p>
              <p>{t("agro.grains.p2")}</p>
              <p>{t("agro.grains.p3")}</p>
              <div className="not-prose border border-[#C5A059]/30 bg-slate-50 rounded-sm p-5 my-6">
                <p className="text-sm font-semibold text-[#0B1221] uppercase tracking-wider mb-3">
                  {t("agro.soya.title")}
                </p>
                <ul className="text-gray-600 font-light text-[15px] space-y-2 list-disc list-inside">
                  <li>{t("agro.soya.li1")}</li>
                  <li>{t("agro.soya.li2")}</li>
                  <li>{t("agro.soya.li3")}</li>
                  <li>{t("agro.soya.li4")}</li>
                </ul>
              </div>
              <p>{t("agro.grains.p4")}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white border border-gray-200 p-6 rounded-sm mb-8 w-full"
            >
              <h4 className="font-bold text-[#0B1221] mb-4 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-5 h-5 text-[#C5A059]" />
                {t("agro.routes.title")}
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {routeKeys.map((key) => (
                  <span
                    key={key}
                    className="bg-[#F9FAFB] border border-gray-200 px-4 py-2 rounded-sm text-sm font-medium text-gray-700 uppercase tracking-wider"
                  >
                    {t(key)}
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
            <div className="relative h-[250px] rounded-sm overflow-hidden group col-span-2">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
                alt={t("agro.alt.fields")}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-medium tracking-wide">
                  {t("agro.caption.fields")}
                </span>
              </div>
            </div>
            <div className="relative h-[200px] rounded-sm overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
                alt={t("agro.alt.flour")}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-medium tracking-wide">
                  {t("agro.caption.flour")}
                </span>
              </div>
            </div>
            <div className="relative h-[200px] rounded-sm overflow-hidden group">
              <img
                src="/elevator.jpeg"
                alt={t("agro.alt.elevator")}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-white font-medium tracking-wide">
                  {t("agro.caption.elevators")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

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
                alt={t("agro.alt.sunflower")}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative h-[250px] rounded-sm overflow-hidden group">
              <img
                src="/oil1.jpeg"
                alt={t("agro.alt.oilbulk")}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="relative h-[250px] rounded-sm overflow-hidden group">
              <img
                src="/oil2.jpg"
                alt={t("agro.alt.oilsupply")}
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
            <motion.div
              variants={fadeUp}
              className="w-12 h-12 bg-[#C5A059] flex items-center justify-center mb-6 rounded-sm"
            >
              <Droplets className="w-6 h-6 text-[#0B1221]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-serif font-bold text-[#0B1221] tracking-tight mb-6"
            >
              {t("agro.oils.title")}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="prose prose-lg text-gray-600 font-light mb-8"
            >
              <p>{t("agro.oils.p1")}</p>
              <p>{t("agro.oils.p2")}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {oilFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white p-4 border border-gray-100 rounded-sm shadow-sm"
                >
                  <feature.icon className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">
                    {t(feature.key)}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
