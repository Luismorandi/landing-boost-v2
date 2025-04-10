import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-3xl font-bold text-boost-purple">
            boost<span className="text-boost-green text-4xl">;</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 hover:text-boost-purple transition-colors"
          >
            About Us
          </Link>
          <Link
            to="our-solution"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 hover:text-boost-purple transition-colors"
          >
            Our Solution
          </Link>
          <Link
            to="how-we-work"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 hover:text-boost-purple transition-colors"
          >
            How we work
          </Link>
          <Link
            to="get-started"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-800 hover:text-boost-purple transition-colors"
          >
            Get Started
          </Link>
        </div>

        <Button
          className="hidden md:flex bg-boost-purple hover:bg-opacity-90 text-white"
          onClick={() => {
            const contactChatElement = document.getElementById(
              "contact-chat-button"
            );

            if (contactChatElement) {
              (contactChatElement as HTMLButtonElement).click();
            }
          }}
        >
          Contact Us
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md pt-2 pb-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/#about"
              className="text-gray-800 hover:text-boost-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/#how-it-works"
              className="text-gray-800 hover:text-boost-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/#pricing"
              className="text-gray-800 hover:text-boost-purple transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Pricing
            </Link>
            <Button
              className="bg-boost-purple hover:bg-opacity-90 text-white w-full "
              onClick={() => {
                const contactChatElement = document.getElementById(
                  "contact-chat-button"
                );

                if (contactChatElement) {
                  (contactChatElement as HTMLButtonElement).click();
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
