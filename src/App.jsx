import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Work     from "./components/Work";
import Marquee  from "./components/Marquee";
import About    from "./components/About";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0f0e0b", minHeight: "100vh", color: "#f5f0e8" }}>
      <Navbar />
      <Hero />

      {/* Thin ruled divider between hero and work */}
      <div className="px-8">
        <div className="w-full h-px bg-[#2a2820]" />
      </div>

      <Work />
      <Marquee />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
