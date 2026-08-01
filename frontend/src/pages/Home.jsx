import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;