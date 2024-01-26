import React from 'react';
import Aboutpage from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';

const page = () => {
  return (
    <div>
      <Aboutpage/>
      <Skill/>
      <Projects/>
    </div>
  );
};

export default page;