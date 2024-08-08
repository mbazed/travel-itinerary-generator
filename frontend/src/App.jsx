/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationInput from "./components/DestinationInput";
import GenerateButton from "./components/GenerateButton";

const App = () => {
  const [destination, setDestination] = useState("");
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <DestinationInput
        destination={destination}
        setDestination={setDestination}
      />
      <GenerateButton title="Generate Itinerary" />
      <div id="itinerary-display">
        
      </div>
      <footer>
        <p className="p-2">&copy; 2024 Travel Itinerary Generator</p>
      </footer>
    </>
  );
};
export default App;
