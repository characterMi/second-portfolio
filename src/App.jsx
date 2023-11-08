import { About, Contact, Skills, Hero, Navbar, Tech, Works, StarsCanvas, Footer, BackToTop } from "./components"
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Skills />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="border-t-[2px] border-gray-800 relative">
            <Footer />
            <BackToTop />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
