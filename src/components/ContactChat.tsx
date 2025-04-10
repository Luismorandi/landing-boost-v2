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
  const [isLoading, setIsLoading] = useState(false);

  const TO_EMAIL = import.meta.env.VITE_EMAIL_JS_EMAIL_TO;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_EMAIL_JS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAIL_JS_USER_ID,
          template_params: {
            from_name: name,
            reply_to: email,
            to_email: TO_EMAIL,
            message: message,
          },
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      } else {
        throw new Error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? "hidden" : "block"}`}
      >
        <button
          id="contact-chat-button"
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
            <h3 className="font-bold">How can we help you?</h3>
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
              Hi! Thanks for reaching out. Please leave your conctact info and
              your message — we’ll get back to you shortly!
            </div>

            {isSent && (
              <div className="bg-green-100 text-green-800 rounded-lg p-3 mt-3">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="space-y-3">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Textarea
                placeholder="How can we help you?"
                className="resize-none"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="bg-boost-purple hover:bg-opacity-90 w-full"
                disabled={isLoading}
              >
                <Send size={16} className="mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactChat;
