"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathName = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // default active link

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handler = () => {
    setShow(!show);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShow(false); // close mobile menu on click
  };

  return (
    <header className="sticky top-0 z-10 border-b-2 py-3 bg-gray-900 border-gray-700">
      <nav className="container md:px-10 px-3 h-[60px] lg:h-20 flex items-center justify-between">
        <div>
          <Link href="#">
            <i className="flex gap-2 text-[30px] font-bold ">
              <span className="text-orange-600 ">Nijam</span>
              <span>Hossen</span>
            </i>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="lg:flex hidden gap-10">
          <Link
            onClick={() => handleLinkClick("/")}
            className={`${
              activeLink === "/" ? "dav" : "hover:text-orange-600 underline-orange-600 duration-500 nav"
            }`}
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={() => handleLinkClick("#projects")}
            className={`${
              activeLink === "#projects"
                ? "dav"
                : "hover:text-orange-600 underline-orange-600 duration-500 nav"
            }`}
            href="#projects"
          >
            My Projects
          </Link>

          <Link
            onClick={() => handleLinkClick("#contacts")}
            className={`${
              activeLink === "#contacts"
                ? "dav"
                : "hover:text-orange-600 underline-orange-600 duration-500 nav"
            }`}
            href="#contacts"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex gap-5">
          <button
            onClick={toggleTheme}
            className="px-1 py-1 rounded-2xl hidden lg:flex lg:items-center"
          >
            {isDark ? <IoMoonOutline size={25} /> : <IoIosSunny size={25} />}
          </button>

          <div onClick={handler} className="cursor-pointer relative">
            <FaBars size={30} />

            <div
              className={
                show
                  ? `fixed left-0 top-0 md:w-[40%] w-[70%] h-screen md:px-10 px-3 ease-in duration-500 bg-gray-900`
                  : `fixed left-[-100%] top-0 h-screen ease-out duration-500 bg-gray-900`
              }
            >
              <div onClick={handler} className="cursor-pointer">
                <div className="flex items-center justify-end h-[60px]">
                  <IoClose size={30} />
                </div>
                <div className="mt-16 flex gap-10 flex-col text-2xl">
                  <div
                    className={`flex items-center gap-8 ${
                      activeLink === "/" ? "text-orange-600" : ""
                    }`}
                  >
                    <FaHome />
                    <Link
                      onClick={() => handleLinkClick("/")}
                      href="/"
                      className={`${
                        activeLink === "/" ? "dav" : "hover:text-orange-600 underline-orange-600 duration-500 nav"
                      }`}
                    >
                      Home
                    </Link>
                  </div>

                  <div
                    className={`flex items-center gap-8 ${
                      activeLink === "#projects" ? "text-orange-600" : ""
                    }`}
                  >
                    <FaDiagramProject />
                    <Link
                      onClick={() => handleLinkClick("#projects")}
                      href="#projects"
                      className={`${
                        activeLink === "#projects" ? "dav" : "hover:text-orange-600 underline-orange-600 duration-500 nav"
                      }`}
                    >
                      My Projects
                    </Link>
                  </div>

                  <div
                    className={`flex items-center gap-8 ${
                      activeLink === "#contacts" ? "text-orange-600" : ""
                    }`}
                  >
                    <RiContactsBookFill />
                    <Link
                      onClick={() => handleLinkClick("#contacts")}
                      href="#contacts"
                      className={`${
                        activeLink === "#contacts" ? "dav" : "hover:text-orange-600 underline-orange-600 duration-500 nav"
                      }`}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
