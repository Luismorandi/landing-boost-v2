import { Rocket, Users, Brain, CreditCard } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Rocket size={36} className="text-boost-purple" />,
      title: "Lanza tu negocio sin preocupaciones",
      description:
        "Nos encargamos de toda la parte técnica para que te enfoques en lo que realmente importa: tu negocio.",
    },
    {
      icon: <CreditCard size={36} className="text-boost-purple" />,
      title: "Plataforma en tiempo récord",
      description:
        "Tu plataforma lista en el menor tiempo posible y sin gastar de más. Optimizamos tiempos y costos.",
    },
    {
      icon: <Users size={36} className="text-boost-purple" />,
      title: "Experiencia del usuario prioritaria",
      description:
        "Creamos productos digitales que tus clientes amarán usar, no solo nos preocupamos por el código.",
    },
    {
      icon: <Brain size={36} className="text-boost-purple" />,
      title: "Soporte continuo",
      description:
        "No te dejamos solo. Ofrecemos soporte y mejoras continuas con una suscripción económica.",
    },
  ];

  return (
    <section className="section-padding bg-boost-lightPurple">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Propuesta de Valor
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            En BOOST, te ayudamos a convertir tu idea en una plataforma digital
            sin que tengas que preocuparte por la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-boost-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
