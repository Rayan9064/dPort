import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import {Testimonials} from '../components/Testimonials';
import {HowItWorks} from '../components/HowItWorks';
import {Pricing} from '../components/Pricing';
import {Footer} from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0523] via-[#170b47] to-[#261356]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
