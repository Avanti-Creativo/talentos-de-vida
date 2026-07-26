"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/lib/useScrollAnimation"
import { Sparkles, Target, Rocket, MessageCircle, Gift } from "lucide-react"
import Image from "next/image"

const benefits = [
  { icon: Sparkles, text: "Los talentos que has estado ignorando porque los consideras 'normales'" },
  { icon: Target, text: "El proyecto perfecto para tu vida actual sin cambiar todo" },
  { icon: Rocket, text: "Cómo empezar esta misma semana con pasos micro pero poderosos" },
  { icon: MessageCircle, text: "Tu mensaje único que alguien necesita escuchar" },
]

export function LeadMagnet() {
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
    <section ref={ref} id="lead-magnet" className="section-padding bg-teal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white organic-shape-1" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white organic-shape-2" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white organic-shape-3" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <motion.div variants={itemVariants} className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <Gift className="w-5 h-5" />
                <span className="font-circular text-sm font-semibold">RECURSO GRATUITO</span>
              </div>

              <h2 className="font-reckless text-3xl md:text-4xl lg:text-5xl mb-4">
                Descubre El Propósito Que Ya Llevas Dentro
              </h2>

              <h3 className="font-circular font-bold text-xl md:text-2xl text-white/90 mb-6">
                El Mapa Del Tesoro Escondido
              </h3>

              <p className="font-circular text-white/80 mb-8 leading-relaxed">
                La herramienta que ha ayudado a cientos de mamás a descubrir que tienen algo único y valioso que compartir.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <p className="font-circular font-semibold text-white/90">
                  En solo 10 minutos descubrirás:
                </p>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-circular text-white/90">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Emotional hook */}
              <div className="bg-white/10 rounded-2xl p-6 mb-8">
                <p className="font-reckless text-lg text-white/90 italic">
                  &quot;Este es el espejo que te muestra lo que otros ya ven en ti pero tú no puedes ver.&quot;
                </p>
              </div>

            </motion.div>

            {/* Right column - Form and mockup */}
            <motion.div variants={itemVariants}>
              {/* Lead magnet mockup */}
              <div className="relative mb-8">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Image
                          src="/images/icon.svg"
                          alt="El Mapa del Tesoro"
                          width={48}
                          height={48}
                          className="opacity-80"
                        />
                      </div>
                      <h4 className="font-reckless text-2xl text-white mb-2">El Mapa del</h4>
                      <h4 className="font-reckless text-3xl text-peach">Tesoro Escondido</h4>
                      <p className="font-circular text-white/60 text-sm mt-4">
                        Tu guía de 10 minutos
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-coral/40 organic-shape-1" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-peach/40 organic-shape-2" />
              </div>

              {/* Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
  <Link href="/quiz" className="block">
    <Button variant="primary" size="xl" className="w-full bg-golden hover:bg-golden/90 text-gray-800">
      MUÉSTRAME MI TESORO ESCONDIDO
    </Button>
  </Link>
  <p className="font-circular text-xs text-white/60 text-center">
    🔒 Tu información está segura. No spam, solo valor.
  </p>
</div>
              </div>
            </motion.div>
          </div>

          {/* Closing line - centered across full width */}
          <motion.p
            variants={itemVariants}
            className="font-reckless text-2xl md:text-3xl lg:text-4xl text-peach text-center mt-12"
          >
            Este es tu permiso para brillar.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
