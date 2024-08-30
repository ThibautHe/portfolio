"use client";
import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import Title from "./_components/Title";
import Section from "./_components/Section";
import { url } from "inspector";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import About from "./_components/About";
import linkedinSvg from "/public/logo/iconmonstr-linkedin-3.svg";

import ToolsSection from "./_components/ToolsSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width:768px)");
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(
    null
  );
  const [pos, setPos] = useState("block");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end start"],
  });

  const displaceX = useTransform(scrollYProgress, [0, 1], ["0px", "-500px"]);
  const negdisplaceX = useTransform(scrollYProgress, [0, 1], ["-50%", "500px"]);
  const displaceY = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    ["0", "0px", "-10000px"]
  );
  const imgDisplaceY = useTransform(
    scrollYProgress,
    [0, 0.95, 1],
    ["-50%", "-50%", "-10000px"]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  let dots = [];

  const w = ref.current?.offsetWidth;
  const h = ref.current?.offsetHeight;
  console.log(w!);

  for (let index = 0; index < 36; index++) {
    dots.push(
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.05, duration: 1 }}
        key={index}
        className="bg-white block w-[2px] h-[2px] rounded-full"
      ></motion.span>
    );
  }

  useEffect(() => {
    if (ref.current) {
      const w = ref.current.offsetWidth;
      const h = ref.current.offsetHeight;
      setDimensions({ w, h });
    }
  }, []);

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const home = useRef<HTMLDivElement | null>(null);
  const Portfolio = useRef<HTMLDivElement | null>(null);
  const Aboutref = useRef<HTMLDivElement | null>(null);
  const Contact = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <motion.div ref={home} className=" overflow-hidden h-[150vh]">
        <div className="flex justify-between p-6 items-center relative">
          <nav className="hidden sm:flex">
            <ul className="flex gap-4">
              <li>
                <button
                  onClick={() => {
                    home.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    Portfolio.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    Aboutref.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    Contact.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {PresentationText(displaceX, opacity, displaceY, childVariants)}
        <motion.div
          ref={ref}
          style={{ translateX: "-50%", translateY: imgDisplaceY }}
          className="fixed z-40 left-[47%] top-[42%] lg:top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:left-[65%] md:top-[55%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[50%] 2xl:w-[40%] overflow-hidden" // PC
        >
          {
            <Image
              alt="mainimage"
              style={{ opacity: 0 }}
              src={"/bgpic.png"}
              width={800}
              height={800}
            ></Image>
          }
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {MainImages(h!, w!, scrollYProgress)}
          </motion.div>
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="grid w-[100%] overflow-hidden p-6 md:w-[600px] -translate-y-2/3 md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 grid-cols-12 gap-12 fixed"
        >
          {dots}
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="hidden md:grid -translate-y-1/2 -translate-x-1/2 top-1/2 right-0 grid-cols-3 gap-12 fixed"
        >
          {dots}
        </motion.div>
        <motion.div className="flex flex-col gap-12 absolute -left-8 w-fit bottom-[20%] md:top-1/2 ">
          {Lines()}
        </motion.div>
      </motion.div>

      <div ref={Portfolio}>
        <Section>
          <Title title="Work"></Title>
          <Work></Work>
        </Section>
      </div>
      <div ref={Aboutref} className="mb-32">
        <Section>
          <Title title="About"></Title>
          <About></About>
        </Section>
      </div>
      <Section>
        <ToolsSection></ToolsSection>
      </Section>
      <div ref={Contact}>
        <Section>
          <Title title="Contact"></Title>
          <div className="relative flex justify-center">
            <div className="bg-[#1F1F1F] border-[1px] z-0 w-[90%] h-[60vh] md:w-[40%] md:h-[70vh] absolute left-[51.5%] -translate-x-[50%] -top-5" />
            <div className="w-[90%] h-[60vh] md:w-[40%] md:h-[70vh] border-[1px] relative z-50 bg-black">
              <form className="h-full" action="">
                <div className=" p-10 flex flex-col gap-8 h-full justify-evenly">
                  <div className=" flex gap-8 justify-between relative">
                    <div className="flex flex-col gap-4 w-[45%]">
                      <label htmlFor="name">Name</label>
                      <input
                        className="bg-black border-gray-500 border-[1px]"
                        type="text"
                        name="name"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-4 w-[45%]">
                      <label htmlFor="email">Email</label>
                      <input
                        className="bg-black border-gray-500 border-[1px]"
                        type="text"
                        name="email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-4">
                      <label htmlFor="text">Message</label>
                      <textarea
                        className="bg-black border-gray-500 border-[1px] h-[200px]"
                        name="text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="relative mx-auto w-1/3">
                    <button className="bg-white text-black w-full z-50 relative h-[50px]">
                      Submit
                    </button>
                    <div className="bg-black border-[1px] z-0 text-black w-full h-[50px] absolute top-4 left-4" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <motion.div className="flex flex-col gap-6 md:gap-24 w-[60%] absolute left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[50%] top-1/3 md:top-1/2 ">
            {Lines2()}
          </motion.div>
        </Section>
      </div>
      <motion.div className="flex flex-col gap-4 my-24 md:mt-48">
        {Lines3()}
      </motion.div>
      <div className="relative md:p-12">
        <div className="flex flex-col gap-12">
          <div className="text-center text-7xl">
            <h1>Thibaut Hellinckx</h1>
          </div>
          <div>
            <ul className="flex justify-center">
              <li className="block w-fit">
                <a href="" className="w-fit block">
                  <Image
                    src={linkedinSvg}
                    width={50}
                    height={50}
                    alt="linkedin"
                  ></Image>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="mailto:thibaut.hellinckx@hotmail.com">email: thibaut.hellinckx@hotmail.com</a>
            <p>All rights reserved © Thibaut Hellinckx</p>
          </div>
        </div>
      </div>
    </>
  );
}

const WorksList = [
  {
    image: "/Image1.png",
    url: "https://www.aerodeco.be",
  },
  {
    image: "/Image3.png",
    url: "https://berkay-portfolio.netlify.app/Home",
  },
  {
    image: "/gilleshoriac.png",
    url: "https://www.gilleshoriac.com",
  },
];

const Work = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit m-auto">
      {WorksList.map((work) => (
        <Link key={work.image} target="_blank" href={work.url}>
          <Image
            src={work.image}
            width={1000}
            height={500}
            alt="aerodeco"
          ></Image>
        </Link>
      ))}
    </div>
  );
};

const MainImages = (h: number, w: number, scroll: MotionValue<number>) => {
  const matches = useMediaQuery("(min-width:1025px)");
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);

  const displaceX = useTransform(scroll, [0, 1], ["50px", "-500px"]);
  const displaceX2 = useTransform(scroll, [0, 1], ["0px", "550px"]);
  const opacity = useTransform(scroll, [0, 1], ["100%", "0%"]);

  const Testoffdset = 50;
  const childVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const childVariants2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const animDuration = 1;
  const animDelay = 0.5;

  const generateStyle = (index: number, isWide: boolean) => ({
    opacity: opacity,
    height: `${h / 4 - 2}px`,
    top: `${(h * index) / 4}px`,
    left: index % 2 === 0 ? displaceX : displaceX2,
    backgroundSize: `${w * 1.5}px`,
    backgroundPosition: `${
      isWide
        ? `calc(60% - ${index % 2 == 0 ? Testoffdset * 1 : 0}px)`
        : `calc(50% - ${index % 2 == 0 ? Testoffdset * 1 : 0}px)`
    } -${(index * h) / 4 + (isWide ? 250 : 100)}px`,
    backgroundRepeat: "no-repeat",
  });

  return (
    <>
      <motion.div
        ref={div1}
        id="pic1"
        variants={childVariants}
        transition={{ duration: animDuration, delay: animDelay }}
        style={generateStyle(0, matches)}
        className="absolute w-[90%] left-0 bg-mainimg z-10"
      />
      <motion.div
        ref={div2}
        variants={childVariants2}
        transition={{ duration: animDuration, delay: animDelay }}
        style={generateStyle(1, matches)}
        className="absolute w-[90%] left-0 bg-mainimg z-10"
      />
      <motion.div
        ref={div3}
        variants={childVariants}
        transition={{ duration: animDuration, delay: animDelay }}
        style={generateStyle(2, matches)}
        className="absolute w-[90%] left-0 bg-mainimg z-10"
      />
      <motion.div
        ref={div4}
        variants={childVariants2}
        transition={{ duration: animDuration, delay: animDelay }}
        style={generateStyle(3, matches)}
        className="absolute w-[90%] left-0 bg-mainimg z-10"
      />
    </>
  );
};

const Lines3 = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const lineRefs = useRef<HTMLElement[]>([]);

  console.log(lineRefs.current);

  useGSAP(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.from(line, {
        opacity: 0,
        scale: `0`,
        duration: 1,
        delay: index * 0.02,
        scrollTrigger: {
          trigger: line,
          start: "0% 90%", // Adjust this as needed
          end: "100% 70%",
          scrub: 3,
        },
      });
    });
  }, [matches]);

  const addLineRef = (el: HTMLElement) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <>
      <motion.span
        ref={addLineRef}
        key={"1"}
        transition={{ delay: 0 }}
        className="bg-white block origin-left w-full h-px"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"2"}
        transition={{ delay: 0.2 }}
        className="bg-white block origin-left w-full h-px scale-x-95 "
      ></motion.span>

      <motion.span
        ref={addLineRef}
        key={"3"}
        transition={{ delay: 0.4 }}
        className="bg-white block origin-left w-full h-px scale-x-90"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"4"}
        transition={{ delay: 0.6 }}
        className="bg-white block origin-left w-full h-px scale-x-75"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"5"}
        transition={{ delay: 0.8 }}
        className="bg-white block origin-left w-full h-px scale-x-50"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"6"}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white block origin-left w-full h-px scale-x-[.4]"
      ></motion.span>
    </>
  );
};

const Lines2 = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const lineRefs = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.from(line, {
        opacity: 0,
        rotation: 0,
        scale: `0`,
        duration: 1,
        delay: index * 0.02,
        scrollTrigger: {
          trigger: line,
          start: "20% 100%", // Adjust this as needed
          end: "60% 80%",
          scrub: 3,
        },
      });
    });
  }, [matches]);

  const addLineRef = (el: HTMLElement) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <>
      <motion.span
        ref={addLineRef}
        key={"1"}
        transition={{ delay: 0 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"2"}
        transition={{ delay: 0.2 }}
        className="bg-white block w-full h-px -rotate-[30deg] scale-x-150"
      ></motion.span>

      <motion.span
        ref={addLineRef}
        key={"3"}
        transition={{ delay: 0.4 }}
        className="bg-white block w-full h-px -rotate-[30deg] scale-x-250"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"4"}
        transition={{ delay: 0.6 }}
        className="bg-white block w-full h-px -rotate-[30deg] scale-x-50"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"5"}
        transition={{ delay: 0.8 }}
        className="bg-white block w-full h-px -rotate-[30deg] scale-x-150"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"6"}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
    </>
  );
};
const Lines = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const lineRefs = useRef<HTMLElement[]>([]);
  const w = matches ? 24 : 16;

  useGSAP(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        { width: `${w}rem`, rotation: -30, opacity: 1 },
        {
          opacity: 0,
          width: `0rem`,
          rotation: 0,
          duration: 1,
          delay: index * 0.02,
          scrollTrigger: {
            trigger: line,
            start: "0% 40%", // Adjust this as needed
            end: "100% 40%",
            scrub: 3,
          },
        }
      );
    });
  }, [matches]);

  const addLineRef = (el: HTMLElement) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <>
      <motion.span
        ref={addLineRef}
        key={"1"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"2"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.2 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"3"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.4 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"4"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.6 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"5"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.8 }}
        className="bg-white block w-full h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"6"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
    </>
  );
};

const Hamburgermenu = () => {
  return (
    <div className=" w-fit flex flex-col gap-2 justify-center ">
      <span className="bg-white block w-6 h-1 rounded-full"></span>
      <span className="bg-white block w-10 h-1 rounded-full"></span>
      <span className="bg-white block w-10 h-1 rounded-full"></span>
      <span className="bg-white block w-6 h-1 rounded-full self-end"></span>
    </div>
  );
};

function PresentationText(
  displaceX: MotionValue<string>,
  opacity: MotionValue<string>,
  displaceY: MotionValue<string>,
  childVariants: {
    hidden: { opacity: number; x: number };
    visible: { opacity: number; x: number };
  }
) {
  const lineRefs = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        { opacity: 1, x: 0 },
        {
          x: -300,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: line,
            start: "0% 30%", // Adjust this as needed
            end: "100% 20%",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const addLineRef = (el: HTMLElement | null) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <motion.div
      style={{ opacity, translateY: displaceY }}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1, duration: 2 }}
      className="fixed w-full bottom-[30%] sm:bottom-[20%] md:w-1/2 lg:top-[30%] md:left-[15%] z-50 flex gap-1 md:gap-4 flex-col p-4"
    >
      <motion.div
        variants={childVariants}
        ref={addLineRef}
        className="w-[50%] md:w-[50%] border-2 bg-black border-white h-16 xl:h-24 flex justify-center items-center"
      >
        <h1 className="text-2xl xl:text-5xl">{`Hi, I'm`}</h1>
      </motion.div>
      <motion.div
        variants={childVariants}
        ref={addLineRef}
        className="w-[90%] md:w-[100%] lg:w-[75%] ml-6 border-2 bg-black border-white h-16 xl:h-24 flex justify-center items-center"
      >
        <h1 className="text-2xl xl:text-5xl">Thibaut Hellinckx</h1>
      </motion.div>
      <motion.div
        variants={childVariants}
        ref={addLineRef}
        className="w-[90%] md:w-[100%] lg:w-[75%] border-2 bg-black border-white h-16 xl:h-24 flex justify-center items-center"
      >
        <h1 className="text-2xl xl:text-5xl">A web developer</h1>
      </motion.div>
    </motion.div>
  );
}
