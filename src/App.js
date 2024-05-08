import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import AboutSection from "./components/about-us-section/about-us-section";
import ServicesSection from "./components/services-section/services-section";
import WhyChooseUsSection from "./components/why-choose-section/why-choose-section";
import CallToActionSection from "./components/call-to-action-section/call-to-action-section";
import FeaturesSection from "./components/features-section/features-section";
import FeaturesSecondSection from "./components/features-second-section/features-second-section";
import PortfolioSection from "./components/portfolio-section/portfolio-section";



import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="bg-image">
        <Header />
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CallToActionSection />
      <FeaturesSection/>
      <FeaturesSecondSection/>
      <PortfolioSection/>
    </div>
  );
}

export default App;
