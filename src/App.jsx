import './App.css';
import Features from './components/Features';
import LampDemo from './components/LampDemo';
import BackgroundBeamsWithCollisionDemo from './components/Beam';
import HeroScrollDemo from './components/Home';
import FloatingNavDemo from './components/Navbar';

function App() {
  return (
    <div className="bg-black min-h-screen w-full">

      {/* Navbar */}
      <FloatingNavDemo />

      {/* Hero Section */}
      <HeroScrollDemo />

      {/* Lamp Demo Section */}
      <div id="lamp">
        <LampDemo />
      </div>


      {/* Features Section */}
      <Features />

      {/* Cover Section */}
      <div id="beam">
      <BackgroundBeamsWithCollisionDemo />
      </div>
    </div>
  );
}

export default App;
