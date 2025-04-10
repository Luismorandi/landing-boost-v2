import { CheckCircle2, AlertCircle } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "They don't understand technical terms and feel lost.",
    "Development companies only code what they're told, without considering the business.",
    "Solutions are often overengineered when something simpler would work.",
    "Time and money are wasted on unnecessary development.",
  ];

  const solutions = [
    "We speak in clear, non-technical language.",
    "We develop fast without wasting resources.",
    "We make sure your product is easy to use and appealing to your customers.",
    "We provide ongoing support to help your business keep growing.",
  ];
  return (
    <section id="our-solution" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Challenge & Our Solution
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Many aspiring entrepreneurs want to build digital products, but they
            often face obstacles that hold them back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problem Section */}
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
              <AlertCircle className="mr-2" /> The Challenge
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
              <CheckCircle2 className="mr-2" /> Our Solution
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
