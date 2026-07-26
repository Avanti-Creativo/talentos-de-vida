"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { ArrowRight, Repeat, Sparkles } from "lucide-react"

const paths = [
  {
    title: "CAMINO 1",
    items: ["Volver a la rutina", "Seguir posponiendo", "Llegar al próximo año igual"],
    color: "gray",
  },
  {
    title: "CAMINO 2",
    items: ["Descubrir tu tesoro", "Dar el primer paso HOY", "Empezar tu transformación"],
    color: "teal",
  },
]

export function FinalCTA() {
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
    <section ref={ref} className="section-padding gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral/50 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-coral/10 organic-shape-1 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-light/20 organic-shape-2 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-reckless text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-6">
              Este Es Tu Momento
            </h2>
            <p className="font-circular text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              No llegaste aquí por casualidad. Ese sentimiento que tienes, esa inquietud, ese{" "}
              <span className="italic">&quot;tiene que haber algo más&quot;</span>...
            </p>
            <p className="font-reckless text-2xl text-teal mt-4">
              Es tu alma pidiendo espacio para brillar.
            </p>
          </motion.div>

          {/* Two paths comparison */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {paths.map((path, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-3xl p-8 ${
                  path.color === "gray"
                    ? "bg-gradient-to-br from-coral/90 to-coral border-2 border-coral"
                    : "bg-gradient-to-br from-teal to-teal-light border-2 border-teal"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  {path.color === "gray" ? (
                    <Repeat className="w-8 h-8 text-white" />
                  ) : (
                    <Sparkles className="w-8 h-8 text-white" />
                  )}
                  <h3
                    className={`font-circular font-bold text-xl uppercase tracking-wider text-white`}
                  >
                    {path.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {path.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-3 text-white"
                    >
                      <ArrowRight className="w-5 h-5 flex-shrink-0" />
                      <p className="font-circular text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing statement */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft mb-12"
          >
            <p className="font-circular text-xl md:text-2xl text-gray-700 leading-relaxed">
              No se trata de cambiar toda tu vida.
            </p>
            <p className="font-reckless text-2xl md:text-3xl text-teal mt-4">
              Se trata de agregar propósito a la vida que ya tienes.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <a href="#lead-magnet">
  <Button variant="primary" size="xl">
    MUÉSTRAME MI TESORO ESCONDIDO
  </Button>
</a>
            <p className="font-circular text-sm text-gray-500 mt-4">
              Tu transformación comienza con un clic
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
