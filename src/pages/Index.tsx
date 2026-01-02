import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSalon from "@/components/AboutSalon";
import ServicesMenu from "@/components/ServicesMenu";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSalon />
        <section id="servicios">
          <ServicesMenu />
        </section>
        <section id="contacto">
          <FinalCTA />
        </section>
      </main>
    </div>
  );
};

export default Index;
