import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";


import "./App.css"


function App() {
  return (
    <div className="App">
      <div class="bg-image">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
