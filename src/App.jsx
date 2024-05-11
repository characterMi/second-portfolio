import { memo, useEffect, useState } from "react";
import {
  About,
  BackToTop,
  Contact,
  Footer,
  Hero,
  Navbar,
  Skills,
  Tech,
  Works,
} from "./components";
import ScreenLoader from "./components/ScreenLoader";

const Components = () => (
  <>
    <div className="relative z-0 bg-primary">
      <div className="alert fixed w-[100%] sm:w-[400px] md:w-[600px] tertiary-gradient z-[500] top-0 sm:top-[2rem] right-[-100%] p-8 text-white duration-500 text-[24px] rounded-0 sm:rounded-[20px] shadow-alert" />
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </header>
      <About />
      <Skills />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
      </div>
      <footer className="border-t-[2px] border-gray-800 relative">
        <Footer />
        <BackToTop />
      </footer>
    </div>
  </>
)

const MemoedComponents = memo(Components)

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true)

  useEffect(() => {
    window.addEventListener("load", handleLoad)

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  return (
    <>
      {isLoaded
        ? <MemoedComponents />
        : <ScreenLoader />
      }
    </>
  );
}

export default App;
