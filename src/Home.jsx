import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";

function Home() {
  return ( 
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <About />
      <Pricing />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
    </div>
   );
}

export default Home;