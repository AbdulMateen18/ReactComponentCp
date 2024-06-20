import "./App.css";
import Hotel from "./components/Hotel";
import Navbar from "./components/Navbar";
import Map from "./components/Map";

function App() {
// Main 
  return (
    <>
      <Navbar />
      <div className="flex">
        <Hotel />
        <Map />
      </div>
    </>
  );
}

export default App;
