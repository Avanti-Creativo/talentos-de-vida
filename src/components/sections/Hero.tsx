"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-warm">
      {/* Decorative organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-coral/20 organic-shape-1"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-32 w-72 h-72 bg-teal-light/30 organic-shape-2"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-peach/20 organic-shape-3"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-32 h-32 bg-blush/40 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <Image
                src="/images/logo-full-color.png"
                alt="Talentos de Vida"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-reckless font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 leading-tight mb-6 text-balance"
        >
          Para la mamá que siente que desapareció detrás de los roles de otros
        </motion.h2>

        {/* Subheadline */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-satoshi font-bold text-xl md:text-2xl lg:text-3xl text-teal mb-4"
        >
          Descubre Cómo Construir Tu Negocio Desde Casa En 90 Días
        </motion.h3>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-circular text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          Sin sacrificar tiempo familiar. Sin pedir permiso. Sin esperar el momento &quot;perfecto&quot; que nunca llega.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <a href="#lead-magnet">
  <Button variant="primary" size="xl">
    MUÉSTRAME MI TESORO ESCONDIDO
  </Button>
</a>
          <p className="font-circular text-sm text-gray-500">
            Descarga gratis el mapa • Toma solo 10 minutos
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-teal/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-teal"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
