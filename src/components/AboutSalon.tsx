import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const AboutSalon = () => {
  return (
    <section className="py-24 lg:py-32 px-8 bg-off-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <Heart className="w-8 h-8 text-crimson" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h2 
          className="font-display text-4xl md:text-5xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Estilismo en el corazón
          <br />
          del Eixample
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Más que un salón, somos un espacio donde la creatividad y el cuidado personal se encuentran. 
          Cada visita es una experiencia única diseñada para realzar tu belleza natural.
        </motion.p>

        <motion.div 
          className="mt-12 flex justify-center gap-12 md:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-foreground">15+</span>
            <p className="text-sm text-muted-foreground mt-2 font-body tracking-wide uppercase">Años</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-foreground">3K+</span>
            <p className="text-sm text-muted-foreground mt-2 font-body tracking-wide uppercase">Clientes</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-crimson">♥</span>
            <p className="text-sm text-muted-foreground mt-2 font-body tracking-wide uppercase">Pasión</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSalon;
