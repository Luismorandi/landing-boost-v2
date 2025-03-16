import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
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
              <Button className="bg-boost-purple hover:bg-opacity-90 text-white text-lg py-6 px-8">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-boost-purple text-boost-purple hover:bg-boost-lightPurple text-lg py-6 px-8"
              >
                See Our Projects
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/dea0e9b8-45da-4998-b0bb-af79cf0b3a65.png"
                alt="Boost digital transformation"
                className="max-w-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
