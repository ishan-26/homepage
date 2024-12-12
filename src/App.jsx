import './App.css';
import Features from './components/Features';
import LampDemo from './components/LampDemo';
import BackgroundBeamsWithCollisionDemo from './components/Beam';
import HeroScrollDemo from './components/Home';
import FloatingNavDemo from './components/Navbar';
import Contact from './components/Contact';

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

      <div classname="flex flex-col justify-center items-start text-white max-w-5xl mx-auto"> 
         <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Get in touch</p>
        <h3 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Contact.</h3>
        <Contact/> 
      </div>
            

    </div>
  );
}

export default App;
