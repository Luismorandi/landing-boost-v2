import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, CheckCircle2, Users, Code } from "lucide-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import ContactChat from "../components/ContactChat";

// Mock projects data
const projectsData = [
  {
    id: 1,
    slug: "ecommerce-boutique",
    title: "E-Commerce para Boutique Local",
    description:
      "Plataforma de ventas online con pasarela de pagos integrada y gestión de inventario",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    client: "Boutique Eleganza",
    duration: "6 semanas",
    year: 2023,
    category: "E-commerce",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    challenge:
      "La boutique necesitaba una solución para vender sus productos de moda exclusiva online durante la pandemia, sin perder la experiencia personalizada que ofrecían en tienda física.",
    solution:
      "Creamos una plataforma de e-commerce elegante y fácil de usar, con un diseño que refleja la personalidad de la marca. Integramos Stripe para pagos seguros y un sistema de inventario para mantener control sobre el stock disponible.",
    results: [
      "Aumento del 45% en ventas durante el primer trimestre",
      "Expansión a nuevos mercados fuera de la ciudad",
      "Reducción de costos operativos en un 30%",
      "Mejora en la experiencia de compra según encuestas a clientes",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      "https://images.unsplash.com/photo-1698348999098-0e2a384c4e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: 2,
    slug: "sistema-citas-medicas",
    title: "Sistema de Gestión de Citas Médicas",
    description:
      "CRM para clínica especializada con calendario y recordatorios automáticos",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    client: "Clínica MediSalud",
    duration: "10 semanas",
    year: 2023,
    category: "CRM / Salud",
    technologies: ["Vue.js", "Firebase", "Express", "Twilio"],
    challenge:
      "La clínica enfrentaba problemas con cancelaciones de última hora y tenía dificultades para gestionar eficientemente las citas de sus múltiples especialistas.",
    solution:
      "Diseñamos un sistema integral de gestión de citas que permite reservas online, envía recordatorios automáticos por SMS/email, y facilita a los médicos ver su agenda desde cualquier dispositivo.",
    results: [
      "Reducción del 60% en cancelaciones de última hora",
      "Aumento del 25% en la ocupación de horarios disponibles",
      "Mejora en la satisfacción de pacientes y personal médico",
      "Incremento del 15% en nuevos pacientes gracias a la facilidad de reserva online",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: 3,
    slug: "app-entregas",
    title: "App de Entrega a Domicilio",
    description:
      "Aplicación móvil para restaurante local con seguimiento de pedidos en tiempo real",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    client: "Sabores Caseros",
    duration: "8 semanas",
    year: 2022,
    category: "Aplicación Móvil",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    challenge:
      "El restaurante quería ofrecer entregas directas sin depender de plataformas de terceros que cobraban altas comisiones y no permitían personalizar la experiencia.",
    solution:
      "Desarrollamos una aplicación móvil personalizada que permite a los clientes ordenar directamente, dar seguimiento en tiempo real a sus pedidos y acumular puntos de lealtad.",
    results: [
      "Ahorro del 25% en comisiones que antes pagaban a plataformas externas",
      "Aumento del 30% en pedidos recurrentes gracias al programa de lealtad",
      "Mejora en tiempos de entrega gracias al sistema de rutas eficientes",
      "Mayor satisfacción del cliente según encuestas de satisfacción",
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      "https://images.unsplash.com/photo-1545016803-a7e357a737e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <p className="text-xl text-gray-600 mb-8">
            El proyecto que buscas no existe o ha sido eliminado.
          </p>
          <Link
            to="/"
            className="text-boost-purple hover:underline font-medium"
          >
            Volver a la página principal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="w-full h-[70vh] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container mx-auto px-6 md:px-10">
              <Link
                to="/#projects"
                className="inline-flex items-center text-white mb-6 hover:text-boost-purple transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span>Volver a Proyectos</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="container mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">
                Descripción del Proyecto
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">El Desafío</h3>
                <p className="text-gray-700">{project.challenge}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">La Solución</h3>
                <p className="text-gray-700">{project.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Resultados</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2
                        className="text-boost-purple mr-3 mt-1 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Detalles del Proyecto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Users className="text-boost-purple mr-3 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Cliente</p>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-boost-purple mr-3 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Duración</p>
                      <p className="text-gray-600">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Tag className="text-boost-purple mr-3 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Categoría</p>
                      <p className="text-gray-600">{project.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Code className="text-boost-purple mr-3 mt-1" size={18} />
                    <div>
                      <p className="font-medium">Tecnologías</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-boost-lightPurple text-boost-purple text-sm px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-boost-purple hover:bg-opacity-90 text-white">
                Solicitar un proyecto similar
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="container mx-auto px-6 md:px-10 py-8">
            <h2 className="text-2xl font-bold mb-6">Imágenes del Proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.additionalImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={img}
                    alt={`${project.title} - imagen ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Projects */}
        <div className="container mx-auto px-6 md:px-10 py-16">
          <h2 className="text-2xl font-bold mb-8">Otros Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link to={`/project/${p.slug}`} key={p.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-boost-purple transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-boost-gray">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
      <ContactChat />
    </>
  );
};

export default ProjectDetail;
