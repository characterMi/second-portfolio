import { arrow } from "../assets";

const BackToTop = () => (
  <div className="absolute top-[10px] right-[15px] hover:scale-105 transition">
    <button
      className="hidden sm:block border border-tertiary px-[10px] py-[5px] rounded font-bold bg-tertiary/20 focus:scale-105"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Back to top
    </button>
    <button
      className="block sm:hidden rounded font-bold border border-tertiary focus:scale-105"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="w-[30px] h-[30px]" src={arrow} alt="Back to top" loading="lazy" />
    </button>
  </div>
);

export default BackToTop;
