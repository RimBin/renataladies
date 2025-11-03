'use client'

import { GradientButton } from "@/components/ui/GradientButton";
import Reveal from "@/components/ui/Reveal";
import QuizModal from "@/components/QuizModal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Zoom-in effect: image scales from 1.2 to 1 as you scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.2, 0.4]);
  
  // Content fade-in and slight move up
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-neutral-100 to-white min-h-[600px] sm:min-h-[700px] py-24 sm:py-32 overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        style={{ 
          scale: imageScale,
          opacity: imageOpacity
        }}
        className="absolute inset-0 will-change-transform"
      >
        <img 
          src="/images/Renata call to action.webp" 
          alt="Renata" 
          className="w-full h-full object-cover object-[65%_calc(50%-30px)] sm:object-center"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent" />

      {/* Content with Fade-in */}
      <motion.div 
        style={{ 
          opacity: contentOpacity,
          y: contentY
        }}
        className="relative max-w-[1440px] mx-auto px-4 md:px-6 flex items-center min-h-[600px] sm:min-h-[700px] will-change-transform"
      >
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-6xl font-bold text-rlText mb-6">
              <span className="gradient-text">Pasiruošusi</span> pradėti?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Išsirink planą ar paslaugą ir žengk pirmą žingsnį pokyčių link jau šiandien
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <GradientButton 
                as="a" 
                href="#paslaugos" 
                withArrow
                icon="et-circle-cutout"
                iconHover="slide-right"
                className="font-semibold text-lg px-8 py-4"
              >
                Rinkis savo kelią
              </GradientButton>
            </div>

            {/* Quiz Link */}
            <QuizModal />
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
