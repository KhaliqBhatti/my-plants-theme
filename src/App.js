import "./App.css";
import Collection from "./Components/Collection";
import FeaturedPlants from "./Components/FeaturedPlants";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HelpSection from "./Components/HelpSection";
import PlantsCards from "./Components/PlantsCards";
// import Navbar from "./Components/Navbar";
import ShippingCards from "./Components/ShippingCards";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <ShippingCards/>
      <PlantsCards/>
      <FeaturedPlants/>
      <HelpSection/>
      <Testimonials/>
      <Collection/>
      <Footer/>
    </>
  );
}

export default App;
