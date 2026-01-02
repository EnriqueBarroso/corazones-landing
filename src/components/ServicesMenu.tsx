import { motion } from "framer-motion";

interface ServiceItem {
  name: string;
  description?: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const services: ServiceCategory[] = [
  {
    title: "Corte",
    items: [
      { name: "Corte Clásico", description: "Corte preciso con acabado pulido", price: "35€" },
      { name: "Corte Creativo", description: "Diseño personalizado y vanguardista", price: "50€" },
      { name: "Corte + Barba", description: "Look completo con perfilado", price: "45€" },
    ],
  },
  {
    title: "Color",
    items: [
      { name: "Tinte Global", description: "Cobertura total con productos premium", price: "55€" },
      { name: "Mechas / Balayage", description: "Técnicas de iluminación personalizadas", price: "85€" },
      { name: "Corrección de Color", description: "Consulta previa incluida", price: "Consultar" },
    ],
  },
  {
    title: "Tratamientos",
    items: [
      { name: "Hidratación Profunda", description: "Recupera la vitalidad del cabello", price: "30€" },
      { name: "Keratina", description: "Alisado y nutrición duradera", price: "120€" },
      { name: "Ritual Corazones", description: "Experiencia exclusiva de spa capilar", price: "65€" },
    ],
  },
];

const ServicesMenu = () => {
  return (
    <section className="py-24 lg:py-32 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl">Nuestros Servicios</h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-6" />
        </motion.div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display text-2xl md:text-3xl mb-8 pb-4 border-b border-border">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="flex justify-between items-baseline group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h4 className="font-display text-lg md:text-xl group-hover:text-crimson transition-colors duration-300">
                          {item.name}
                        </h4>
                        <div className="flex-1 border-b border-dotted border-border/50" />
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-body mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-display text-lg md:text-xl ml-4 text-foreground">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMenu;
