"use client";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ToolCard from "../_components/ToolCard";

import reactIcon from "/public/logo/react-2.svg";
import nextIcon from "/public/logo/next-js.svg";
import tailwindIcon from "/public/logo/tailwind-css-2.svg";
import githubIcon from "/public/logo/github-icon-1.svg";
import csharpIcon from "/public/logo/c--4.svg";
import unityIcon from "/public/logo/unity-69.svg";
import nodejs from "/public/logo/node-js.svg";
import mongo from "/public/logo/mongodb.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Page() {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (cardsRef.current !== null) {
      gsap.fromTo(
        cardsRef.current,
        { y: 200 },
        {
          y: -200,
          duration: 1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "-20% 80%", // Adjust this as needed
            end: "100% 0%",
            scrub: 3,
          },
        }
      );
    }
  }, [cardsRef]); // Depend on `element` to run effect when `element` changes

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-custom-gradient">
      <Link className="fixed z-50" href="/">
        BACK
      </Link>

      <div className="max-w-[1024px] mx-auto p-6 min-h-[100vh] mb-24 relative">
        <h1 className="text-stroke text-[20vw] leading-none text-black mb-12 font-poppins">
          Elia
        </h1>
        <div className="flex gap-8">
          <div className="w-1/2">
            <Image src="/elia.png" alt="bgpic" width={500} height={500} />
          </div>
          <p className="w-1/2 text-sm">
            The project focused on developing a management app for Elia's
            employees, a challenging, engaging, and most importantly FUN
            experience.
            <br /> <br />
            I'm really grateful for this opportunity and the valuable insights
            I’ve gained along the way. I had the chance to dive deep into
            backend development, working on API routes, structuring database
            models, and ensuring integration with the frontend.
            <br /> <br />
            One of the biggest challenges I faced was troubleshooting
            cookie-related issues in the deployed environment. While everything
            worked perfectly fine locally, the deployed version didn't behave as
            expected. This was a tricky issue, but it was also a rewarding
            experience that enhanced my understanding of web security and
            authentication.
          </p>
        </div>
        <motion.div className="flex flex-col gap-2 absolute -left-8 w-fit bottom-[-10%] ">
          {Lines()}
        </motion.div>
      </div>

      <div className="max-w-[1024px] m-auto p-6 grid grid-cols-2 gap-4">
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
      </div>

      <div className="h-[75vh] md:h-[100vh] content-center relative mb-24">
        <motion.h1 className="absolute text-black text-[15vw] text-stroke z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-poppins">
          TOOLS
        </motion.h1>
        <motion.div ref={cardsRef} className="z-50">
          <div className="grid toolsgrid-phone md:grid-cols justify-center items-center gap-8 md:gap-12">
            <ToolCard icon={reactIcon} />
            <ToolCard icon={nodejs} />
            <ToolCard icon={mongo} />
            <ToolCard icon={githubIcon} />
          </div>
        </motion.div>
      </div>

      <div className="text-center max-w-[640px] m-auto relative mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={childVariants}
            className="w-8 h-8 bg-white absolute left-0 top-0 -translate-x-[112%]"
          />
          <motion.div
            variants={childVariants}
            className="w-8 h-8 border-white border-2 absolute left-0 top-0 -translate-x-[112%] -translate-y-[112%]"
          />
          <motion.div
            variants={childVariants}
            className="w-8 h-8 bg-white absolute left-0 top-0 -translate-y-[112%]"
          />
        </motion.div>
        <h1 className="m-auto text-7xl text-stroke text-black font-bold font-poppins">
          Other Projects
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={childVariants}
            className="w-8 h-8 bg-white absolute right-0 bottom-0 translate-y-[112%]"
          />
          <motion.div
            variants={childVariants}
            className="w-8 h-8 border-white border-2 absolute right-0 bottom-0 translate-y-[112%] translate-x-[112%]"
          />
          <motion.div
            variants={childVariants}
            className="w-8 h-8 bg-white absolute right-0 bottom-0 translate-x-[112%]"
          />
        </motion.div>
      </div>
      <div className="max-w-[1024px] m-auto p-6 grid grid-cols-2 gap-4">
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
        <Image
          src="/elia.png"
          width={500}
          height={500}
          alt="project pic"
        ></Image>
      </div>
    </div>
  );
}

const Lines = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const lineRefs = useRef<HTMLElement[]>([]);
  const w = matches ? 24 : 16;

  useGSAP(() => {
    lineRefs.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        { width: `${w * (1 - (index - 1) * 0.2)}rem`, opacity: 1 },
        {
          opacity: 1,
          width: `100vw`,
          rotation: 0,
          duration: 1,
          delay: index * 0.02,
          scrollTrigger: {
            trigger: line,
            start: "0% 90%", // Adjust this as needed
            end: "2000% 10%",
            scrub: 1,
            markers: true,
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
        key={"3"}
        initial={{ width: "0" }}
        animate={{ width: w * 1 + "rem" }}
        transition={{ delay: 0.4 }}
        className="bg-keyRed block h-1"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"4"}
        initial={{ width: "0" }}
        animate={{ width: w * 0.8 + "rem" }}
        transition={{ delay: 0.6 }}
        className="bg-white block h-1"
      ></motion.span>
      <motion.span
        ref={addLineRef}
        key={"5"}
        initial={{ width: "0" }}
        animate={{ width: w * 0.6 + "rem" }}
        transition={{ delay: 0.8 }}
        className="bg-white block h-1"
      ></motion.span>
    </>
  );
};
