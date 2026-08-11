import StarsCanvas from "./components/StarsCanvas";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import MyNavbar from "./sections/MyNavbar";
import Tech from "./sections/Tech";
import Work from "./sections/Work";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl ">
        <div className="mb-30 z-20" >
          <MyNavbar />
          <Hero />
        </div>
        <div className="relative -z-80">
          <StarsCanvas />
          <About />
          <Experience />
          <Tech />
          <Work />
          <Feedback />
        </div>
        <Contact />
      </div>

    </>
  )
}

export default App
