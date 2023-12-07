import { heart } from "../assets";

const Footer = () => {
  return (
    <div className="h-[50px] flex justify-center items-center">
      <h3 className="text-secondary flex items-center xs:text-[18px] text-[14px]">
        Made with{" "}
        <img
          src={heart}
          alt="Love"
          className="w-[30px] h-[30px] object-contain"
        />{" "}
        by Abolfazl Taghadosi
      </h3>
    </div>
  );
};

export default Footer;
