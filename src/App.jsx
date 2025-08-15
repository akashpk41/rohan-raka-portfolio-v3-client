import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Navbar from "./components/Navbar"; // Updated navbar component
import AppointmentBookingSystem from "./components/Appoinments/AppointmentBookingSystem";
import QuizSection from "./components/QuizSection/QuizSection";
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
import SkillsSection from "./components/SkillsSection";
import Slider from "./components/Slider";
import TestimonialSection from "./components/TestimonialSection";
import TimelineSection from "./components/TimelineSection";
import TimeSection from "./components/TimeSection";
import ScrollProgressBar from "./components/ScrollProgressBar";
import DeveloperProfile from "./components/DeveloperProfile";
import SingleBlogPost from "./components/SingleBlogPost";
import PremiumInteractiveMap from "./components/PremiumInteractiveMap/PremiumInteractiveMap";

// ScrollToTop component to handle automatic scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component
const HomePage = () => {
  return (
    <>
      <Header />
      <ScrollProgressBar />
      <SkillsSection />

      {/* Make sure this section has the correct ID for navbar scrolling */}
      <div id="institute-section">
        <InstituteSection />
      </div>
      <TimelineSection />
      <TestimonialSection />
      <Gallery />
      <Slider />
      <BlogSection />
      <CollegeSummaryLocation />
      <AppointmentBookingSystem />
      <PremiumInteractiveMap />
      <QuizSection />
      <MusicPlayer />

      <TimeSection />
      {/* Make sure this section has the correct ID for navbar scrolling */}
      <div id="contact-section">
        <ContactForm />
      </div>

      <InteractivePortfolio />

      <MockupPhone />
      <Footer />
    </>
  );
};

// Gallery page component
const GalleryPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <Gallery />
        <Slider />
        <MockupPhone />
      </div>
      <Footer />
    </>
  );
};

// Blogs page component
const BlogsPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <BlogSection />
      </div>
      <Footer />
    </>
  );
};

// Blogs page component
const SingleBlogPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <SingleBlogPost />
      </div>
      <Footer />
    </>
  );
};

// Quiz page component
const QuizPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <QuizSection />
      </div>
      <Footer />
    </>
  );
};

// Appointment page component
const AppointmentPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <AppointmentBookingSystem />
        <div className="-mt-20 ">
          <DeveloperProfile />
        </div>
      </div>
      <Footer />
    </>
  );
};

// Music page component (for mobile)
const MusicPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <MusicPlayer />
        <MockupPhone />
      </div>
      <Footer />
    </>
  );
};

// Developer Info page component (for mobile)
const DeveloperInfoPage = () => {
  return (
    <>
      <div className=" ">
        <ScrollProgressBar />
        <DeveloperProfile />
        <MockupPhone />
        <Slider />
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* ScrollToTop component to handle automatic scroll restoration */}
        <ScrollToTop />

        {/* Navbar will be shown on all pages */}
        <Navbar />

        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Gallery route */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Blogs route */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog-post" element={<SingleBlogPage />} />

          {/* Quiz route */}
          <Route path="/quiz" element={<QuizPage />} />

          {/* Appointment booking route */}
          <Route path="/appointment" element={<AppointmentPage />} />

          {/* Music route (mainly for mobile) */}
          <Route path="/music" element={<MusicPage />} />

          {/* Developer info route (mobile only) */}
          <Route path="/developer-info" element={<DeveloperInfoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
