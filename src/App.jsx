import AppointmentBookingSystem from "./components/Appoinments/AppointmentBookingSystem";

import BlogSection from "./components/BlogSection";
import CollegeSummaryLocation from "./components/CollegeSummaryLocation";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import InstituteSection from "./components/InstituteSection";
import InteractivePortfolio from "./components/InteractivePortfolio";
import MockupPhone from "./components/MockupPhone";
import MusicPlayer from "./components/MusicPlayer";
import ScrollProgressWithTheme from "./components/ScrollProgressWithTheme";
import SkillsSection from "./components/SkillsSection";
import Slider from "./components/Slider";
import TestimonialSection from "./components/TestimonialSection";
import TimelineSection from "./components/TimelineSection";
import TimeSection from "./components/TimeSection";

function App() {
  return (
    <>
      {/* <ScrollProgressWithTheme /> */}
      <Header />

      <SkillsSection />
      <InstituteSection />
      <TimelineSection />
      <TestimonialSection />
      <Gallery />
      <Slider />
      <BlogSection />
      <CollegeSummaryLocation />

      <AppointmentBookingSystem />
      <TimeSection />
      <MusicPlayer />
      <ContactForm />
      <InteractivePortfolio />
      <MockupPhone />
      <Footer />
    </>
  );
}

export default App;
