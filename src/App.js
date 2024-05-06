import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";

function App() {

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
    </div>
  );
}

export default App;
