import { useState } from "react";
import { Send, X, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Simulate sending message
    setTimeout(() => {
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1000);
  };

  return (
    <>
      {/* Chat Bubble */}
      <div
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? "hidden" : "block"}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-boost-purple text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
          <MessageSquare size={24} />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="bg-boost-purple text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">¿En qué podemos ayudarte?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 flex-grow overflow-auto bg-gray-50">
            <div className="bg-boost-lightPurple rounded-lg p-3 mb-3 inline-block">
              ¡Hola! Gracias por contactarnos. Por favor, déjanos tus datos y tu
              mensaje. ¡Te responderemos a la brevedad!
            </div>

            {isSent && (
              <div className="bg-green-100 text-green-800 rounded-lg p-3 mt-3">
                ¡Gracias por tu mensaje! Te contactaremos pronto.
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="space-y-3">
              <Input
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="¿En qué podemos ayudarte?"
                className="resize-none"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-boost-purple hover:bg-opacity-90 w-full"
              >
                <Send size={16} className="mr-2" /> Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactChat;
