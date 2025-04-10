import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-scroll";

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
              we help you turn your idea into a digital platform—without having
              to worry about the tech.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="text-gray-400 mr-3" />
                <a
                  href="mailto:hello@boost-withus.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@boost-withus.com
                </a>
              </div>

              <div className="flex items-center">
                <MapPin size={18} className="text-gray-400 mr-3" />
                <span className="text-gray-400">
                  From the World, for the World.
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Landing Pages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WebApps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CRM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  E-commerce
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="our-solution"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Solution
                </Link>
              </li>
              <li>
                <Link
                  to="how-we-work"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How we works
                </Link>
              </li>
              <li>
                <Link
                  to="get-started"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and digital business tips.
            </p>
            <div className="flex">
              <Input
                placeholder="Your email"
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
