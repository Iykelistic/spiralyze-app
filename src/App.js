import React from "react";
import Intervention from "./components/Intervention";
import Images from "./components/Images";
import CarouselSlider from "./components/Carousel";
import Organize from "./components/Organize";
import Video from "./components/Video";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Intervention />
      <Images />
      <CarouselSlider />
      <Organize />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
