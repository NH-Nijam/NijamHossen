import React from 'react';
import SkillCard from './skillCard';
import html from '../icons/html.png'
import css from '../icons/css.png'
import js from '../icons/java.png'
import tailwind from '../icons/tailwind.png'
import react from '../icons/reactjs.png'
import next from '../icons/next.png'
import animation from '../icons/framermotion.png'
import nodejs from '../icons/nodejs.png'
import express from '../icons/express.png'
import github from '../icons/github.png'
import mongodb from '../icons/mongodb.png'
import firebase from '../icons/firebase.png'

const Skill = () => {
    return (
        <div className='mt-20'>
            <h1 data-aos="fade-down" className='md:text-3xl text-xl font-semibold text-center decoration-wavy underline tracking-[3px]'>My Skills</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:mt-10 mt-8 relative'>
                <SkillCard name='HTML' icons ={html}/>
                <SkillCard name='CSS' icons ={css}/>
                <SkillCard name='JAVASCRIPT' icons ={js}/>
                <SkillCard name='TAILWIND CSS' icons ={tailwind}/>
                <SkillCard name='REACT JS' icons ={react}/>
                <SkillCard name='NEXT JS' icons ={next}/>
                <SkillCard name='FRAMER MOTION' icons ={animation}/>
                <SkillCard name='NODE JS' icons ={nodejs}/>
                <SkillCard name='EXPRESS' icons ={express}/>                
                <SkillCard name='MONGODB' icons ={mongodb}/>
                <SkillCard name='GITHUB' icons ={github}/>
                <SkillCard name='FIRE BASE' icons ={firebase}/>
            </div>
        </div>
    );
};

export default Skill;