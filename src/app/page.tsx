import Image from "next/image";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Menu />
    </main>
  );
}
