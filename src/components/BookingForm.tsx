import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Clock, Scissors, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const services = [
  { id: "corte-clasico", name: "Corte Clásico", price: "35€", duration: "45 min" },
  { id: "corte-creativo", name: "Corte Creativo", price: "50€", duration: "60 min" },
  { id: "corte-barba", name: "Corte + Barba", price: "45€", duration: "60 min" },
  { id: "tinte-global", name: "Tinte Global", price: "55€", duration: "90 min" },
  { id: "mechas-balayage", name: "Mechas / Balayage", price: "85€", duration: "120 min" },
  { id: "hidratacion", name: "Hidratación Profunda", price: "30€", duration: "45 min" },
  { id: "keratina", name: "Keratina", price: "120€", duration: "150 min" },
  { id: "ritual-corazones", name: "Ritual Corazones", price: "65€", duration: "75 min" },
];

const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
];

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !selectedService || !name || !phone) {
      toast({
        title: "Completa todos los campos",
        description: "Por favor, rellena toda la información para reservar tu cita.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "¡Cita reservada!",
      description: `Te esperamos el ${format(date, "d 'de' MMMM", { locale: es })} a las ${selectedTime}.`,
    });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  if (isSubmitted) {
    return (
      <section id="reservar" className="py-24 lg:py-32 px-8 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background p-12 border border-border"
          >
            <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-display text-3xl mb-4">¡Reserva Confirmada!</h3>
            <p className="text-muted-foreground font-body mb-2">
              {selectedServiceData?.name} - {selectedServiceData?.price}
            </p>
            <p className="text-lg font-display">
              {date && format(date, "EEEE, d 'de' MMMM", { locale: es })} a las {selectedTime}
            </p>
            <p className="text-muted-foreground font-body mt-4 mb-8">
              Te enviaremos un recordatorio por SMS.
            </p>
            <Button
              variant="default"
              onClick={() => {
                setIsSubmitted(false);
                setDate(undefined);
                setSelectedTime(undefined);
                setSelectedService(undefined);
                setName("");
                setPhone("");
              }}
            >
              Nueva Reserva
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservar" className="py-24 lg:py-32 px-8 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl">Reserva tu Cita</h2>
          <div className="w-12 h-[2px] bg-crimson mx-auto mt-6" />
          <p className="text-muted-foreground font-body mt-6 max-w-md mx-auto">
            Selecciona el servicio, día y hora que mejor te convenga
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-background p-8 md:p-12 border border-border"
        >
          {/* Service Selection */}
          <div className="mb-10">
            <label className="font-display text-lg flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5" />
              Elige tu servicio
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "p-4 border text-left transition-all duration-300 group",
                    selectedService === service.id
                      ? "border-crimson bg-crimson/5"
                      : "border-border hover:border-foreground/30"
                  )}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={cn(
                        "font-display text-sm md:text-base transition-colors",
                        selectedService === service.id ? "text-crimson" : "group-hover:text-foreground"
                      )}>
                        {service.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-1">
                        {service.duration}
                      </p>
                    </div>
                    <span className="font-display text-sm">{service.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Date Picker */}
            <div>
              <label className="font-display text-lg flex items-center gap-2 mb-4">
                <CalendarIcon className="w-5 h-5" />
                Selecciona el día
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-body h-12 border-border",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "EEEE, d 'de' MMMM", { locale: es }) : "Elige una fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      const day = date.getDay();
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || day === 0; // Disable past dates and Sundays
                    }}
                    locale={es}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Selection */}
            <div>
              <label className="font-display text-lg flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" />
                Elige la hora
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-2 px-3 border text-sm font-body transition-all duration-300",
                      selectedTime === time
                        ? "border-crimson bg-crimson text-white"
                        : "border-border hover:border-foreground/30"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="font-display text-sm mb-2 block">Tu nombre</label>
              <Input
                type="text"
                placeholder="María García"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 border-border font-body"
              />
            </div>
            <div>
              <label className="font-display text-sm mb-2 block">Teléfono</label>
              <Input
                type="tel"
                placeholder="+34 600 000 000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 border-border font-body"
              />
            </div>
          </div>

          {/* Summary & Submit */}
          <div className="border-t border-border pt-8">
            {selectedService && date && selectedTime && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-secondary p-4 mb-6"
              >
                <p className="font-display text-sm text-muted-foreground mb-1">Resumen de tu cita</p>
                <p className="font-display text-lg">
                  {selectedServiceData?.name} · {format(date, "d MMM", { locale: es })} · {selectedTime}
                </p>
              </motion.div>
            )}
            
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Reservando..." : "Confirmar Reserva"}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
