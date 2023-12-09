import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import profilePic from "../../public/images/profile/profile_dev4.png"
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Alamyr Junior</title>
        <meta name="description" content="Portfolio Alamyr" />
      </Head>
      <TransitionEffect />
       
    <main className='flex items-center text-dark w-full min-h-screen pr-10'> 
      <Layout className='pt-0 md:pt-16 sm:pt-8 items-center'> 
        <div class="flex items-center justify-between w-full lg:flex-col">
          <div className='w-1/2 md:w-full'>
          <Image src={profilePic} alt="AJ" className='h-auto w-full lg:w-[80%] transform scale-x-[-1] lg:hidden md:inline-block md:w-full'
          priority
          sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw,
          50vw"
          />
          </div>
            <div className='w-1/2  flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Transforming Concepts Into Automated Realities with RPA!" className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a proficient RPA developer, I specialize in converting business processes into streamlined, automated workflows. 
              Discover my recent automation projects and insights, demonstrating my expertise in RPA development and process enhancement.
              </p>
              <div className=' flex items-center self-start mt-2 lg:self-center'>
                <Link href="/dummy.pdf" target="_blank" className='flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                md:p-2 md:px-4 md:text-base' 
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <Link href="mailto:abcd@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'
                >Contact</Link>
              </div>
            </div>
        </div>
      </Layout>

      <HireMe/>
      <div className='absolute right-12 bottom-8 inline-block w-24 md:hidden'>
        <Image src={lightBulb} alt="Alamyr Junior" className='w-full h-auto'></Image>
      </div>
    </main>
    </>
  )
}
