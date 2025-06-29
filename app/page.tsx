import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import FAQs from "@/components/sections/FAQs";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import PayBills from "@/components/sections/PayBills";
import ShopOnline from "@/components/sections/ShopOnline";
import Wallets from "@/components/sections/Wallets";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Hero />
        <Gallery />
        <Wallets />
        <ShopOnline />
        <PayBills />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
