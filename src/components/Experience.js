import { motion, useScroll, scrollYProgress } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from './LiIcon';


const Details = ({position, company, companyLink, time, address, work}) => {
   
    const paragraphs = work.split('\n').map((paragraph, index) => <p className='my-3 flex' key={index}>{paragraph}</p>);
        const ref = useRef(null)
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp; 
            <a
             href={companyLink}  
            target="_blank" 
            className='text-primary capitalize'>
            @{company}
            </a> 
            </h3>

            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {address} </span>
             <div className='font-medium w-full md:text-sm'>
            {paragraphs}
            </div>
               
        </motion.div>
    </li>
    
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col  justify-between ml-4 mt-10 xs:ml-2'>
                <Details 
                position="RPA Developer"
                company = "BTG Pactual"
                time = "Aug-2022 > Dec-2023"
                address="Rio de Janeiro, Brazil"
                work= {
                "● Designed automation solutions using Python, UiPath, and Power Automate, ensuring a comprehensive approach to streamline processes across different platforms.\n\n"+
                "● Successfully leveraged AWS services, including Lambda, Glue, SQS, and others, in project implementations.\n\n"+
                "● Spearheaded the development of projects in the funds area of the bank.\n\n" +
                "● Effectively implemented software changes and alterations based on precise design specifications.\n\n" +
                "● Collaborated on the creation of strategic initiatives, contributing to the design, coding, and testing of solutions.\n\n" +
                "● Effectively implemented software changes and alterations based on specific design specifications.\n\n" +
                "● Demonstrated expertise in working with APIs, Databases, Regex, Computer Vision, ReFramework, and Orchestrator."
                    }
                />
            </ul>

            <ul className='w-full flex flex-col items-start justify-between ml-4 mt-10'>
                <Details 
                position="RPA Developer"
                company = "Zallpy"
                time = "Aug-2021 > Aug-2022"
                address="Rio de Janeiro, Brazil"
                work= {
                "● Developed, communicated, and managed comprehensive project plans.\n\n" +
                "● Demonstrated proficiency in working with APIs, Databases, Regex, Computer Vision, ReFramework, and Orchestrator.\n\n" +
                "● Collaborated on strategic initiatives, contributing to the design, coding, and testing of solutions.\n\n" +
                "● Effectively implemented software changes and alterations based on specific design specifications.\n\n" +
                "● Played a key role in project allocation at Unicred.\n\n" +
                "● Spearheaded the development of financial projects.\n\n" +
                "● Led the development of access management projects."
                    }
                />
            </ul>

            <ul className='w-full flex flex-col items-start justify-between ml-4 mt-10'>
                <Details 
                position="RPA Developer"
                company = "DClick"
                time = "Jul-2020 > Jul-2021"
                address="Rio de Janeiro, Brazil"
                work= {
                "● Developed, communicated, and oversaw comprehensive project plans.\n\n" +
                "● Collaborated on strategic initiatives, contributing to the design, coding, and testing of solutions.\n\n" +
                "● Demonstrated proficiency with APIs, Regex, Computer Vision, ReFramework, and Orchestrator.\n\n" +
                "● Consistently met and exceeded the expectations of stakeholders and users through ongoing efforts."
                    }
                />
            </ul>


            <ul className='w-full flex flex-col items-start justify-between ml-4 mt-10'>
                <Details 
                position="RPA Developer"
                company = "Freelancer"
                time = "Jan-2019 > Jun-2020"
                address="Rio de Janeiro, Brazil"
                work= {
                "● Developed, communicated, and oversaw project plans tailored for small companies.\n\n" +
                "● Demonstrated proficiency in working with APIs, Databases, Regex, Computer Vision, ReFramework, and Orchestrator.\n\n" +
                "● Successfully executed the development of both web and desktop projects." 
                    }
                />
            </ul>

        </div>

    </div>
  )
}

export default Experience