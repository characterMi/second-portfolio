import { arrow } from "../assets";

const BackToTop = () => (
  <div className="absolute top-[10px] right-[15px]">
    <button
      className="hidden sm:block black-gradient px-[10px] py-[5px] rounded font-bold"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      Back to top
    </button>
    <button
      className="block sm:hidden black-gradient rounded font-bold"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="w-[30px] h-[30px]" src={arrow} alt="Arrow Up" />
    </button>
  </div>
);

export default BackToTop;
