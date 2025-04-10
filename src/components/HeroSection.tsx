import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      className="hero-gradient min-h-screen flex items-center pt-20 pb-10"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800">Start your business,</span>
              <br />
              <span className="text-boost-purple">let's truly make it</span>
              <br />
              <span className="text-boost-purple">happen</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Let's kickstart your MVP with speed and ease. Think of us as your
              go-to tech squad right from the start. Our expertise lies in
              transforming your visions into tangible realities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-boost-purple hover:bg-opacity-90 text-white text-lg py-6 px-8"
                onClick={() => {
                  const contactChatElement = document.getElementById(
                    "contact-chat-button"
                  );

                  if (contactChatElement) {
                    (contactChatElement as HTMLButtonElement).click();
                  }
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <div className="image-carousel">
                {[
                  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740766963/662f1c7a7ad34af693f62505_lamp_left_grydnm.png",
                  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740780411/4444_jdtvuy.png",
                  "https://res.cloudinary.com/dowqgqu9v/image/upload/v1740779529/3333_u9v61o.png",
                ].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Boost digital transformation ${index + 1}`}
                    className="carousel-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
