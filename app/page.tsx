import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
import Introduction from "../components/Introduction";
import Guide from "@/components/Guide";
import Guide2 from "@/components/Guide2";
import Pricing from "@/components/Pricing";
import JetSetGo from "@/components/JetSetGo"


export default function Home() {
  return (
    <main className="relative min-h-screen">

      <Navbar />
      <JetSetGo/>
      <Introduction />
      <MapSection />
      <Guide />
      <Guide2 />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
