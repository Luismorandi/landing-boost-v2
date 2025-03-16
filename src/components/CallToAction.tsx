import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-boost-purple">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contáctanos hoy mismo y agenda una reunión gratuita para hablar sobre
          tu proyecto.
        </p>
        <Button className="bg-white text-boost-purple hover:bg-gray-100 text-lg px-8 py-6">
          Contactar ahora <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
