import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ toggle, setToggle }) => (
    <div className="md:hidden flex flex-1 justify-end items-center">
        <div
            className={`w-10 h-10 z-[100000001] relative after:block after:w-[80%] after:bg-white after:absolute after:top-[40%] after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:m-auto before:block before:w-[80%] before:bg-white before:absolute before:top-[60%] before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:m-auto after:transition before:transition ${toggle && "sidebarOpen after:rotate-45 before:-rotate-45"}`}
            onClick={() => setToggle((prev) => !prev)}
        />

        <AnimatePresence mode="wait">{toggle && <Sidebar setToggle={setToggle} />}</AnimatePresence>
    </div>
)

export default MobileSidebar