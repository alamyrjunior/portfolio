import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, link, github, img}) => {
  return (
   <article className='w-full flex items-center justify-between relative rounded-br-2xl
   rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
   lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
   >
      <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' /> 
      
      <Link href={link} target='_blank'
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className='w-full h-auto'
         priority
         sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw,
         50vw"/>
      </Link>
      
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
        <h2 className='my-2 w-full text-left text-3xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        
        <div className='mt-2 flex items-center'>
    
        <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
        <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
        sm:px-4 sm:text-base '>Visit Project</Link>
        </div>
        </div>
   </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article  className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    xs:p-4'>
    <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' /> 

       <Link 
       href={link} 
       target='_blank'
       className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
        <Image src={img} alt={title} className='w-full h-auto'/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link 
        href={link} 
        target="_blank" 
        className='hover:underline underline-offset-2'
        >
          
        <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'> 
        {title} 
        </h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
        <Link 
        href={link} 
        target="_blank" 
        className='text-lg font-semibold underline md:text-base'>
          Visit
          </Link>
        <Link 
        href={github} 
        target="_blank" 
        className='w-8 md:w-6 '>
          <GithubIcon/>
          </Link>
    
        </div>
        </div>
    </article>
  )
}
const projects = () => {
  return (
    <>
       <Head>
        <title>Alamyr Junior | Projects Page</title>
        <meta name='description' content='Projects Page'></meta>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className="pt-16 p-20">
            <AnimatedText text="Transforming complexity into simplicity"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className='col-span-12'>
                <FeaturedProject
                title="Projeto Featured"
                img={project1}
                summary="aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa!"
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

              <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Projeto Featured"
                img={project1}
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

              <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Projeto Featured"
                img={project1}
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

              <div className='col-span-12'>
              <FeaturedProject
                title="Projeto Featured"
                img={project1}
                summary="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

              <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Projeto Featured"
                img={project1}
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

              <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Projeto Featured"
                img={project1}
                link="/"
                github="/"
                type="Projeto Featured"
                />
              </div>

            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects