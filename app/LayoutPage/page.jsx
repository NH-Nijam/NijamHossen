'use client'
import Aos from "aos";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Layout = ({ children }) => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
};

export default Layout;