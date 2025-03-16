import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProblemSolution from "../components/ProblemSolution";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import WorkflowSection from "../components/WorkflowSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ProjectsSection from "../components/ProjectsSection";
import PriceCalculator from "../components/PriceCalculator";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import ContactChat from "../components/ContactChat";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <ServicesSection />
      <WorkflowSection />
      <PricingSection />
      <PriceCalculator />
      <TestimonialsSection />
      <ProjectsSection />
      <CallToAction />
      <Footer />
      <ContactChat />
    </>
  );
};

export default Index;
