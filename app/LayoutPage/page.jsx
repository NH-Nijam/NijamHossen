'use client'
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Layout = ({ children }) => {
    const { theme, setTheme } = useTheme();  
    return (
        <div>
            <Navbar />
            <div className="container">
                {children}
                <div className="w-full flex justify-center mb-10">
                    <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={` p-1 rounded-full  hover:scale-125  shadow-2xl shadow-gray-600 right-5 ${theme === 'light' ? 'bg-gray-200':'bg-white text-black'} text-center  duration-700` }>
                        <MdOutlineKeyboardDoubleArrowUp size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Layout;