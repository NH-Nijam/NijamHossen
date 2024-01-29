'use client'
import React, { useEffect } from 'react';
import Aboutpage from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import ContactPage from './components/Contact';
import { FloatButton } from 'antd';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const page = () => {
  
  return (
    <div>
      <Aboutpage/>
      <Skill/>
      <Projects/>
      <ContactPage/>
      <FloatButton.BackTop icon={<MdOutlineKeyboardDoubleArrowUp /> }/>
    </div>
  );
};

export default page;