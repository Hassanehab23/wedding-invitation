import { Routes, Route } from "react-router-dom";

import Footer from "./Components/FooterComponent/Footer";
import Hero from "./Components/HeroComponent/Hero";
import WishesWall from "./Components/WishesWallComponent/WishesWall";
import Gallery from "./Components/GalleryComponent/Gallery";
import Countdown from "./Components/CountdownComponent/Countdown";
import Loader from "./Components/LoaderComponent/Loader";
import StoryTimeline from "./Components/StoryTimelineComponent/StoryTimeline";
import GoldParticles from "./Components/Gold Particle BackgroundComponent/Gold Particle Background";
import MusicPlayer from "./Components/Music BackgroundComponent/Music Background";
import WeddingDetails from "./Components/WeddingDetailsComponent/WeddingDetails";
import Location from "./Components/LocationComponent/Location";

import Admin from "./Pages/Admin";

function Home() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <GoldParticles />
      <Loader />
      <MusicPlayer />

      <div className="relative z-10">
        <Hero />
        <Countdown />
        <StoryTimeline />
        <WeddingDetails />
        <Location />
        <Gallery />
        <WishesWall />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}