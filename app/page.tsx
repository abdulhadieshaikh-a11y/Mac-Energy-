import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TermsMarquee from "@/components/TermsMarquee";
import Services from "@/components/Services";
import Infrastructure from "@/components/Infrastructure";
import Lab from "@/components/Lab";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TermsMarquee />
      <Services />
      <Infrastructure />
      <Lab />
      <Process />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
