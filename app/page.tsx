import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Differentials } from "@/components/sections/differentials";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Guarantees } from "@/components/sections/guarantees";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Differentials />
        <About />
        <Projects />
        <Guarantees />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
