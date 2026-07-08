import { Routes, Route } from "react-router-dom";

import Footer from "./Components/FooterComponent/Footer.tsx";
import Hero from "./Components/HeroComponent/Hero.tsx";
import WishesWall from "./Components/WishesWallComponent/WishesWall.tsx";
import Gallery from "./Components/GalleryComponent/Gallery.tsx";
import Countdown from "./Components/CountdownComponent/Countdown.tsx";
import Loader from "./Components/LoaderComponent/Loader.tsx";
import StoryTimeline from "./Components/StoryTimelineComponent/StoryTimeline.tsx";
import GoldParticles from "./Components/Gold Particle BackgroundComponent/Gold Particle Background.tsx";
import MusicPlayer from "./Components/Music BackgroundComponent/Music Background.tsx";
import WeddingDetails from "./Components/WeddingDetailsComponent/WeddingDetails.tsx";
import Location from "./Components/LocationComponent/Location.tsx";

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