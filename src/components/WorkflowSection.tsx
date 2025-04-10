import { CheckCircle2 } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Conversation",
      description:
        "We discuss your idea in a free meeting to understand your needs.",
    },
    {
      number: "2",
      title: "Clear Strategy",
      description:
        "We provide a clear strategy and a budget with no surprises.",
    },
    {
      number: "3",
      title: "Fast Development",
      description:
        "We develop quickly and transparently, keeping communication open at all times.",
    },
    {
      number: "4",
      title: "Launch",
      description:
        "Your digital business is ready to launch in the shortest time possible.",
    },
  ];

  return (
    <section id="how-we-work" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Our process is designed to be efficient and transparent.{" "}
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
            Why Choose BOOST?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">
                  No Technical Knowledge Needed
                </h4>
                <p className="text-boost-gray">
                  We speak in clear, jargon-free language.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Business-First Approach</h4>
                <p className="text-boost-gray">
                  We care not just about code, but about the success of your
                  business.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Agile Development</h4>
                <p className="text-boost-gray">
                  No bureaucracy or unnecessary processes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-boost-purple mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Long-Term Support</h4>
                <p className="text-boost-gray">
                  We're with you as your business grows.
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
