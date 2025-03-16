import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce para Boutique Local",
    description:
      "Plataforma de ventas online con pasarela de pagos integrada y gestión de inventario",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    slug: "ecommerce-boutique",
  },
  {
    id: 2,
    title: "Sistema de Gestión de Citas Médicas",
    description:
      "CRM para clínica especializada con calendario y recordatorios automáticos",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Vue.js", "Firebase", "Express", "Twilio"],
    slug: "sistema-citas-medicas",
  },
  {
    id: 3,
    title: "App de Entrega a Domicilio",
    description:
      "Aplicación móvil para restaurante local con seguimiento de pedidos en tiempo real",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    slug: "app-entregas",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-boost-gray text-lg max-w-3xl mx-auto">
            Estos son algunos de los proyectos que hemos desarrollado
            recientemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-boost-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-boost-gray mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-boost-lightPurple text-boost-purple text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-boost-purple font-medium">
                    <span>Ver detalles</span>
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
