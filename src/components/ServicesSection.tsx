import { Rocket, Users, Brain, CreditCard } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Rocket size={36} className="text-boost-purple" />,
      title: "Launch Your Business Stress-Free",
      description:
        "We handle all the tech so you can focus on what really matters: your business.",
    },
    {
      icon: <CreditCard size={36} className="text-boost-purple" />,
      title: "Platform Ready in Record Time",
      description:
        "Get your platform up and running as fast as possible without overspending. We optimize time and cost.",
    },
    {
      icon: <Users size={36} className="text-boost-purple" />,
      title: "User Experience Comes First",
      description:
        "We build digital products your customers will love to use—we care about more than just coding.",
    },
    {
      icon: <Brain size={36} className="text-boost-purple" />,
      title: "Ongoing Support",
      description:
        "We don’t leave you hanging. Get continuous support and improvements with an affordable subscription.",
    },
  ];

  return (
    <section className="section-padding bg-boost-lightPurple">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Value Proposition
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            At BOOST, we help you turn your idea into a digital platform—without
            having to worry about the tech.
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
