import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <CTA />
      <Projects />
      <WhyChoose />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
