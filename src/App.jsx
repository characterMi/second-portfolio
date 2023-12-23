import {
  About,
  Contact,
  Skills,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  BackToTop,
} from "./components";

const App = () => (
  <>
    <div className="relative z-0 bg-primary">
      <div className="alert fixed w-[100%] sm:w-[400px] md:w-[600px] tertiary-gradient z-[500] top-0 sm:top-[2rem] right-[-100%] p-8 text-white duration-500 text-[24px] rounded-0 sm:rounded-[20px] shadow-alert" />
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
      </div>
      <div className="border-t-[2px] border-gray-800 relative">
        <Footer />
        <BackToTop />
      </div>
    </div>
  </>
);

export default App;
