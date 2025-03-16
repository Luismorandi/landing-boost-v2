import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import { Button } from "./ui/button";

type ProjectType = "landing" | "app" | "crm";
type ComplexityType = "simple" | "medium" | "complex";
type ReadinessType = "ready" | "partial" | "idea";

const PriceCalculator = () => {
  const [projectType, setProjectType] = useState<ProjectType>("landing");
  const [complexity, setComplexity] = useState<ComplexityType>("simple");
  const [readiness, setReadiness] = useState<ReadinessType>("ready");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  const baseHours = {
    landing: 10,
    app: 50,
    crm: 100,
  };

  const complexityMultiplier = {
    simple: 1,
    medium: 1.5,
    complex: 2,
  };

  const readinessMultiplier = {
    ready: 0.8,
    partial: 1,
    idea: 1.2,
  };

  const hourlyRate = 35; // USD por hora

  useEffect(() => {
    const hours =
      baseHours[projectType] *
      complexityMultiplier[complexity] *
      readinessMultiplier[readiness];
    setTotalHours(Math.round(hours));
    setTotalPrice(Math.round(hours * hourlyRate));
  }, [projectType, complexity, readiness]);

  return (
    <section
      id="calculator"
      className="calculator-bg section-padding text-white"
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cuál es el mejor plan para mí?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Calcula el costo aproximado de tu proyecto digital con nuestra
            herramienta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            {/* Project Type */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tipo de proyecto</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="landing-range" className="block mb-2">
                    {projectType === "landing" && "Landing Page"}
                    {projectType === "app" && "Aplicación"}
                    {projectType === "crm" && "CRM / Plataforma Avanzada"}
                  </label>
                  <input
                    type="range"
                    id="landing-range"
                    min="0"
                    max="2"
                    step="1"
                    value={
                      projectType === "landing"
                        ? 0
                        : projectType === "app"
                        ? 1
                        : 2
                    }
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val === 0) setProjectType("landing");
                      else if (val === 1) setProjectType("app");
                      else setProjectType("crm");
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Landing</span>
                    <span>App</span>
                    <span>CRM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complexity */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Complejidad</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="complexity-range" className="block mb-2">
                    {complexity === "simple" && "Simple"}
                    {complexity === "medium" && "Media"}
                    {complexity === "complex" && "Compleja"}
                  </label>
                  <input
                    type="range"
                    id="complexity-range"
                    min="0"
                    max="2"
                    step="1"
                    value={
                      complexity === "simple"
                        ? 0
                        : complexity === "medium"
                        ? 1
                        : 2
                    }
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val === 0) setComplexity("simple");
                      else if (val === 1) setComplexity("medium");
                      else setComplexity("complex");
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Simple</span>
                    <span>Media</span>
                    <span>Compleja</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Readiness */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Estado del proyecto
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="readiness-range" className="block mb-2">
                    {readiness === "ready" && "Ya desarrollado / Listo"}
                    {readiness === "partial" && "Parcialmente desarrollado"}
                    {readiness === "idea" && "Solo idea / Desde cero"}
                  </label>
                  <input
                    type="range"
                    id="readiness-range"
                    min="0"
                    max="2"
                    step="1"
                    value={
                      readiness === "ready"
                        ? 0
                        : readiness === "partial"
                        ? 1
                        : 2
                    }
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val === 0) setReadiness("ready");
                      else if (val === 1) setReadiness("partial");
                      else setReadiness("idea");
                    }}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Ya listo</span>
                    <span>Parcial</span>
                    <span>Desde cero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-boost-purple rounded-full mb-4">
                <Calculator size={32} />
              </div>
              <h3 className="text-2xl font-bold">Plan Recomendado</h3>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold mb-2">
                ${totalPrice}{" "}
                <span className="text-lg font-normal text-gray-400">USD</span>
              </div>
              <p className="text-gray-400">
                Aproximadamente {totalHours} horas de desarrollo
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Base por tipo de proyecto:</span>
                <span className="font-semibold">
                  {baseHours[projectType]} horas
                </span>
              </div>
              <div className="flex justify-between">
                <span>Multiplicador por complejidad:</span>
                <span className="font-semibold">
                  x{complexityMultiplier[complexity]}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Multiplicador por estado:</span>
                <span className="font-semibold">
                  x{readinessMultiplier[readiness]}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-700 flex justify-between">
                <span>Total estimado:</span>
                <span className="font-bold">{totalHours} horas</span>
              </div>
            </div>

            <Button className="w-full mt-8 bg-boost-purple hover:bg-opacity-90 text-white py-6">
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
