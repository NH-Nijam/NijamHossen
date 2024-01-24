import React from 'react';
import SkillCard from './skillCard';
import html from '../icons/html.png'
import css from '../icons/css.png'
import js from '../icons/java.png'
import tailwind from '../icons/tailwind.png'
import bootstrap from '../icons/bootstrap.png'
import react from '../icons/react.png'
import next from '../icons/next.png'

const Skill = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-semibold text-center'>My Skills</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6  mt-10'>
                <SkillCard name='HTML' icons ={html}/>
                <SkillCard name='CSS' icons ={css}/>
                <SkillCard name='JAVASCRIPT' icons ={js}/>
                <SkillCard name='TAILWIND CSS' icons ={tailwind}/>
                <SkillCard name='BOOTSTRAP' icons ={bootstrap}/>
                <SkillCard name='REACT JS' icons ={react}/>
                <SkillCard name='NEXT JS' icons ={next}/>
            </div>
        </div>
    );
};

export default Skill;