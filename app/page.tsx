import Hero from "@/components/hero";
import CruiseDetails from "@/components/cruise-details";
import CelebrationHighlights from "@/components/celebration-highlights";
import Itinerary from "@/components/itinerary";
import Booking from "@/components/booking";
import TravelTips from "@/components/travel-tips";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import Navigation from "@/components/navigation";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <Hero />
      <CruiseDetails />
      <CelebrationHighlights />
      <Itinerary />
      <Booking />
      <TravelTips />
      {/* <Newsletter /> */}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
