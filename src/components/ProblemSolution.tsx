import { CheckCircle2, AlertCircle } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "No entienden los términos técnicos y se sienten perdidos.",
    "Las empresas de desarrollo solo programan lo que se les pide, sin pensar en el negocio.",
    "Se crean soluciones demasiado complejas cuando algo más simple funcionaría.",
    "Se pierde tiempo y dinero en desarrollos innecesarios.",
  ];

  const solutions = [
    "Hablamos en un lenguaje claro y sin tecnicismos.",
    "Desarrollamos rápido y sin desperdiciar recursos.",
    "Nos aseguramos de que tu producto sea fácil de usar y atractivo para tus clientes.",
    "Te ofrecemos soporte continuo para que tu negocio siga creciendo.",
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            El Problema y Nuestra Solución
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Muchas personas con ideas de negocio quieren crear productos
            digitales, pero se encuentran con obstáculos que les impiden
            avanzar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problem Section */}
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
              <AlertCircle className="mr-2" /> El Problema
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex">
                  <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Section */}
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center">
              <CheckCircle2 className="mr-2" /> Nuestra Solución
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex">
                  <CheckCircle2 className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
