import {
  About,
  Aurora,
  BackToTop,
  Contact,
  CurveText,
  Footer,
  Hero,
  Meteor,
  Navbar,
  Skills,
  Tech,
  Works
} from "./components";

const App = () => (
  <div className="relative z-0 bg-primary overflow-x-hidden">
    <div className="alert fixed w-[100%] sm:w-[400px] md:w-[600px] tertiary-gradient z-[500] top-0 sm:top-[2rem] right-[-100%] p-8 text-white duration-500 text-[24px] rounded-0 sm:rounded-[20px] shadow-alert" />
    <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <div className="h-[80px]" />
      <Hero />
    </header>
    <About />
    <Skills />
    <Tech />
    <Works />
    <CurveText />
    <section className="relative z-0">
      <Meteor />
      <Contact />
      <Aurora />
      <footer className="relative">
        <Footer />
        <BackToTop />
      </footer>
    </section>
  </div>
);

export default App;
