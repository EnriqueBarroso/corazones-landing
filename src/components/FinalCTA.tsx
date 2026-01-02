import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 px-8 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Lista para el cambio?
        </motion.h2>

        <motion.p 
          className="mt-6 text-lg text-primary-foreground/70 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Reserva tu cita y descubre tu mejor versión
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button 
            variant="secondary" 
            size="lg" 
            className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span>Llamar al Salón</span>
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 pt-12 border-t border-primary-foreground/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-display text-2xl md:text-3xl">3 de Corazones</p>
          <p className="text-sm text-primary-foreground/60 font-body mt-3">
            Carrer de València, 123 · Eixample, Barcelona
          </p>
          <p className="text-sm text-primary-foreground/60 font-body mt-1">
            Lun - Sáb · 10:00 - 20:00
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
