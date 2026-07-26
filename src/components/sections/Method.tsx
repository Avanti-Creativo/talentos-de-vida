"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Sparkles, Layout, Target, Zap, Palette, TrendingUp, Repeat, Clock, MapPin, Gauge, Heart } from "lucide-react"

const methodSteps = [
  {
    letter: "R",
    title: "RECUPERA",
    description: "Tu esencia y dones únicos. Redescubre quién eres más allá de los roles",
    icon: Sparkles,
    color: "bg-coral",
  },
  {
    letter: "E",
    title: "ESTRUCTURA",
    description: "Tu proyecto alrededor de tu vida actual. Diseña algo que fluya con tu realidad, no contra ella",
    icon: Layout,
    color: "bg-teal",
  },
  {
    letter: "N",
    title: "NICHA",
    description: "Tu mensaje para quien necesita escucharte. Encuentra tu tribu y tu voz auténtica",
    icon: Target,
    color: "bg-peach",
  },
  {
    letter: "A",
    title: "AUTOMATIZA",
    description: "Para tener tiempo para lo importante. Sistemas simples que te dan libertad",
    icon: Zap,
    color: "bg-teal-light",
  },
  {
    letter: "C",
    title: "CREA",
    description: "Desde tu autenticidad. Comparte tu verdad sin máscaras",
    icon: Palette,
    color: "bg-golden",
  },
  {
    letter: "E",
    title: "EVOLUCIONA",
    description: "Sin perder tu esencia. Crece manteniéndote fiel a ti misma",
    icon: TrendingUp,
    color: "bg-blush",
  },
  {
    letter: "R",
    title: "REPITE",
    description: "Lo que funciona para ti. Tu camino único y sostenible",
    icon: Repeat,
    color: "bg-coral",
  },
]

const flexibilityPoints = [
  { icon: Clock, text: "Solo necesitas las horas mientras los niños están ocupados" },
  { icon: MapPin, text: "Desde donde estés cómoda trabajando" },
  { icon: Gauge, text: "A tu ritmo, sin presión externa" },
  { icon: Heart, text: "Honrando tus prioridades familiares" },
]

export function Method() {
  const { ref, isInView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={ref} className="section-padding bg-off-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-teal to-peach" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-golden/20 organic-shape-1 blur-2xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-light/20 organic-shape-2 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-reckless text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4">
              El Método R.E.N.A.C.E.R
            </h2>
            <p className="font-circular text-lg md:text-xl text-teal font-semibold">
              Tu Transformación de Vida en Pausa a Vida con Propósito
            </p>
          </motion.div>

          {/* Method steps - Vertical timeline on mobile, grid on desktop */}
          <motion.div variants={containerVariants} className="relative">
            {/* Vertical line for mobile */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-teal to-peach md:hidden" />

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-7 md:gap-4">
              {methodSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-2"
                >
                  {/* Letter circle */}
                  <div
                    className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 shadow-soft z-10`}
                  >
                    <span className="font-reckless text-2xl text-white">{step.letter}</span>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 md:text-center bg-white rounded-2xl p-4 shadow-soft hover:shadow-soft-lg transition-shadow">
                    <div className="flex items-center gap-2 md:justify-center mb-2">
                      <step.icon className="w-5 h-5 text-gray-600" />
                      <h3 className="font-circular font-bold text-sm uppercase tracking-wider text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-circular text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Flexibility points */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-teal-light/20 via-golden/20 to-teal-light/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flexibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="font-circular text-gray-700">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Button variant="primary" size="xl">
              MUÉSTRAME MI TESORO ESCONDIDO
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
