import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/foto-perfil.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Alamyr Junior | About Page</title>
        <meta name="description" content="About Page"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Automation Drives Efficiency!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"/>
          <div className="grid w-full grid-cols-9 gap-16  sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">

                
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello, {`I'm`} Alamyr Junior, an RPA (Robotic Process Automation)
                Developer with a dedication to streamlining and automating
                business processes. With a solid 3 years of experience in the
                realm of RPA development, I am constantly exploring cutting-edge
                solutions to transform complex workflows into efficient and
                error-free automated processes.
              </p>
              <p className=" my-4 font-medium">
                I firmly believe that RPA is not just about automating tasks;
                {`it's`} about enhancing productivity, reducing operational costs,
                and improving overall business efficiency. My expertise lies in
                designing and implementing robust automation solutions that
                align with organizational goals and deliver tangible results.
              </p>
              <p className="my-4 font-medium">
                Whether {`I'm`} crafting bots for data extraction, process
                automation, or system integration, I bring a commitment to
                excellence in RPA development and a focus on creating seamless,
                intelligent automation solutions. I thrive on the challenges of
                optimizing processes and providing businesses with the tools
                they need to thrive in the digital age.
              </p>
              <p className="font-medium">
                I am excited about the prospect of contributing my skills and
                enthusiasm to your next automation project. {`Let's`} collaborate to
                revolutionize and elevate your business processes through the
                power of RPA.
              </p>


                </div>

                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                 bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 inset-0

                 "
            >
                
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark items-center" />
              <Image
                src={profilePic}
                alt="Alamyr Junior"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 
                         (max-width: 1200px) 50vw,
                         33vw"
              />
            </div>
        
            <div className="col-span-3 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
};

export default about;
