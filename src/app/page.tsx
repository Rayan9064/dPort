// import { Header } from "../components/Header"
import { Hero } from "../components/home/Hero"
import { Features } from '../components/home/Features';
import { Stats } from '../components/home/Stats';
import {Testimonials} from '../components/home/Testimonials';
import {HowItWorks} from '../components/home/HowItWorks';
import {Pricing} from '../components/home/Pricing';
// import {Footer} from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0523] via-[#170b47] to-[#261356]">
      {/* <Header /> */}
      <main>
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
