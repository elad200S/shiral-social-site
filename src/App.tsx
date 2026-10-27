import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLenis } from "./lib/useLenis";

export default function App() {
  useLenis();

  return (
    <>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
