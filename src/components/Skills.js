import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold
        lg:p-6 md:p-4 xs:text-xs xs:p-2 
        '
        whileHover={{scale:1.2}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}} 
        viewport={{once: true}}
        >
           {name}
        </motion.div>

    )
} 

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm max-w-[1600px]'>
    
    <Skill name='RPA' x='0vw' y='0vw'/>

     <Skill name='UiPath' x='12vw' y='17vw'/>

     <Skill name='AWS' x='12vw' y='-9vw'/>

     <Skill name='Python' x='-12vw' y='9vw'/>
 
     <Skill name='MySQL' x='-15vw' y='-16vw'/>

     <Skill name='Power Automate' x='-21vw' y='-6vw'/>

     <Skill name='Git' x='-26vw' y='10vw'/>

    <Skill name='Azure' x='26vw' y='10vw'/>
    
    </div>
    </>
  )
}

export default Skills