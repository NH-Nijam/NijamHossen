import React, { useState } from "react";
import {Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Project from "./Project";
import { ProjectsData } from "@/public/projects-data";


const Projects = () => {
    const [data] = useState(ProjectsData);
  return (
    <div id="projects" className="md:pt-[130px] pt-14">
      <h1
        data-aos="fade-down"
        className="md:text-3xl text-xl font-semibold text-center decoration-wavy underline tracking-[3px]"
      >
        My Projects
      </h1>

      <div className="md:mt-14 mt-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {data.map((project) => (
            <SwiperSlide key={project.id}>
              <Project {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
