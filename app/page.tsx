import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-bg">
      <Hero />
      <TrustBar />
      <FeatureGrid />
      <HowItWorks />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
