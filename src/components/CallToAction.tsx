import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-boost-purple" id="get-started">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Contact us today and book a free meeting to talk about your project.
        </p>
        <Button
          className="bg-white text-boost-purple hover:bg-gray-100 text-lg px-8 py-6"
          onClick={() => {
            const contactChatElement = document.getElementById(
              "contact-chat-button"
            );

            if (contactChatElement) {
              (contactChatElement as HTMLButtonElement).click();
            }
          }}
        >
          Contact Now <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
