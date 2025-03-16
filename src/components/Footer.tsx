import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="text-3xl font-bold text-white">
                boost<span className="text-boost-green text-4xl">;</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Te ayudamos a convertir tu idea en una plataforma digital sin que
              tengas que preocuparte por la tecnología.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-3" />
                <a
                  href="mailto:info@boostdev.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@boostdev.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-gray-400 mr-3" />
                <a
                  href="tel:+123456789"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="text-gray-400 mr-3" />
                <span className="text-gray-400">Argentina, para el mundo.</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Aplicaciones Web
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CRM Personalizado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cómo Trabajamos
                </Link>
              </li>
              <li>
                <Link
                  to="/#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Boletín Informativo</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir nuestras últimas novedades y consejos
              sobre negocios digitales.
            </p>
            <div className="flex">
              <Input
                placeholder="Tu correo electrónico"
                className="bg-gray-800 text-white border-gray-700 focus:border-boost-purple"
              />
              <Button className="bg-boost-purple hover:bg-opacity-90 ml-2">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} BOOST. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
