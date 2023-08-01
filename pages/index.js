import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About.jsx";
import Experience from "@/components/Experience";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// import '@/styles/Home.modulo.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="home" className="relative z-50 bg-[#050816]">
      <div className="absolute -z-50">
        <div className="bg">
          <div className="star-field">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
        </div>
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
        </div>
      </div>
      <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center ">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <div>
        <Contact />
      </div>

      {/* <Tech /> */}
      <div id="team">
        <Works />
      </div>
      {/* <Feedbacks /> */}
      {/* <div className='relative z-0'> */}
      {/* <StarsCanvas /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}
