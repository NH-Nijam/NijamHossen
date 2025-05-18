'use client'
import { WarpBackground } from "@/components/magicui/warp-background";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const Layout = ({ children }) => {
    return (

        <div className="dark:bg-gray-900 dark:text-white ">
            <WarpBackground beamSize={1} beamDuration={1} className=" p-0 pb-10 border-none">
                <Navbar />
                <div className="container">
                    {children}
                    <div className="w-full flex justify-center mb-10">
                        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={` p-1 rounded-full  hover:scale-125  shadow-2xl shadow-gray-600 right-5 text-center  duration-700`}>
                            <MdOutlineKeyboardDoubleArrowUp size={25} />
                        </button>
                    </div>
                </div>
            </WarpBackground>
        </div>

    );
};

export default Layout;