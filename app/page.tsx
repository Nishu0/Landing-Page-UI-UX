import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Faq } from "@/components/FAQ";
import { Cta } from "@/components/CTA";
import { Pricing } from "@/components/Plan";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
    <Features />
    <Faq />
    <Pricing />
    <Cta />
    <Footer />
    </div>
    </>
  );
}
