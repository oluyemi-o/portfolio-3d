import About from "./sections/About";
import Hero from "./sections/Hero";
import MyNavbar from "./sections/MyNavbar";

function App() {
  return (

    <div className="container mx-auto max-w-7xl ">
      <div className="mb-30" >
        <MyNavbar />
        <Hero />
      </div>
      <About />

      {/* sections for empty space to test hero */}
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>


  )
}

export default App
