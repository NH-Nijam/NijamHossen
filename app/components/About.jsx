"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiGithub,
  SiGit,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { TextAnimate } from "@/components/magicui/text-animate";

const Aboutpage = () => {
  const Me = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Specialist",
  ];

  return (
    <div className="z-0 lg:h-[90vh] h-[100vh] flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center justify-between px-4 md:px-10 lg:px-0">
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-start">
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={3}
          className="text-base xl:text-lg text-gray-300"
        >
          Building modern, scalable, and user-focused web experiences
        </TextAnimate>

        <h1 className="flex flex-col text-2xl md:text-3xl 2xl:text-5xl gap-1 md:gap-3 font-bold lg:mt-3">
          <span>Hello, I’m</span>
          <span className="text-orange-600">Md. Nijam Hossen</span>
        </h1>

        <h2 className="text-lg md:text-2xl 2xl:text-4xl font-semibold">
          I work as a{" "}
          <span className="text-orange-600">
            <Typewriter words={Me} loop cursor />
          </span>
        </h2>

        <div className="lg:w-1/2 w-full flex justify-center items-center lg:hidden">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px]">
            {/* CENTER CIRCLE */}
            <div
              className="absolute inset-0 m-auto w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]
            bg-orange-600 rounded-full flex items-center justify-center
            text-white font-bold text-base sm:text-lg md:text-3xl shadow-lg"
            >
              Tech
            </div>

            {/* ORBIT */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiReact className="text-cyan-400 text-xl sm:text-2xl md:text-2xl" />
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiNextdotjs className="text-white text-xl sm:text-2xl md:text-2xl" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiMongodb className="text-green-500 text-xl sm:text-2xl md:text-2xl" />
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiGithub className="text-white text-xl sm:text-2xl md:text-2xl" />
              </div>
              <div className="absolute top-[15%] left-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiJavascript className="text-yellow-400 text-base sm:text-xl md:text-xl" />
              </div>
              <div className="absolute bottom-[15%] right-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiExpress className="text-gray-300 text-base sm:text-xl md:text-xl" />
              </div>
              <div className="absolute top-[15%] right-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiGit className="text-orange-500 text-base sm:text-xl md:text-xl" />
              </div>
              <div className="absolute bottom-[15%] left-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
                <SiNodedotjs className="text-green-400 text-base sm:text-xl md:text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <p className="text-xs md:text-sm xl:text-base text-gray-300 leading-relaxed">
          I am a passionate MERN Stack Developer with expertise in building
          clean, responsive, and high-performance web applications. I specialize
          in React and Next.js for creating intuitive UIs, supported by scalable
          Node.js, Express, and MongoDB backends. I enjoy transforming complex
          problems into simple, elegant digital solutions.
        </p>

        {/* SOCIAL LINKS */}
        <div className="mt-6 flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start">
          {[
            {
              href: "https://github.com/NH-Nijam",
              icon: <FiGithub />,
            },
            {
              href: "https://www.facebook.com/profile.php?id=100009625237790",
              icon: <FaFacebookF />,
            },
            {
              href: "https://www.linkedin.com/in/nijam-hossen-789081264/",
              icon: <FaLinkedinIn />,
            },
            {
              href: "https://www.pinterest.com/login/",
              icon: <FaPinterestP />,
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] 2xl:w-[50px] 2xl:h-[50px]
                shadow-md shadow-orange-600 rounded-full
                hover:scale-110 duration-500 flex justify-center items-center"
              >
                <span className="text-base sm:text-lg md:text-xl 2xl:text-2xl">
                  {item.icon}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* RESUME BUTTON */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link
            href="https://drive.google.com/file/d/1oCs5h72fffjdp2thyhFQxPgfJU2ZizMY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="shadow-md shadow-orange-600 px-5 py-2 sm:px-7 sm:py-3 md:px-8 md:py-2 lg:px-10 lg:py-3 2xl:text-2xl md:text-xl font-semibold rounded-md
              hover:bg-orange-600 hover:text-[#111827]
              hover:shadow-none hover:scale-110 duration-500 inline-block"
            >
              Resume
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT SECTION – TECH STACK */}
      <div className="lg:w-1/2 w-full lg:flex justify-center items-center hidden">
        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px]">
          {/* CENTER CIRCLE */}
          <div
            className="absolute inset-0 m-auto w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]
            bg-orange-600 rounded-full flex items-center justify-center
            text-white font-bold text-base sm:text-lg md:text-3xl shadow-lg"
          >
            Tech
          </div>

          {/* ORBIT */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiReact className="text-cyan-400 text-xl sm:text-2xl md:text-2xl" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiNextdotjs className="text-white text-xl sm:text-2xl md:text-2xl" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiMongodb className="text-green-500 text-xl sm:text-2xl md:text-2xl" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiGithub className="text-white text-xl sm:text-2xl md:text-2xl" />
            </div>
            <div className="absolute top-[15%] left-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiJavascript className="text-yellow-400 text-base sm:text-xl md:text-xl" />
            </div>
            <div className="absolute bottom-[15%] right-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiExpress className="text-gray-300 text-base sm:text-xl md:text-xl" />
            </div>
            <div className="absolute top-[15%] right-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiGit className="text-orange-500 text-base sm:text-xl md:text-xl" />
            </div>
            <div className="absolute bottom-[15%] left-[15%] w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] bg-[#111827] rounded-full flex items-center justify-center shadow-md shadow-orange-600">
              <SiNodedotjs className="text-green-400 text-base sm:text-xl md:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx global>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Aboutpage;
