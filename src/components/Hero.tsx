import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroModel from "@/assets/hero-model.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Image */}
      <motion.div 
        className="lg:w-1/2 h-[50vh] lg:h-screen relative overflow-hidden"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          src={heroModel} 
          alt="Modelo con estilo de pelo espectacular"
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
      </motion.div>

      {/* Right side - Content */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-background">
        <div className="max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">
              Barcelona · Eixample
            </span>
          </motion.div>

          <motion.h1 
            className="font-display text-5xl md:text-6xl lg:text-7xl mt-6 leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tu estilo,
            <br />
            <span className="relative">
              nuestra
              <span className="text-crimson"> pasión</span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-[3px] bg-crimson"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="mt-8 text-lg text-muted-foreground font-body leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            En 3 de Corazones transformamos tu imagen con un enfoque artístico y personalizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <Button variant="default" size="lg" className="group">
              <span>Reservar Cita</span>
              <motion.span 
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
