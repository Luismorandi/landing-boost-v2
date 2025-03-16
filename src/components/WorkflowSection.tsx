import { CheckCircle2 } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      number: "1",
      title: "Conversación inicial",
      description:
        "Hablamos sobre tu idea en una reunión gratuita para entender tus necesidades.",
    },
    {
      number: "2",
      title: "Estrategia clara",
      description:
        "Te damos una estrategia clara y un presupuesto sin sorpresas.",
    },
    {
      number: "3",
      title: "Desarrollo rápido",
      description:
        "Desarrollamos rápidamente y con total transparencia, manteniendo comunicación constante.",
    },
    {
      number: "4",
      title: "Lanzamiento",
      description:
        "Tu negocio digital está listo para lanzarse en el menor tiempo posible.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Nuestro proceso está diseñado para ser eficiente y transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-boost-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-boost-gray text-center">
                  {step.description}
                </p>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-boost-lightPurple rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            ¿Por qué elegir BOOST?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">
                  No necesitas conocimientos técnicos
                </h4>
                <p className="text-boost-gray">
                  Hablamos en un lenguaje claro, sin jerga técnica.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Enfoque en el negocio</h4>
                <p className="text-boost-gray">
                  No solo nos importa el código, sino el éxito de tu empresa.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Desarrollo ágil</h4>
                <p className="text-boost-gray">
                  Sin burocracia ni procesos innecesarios.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Soporte a largo plazo</h4>
                <p className="text-boost-gray">
                  Te acompañamos en el crecimiento de tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
