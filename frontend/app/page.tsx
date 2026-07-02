import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import TopDestinations from "@/components/TopDestinations";
import TourPackages from "@/components/TourPackages";
import BookingSteps from "@/components/BookingSteps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <TopDestinations />
      <TourPackages />
      <BookingSteps />
      <Contact />
      <Footer />
    </main>
  );
}
