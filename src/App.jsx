import StarsCanvas from "./components/StarsCanvas";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import MyNavbar from "./sections/MyNavbar";
import Tech from "./sections/Tech";
import Work from "./sections/Work";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="container mx-auto max-w-7xl ">
        <div className="mb-30 z-20" >
          <MyNavbar />
          <Hero />
        </div>
        {!isMobile && (
          <div className="relative -z-80 top-[0px]">
            <StarsCanvas />
          </div>
        )}
        <About />
        <Tech />
        <Work />
        <Contact />
      </div>

    </>
  )
}

export default App
