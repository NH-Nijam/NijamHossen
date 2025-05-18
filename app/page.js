'use client'
import React, { useEffect } from 'react';
import Aboutpage from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import ContactPage from './components/Contact';
import { WarpBackground } from "@/components/magicui/warp-background";

const page = () => {

  return (
    <div>
      <Aboutpage />
      <Skill />
      <Projects />
      <ContactPage />
    </div>
  );
};

export default page;