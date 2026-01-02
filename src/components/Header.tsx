import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href="/" className="flex items-center gap-2 group">
        <span className="font-display text-xl tracking-tight">3 de</span>
        <Heart 
          className="w-5 h-5 text-crimson fill-crimson group-hover:scale-110 transition-transform duration-300" 
        />
        <span className="font-display text-xl tracking-tight">nes</span>
      </a>

      <nav className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
        <a href="#servicios" className="hover:text-crimson transition-colors duration-300">
          Servicios
        </a>
        <a href="#contacto" className="hover:text-crimson transition-colors duration-300">
          Contacto
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
