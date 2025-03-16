import { CheckCircle2, Clock, Laptop, Database } from "lucide-react";

const PricingSection = () => {
  const services = [
    {
      icon: <Laptop size={32} className="text-boost-purple" />,
      name: "Landing Page",
      description: "página web básica",
      time: "10-15 horas",
    },
    {
      icon: <Database size={32} className="text-boost-purple" />,
      name: "Aplicación básica",
      description: "login + funcionalidad principal",
      time: "50-60 horas",
    },
    {
      icon: <Database size={32} className="text-boost-purple" />,
      name: "CRM o plataforma",
      description: "solución más avanzada",
      time: "100-120 horas",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios y Precios Estimados
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Ofrecemos paquetes claros con precios transparentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <p className="text-boost-gray mb-6">({service.description})</p>
              <div className="flex items-center text-boost-gray mb-4">
                <Clock className="mr-2" size={18} />
                <span>{service.time}</span>
              </div>
              <div className="pt-4 border-t">
                <p className="flex items-center text-gray-700 mb-2">
                  <CheckCircle2 className="text-boost-purple mr-2" size={18} />
                  <span>Desarrollo ágil</span>
                </p>
                <p className="flex items-center text-gray-700 mb-2">
                  <CheckCircle2 className="text-boost-purple mr-2" size={18} />
                  <span>Diseño responsivo</span>
                </p>
                <p className="flex items-center text-gray-700">
                  <CheckCircle2 className="text-boost-purple mr-2" size={18} />
                  <span>Soporte técnico</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-boost-lightPurple rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            Suscripción mensual para soporte y mejoras
          </h3>
          <p className="text-boost-gray">
            Ofrecemos planes de mantenimiento a bajo costo que te permiten
            seguir mejorando tu plataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
