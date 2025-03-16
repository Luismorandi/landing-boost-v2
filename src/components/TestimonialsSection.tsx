import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María Rodríguez",
    company: "EcommerceBoost",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    testimonial:
      "Boost transformó mi idea de tienda online en una realidad en tiempo récord. Su forma de comunicarse sin tecnicismos fue refrescante y me permitió entender todo el proceso.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    company: "HealthTech Startup",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    testimonial:
      "Después de malas experiencias con otras agencias, encontrar a Boost fue un alivio. Entendieron exactamente lo que necesitábamos y entregaron incluso más de lo que esperábamos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Gómez",
    company: "EventPro",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial:
      "Mi plataforma de gestión de eventos quedó perfecta. El equipo de Boost no solo desarrolló la aplicación, sino que aportó ideas valiosas para mejorar la experiencia de usuario.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-boost-lightPurple">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Descubre por qué nuestros clientes confían en BOOST para sus
            proyectos digitales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                    {[...Array(5 - testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star key={i} size={20} className="text-gray-300" />
                      )
                    )}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-boost-gray">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            >
              <ChevronLeft size={24} className="text-boost-purple" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            >
              <ChevronRight size={24} className="text-boost-purple" />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-boost-purple" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
