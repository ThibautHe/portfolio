"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import Title from "./_components/Title";
import Section from "./_components/Section";
import { url } from "inspector";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width:768px)");
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(
    null
  );

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
  }, [ref.current]);

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className=" h-screen">
        <div className="flex justify-between p-6 items-center relative">
          <nav className="hidden sm:flex">
            <ul className="flex gap-4">
              <li>Home</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <Hamburgermenu></Hamburgermenu>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, duration: 2 }}
          className="absolute w-full bottom-[30%] md:w-1/2 md:bottom-[20%] lg:top-[30%] md:left-[15%] z-50 flex gap-1 md:gap-4 flex-col p-4"
        >
          <motion.div
            variants={childVariants}
            className="w-[50%] md:w-[50%] border-2 bg-black border-white h-16 lg:h-24 flex justify-center items-center"
          >
            <h1 className="text-2xl lg:text-5xl">Hi I'm,</h1>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-[90%] md:w-[100%] lg:w-[75%] ml-6 border-2 bg-black border-white h-16 lg:h-24 flex justify-center items-center"
          >
            <h1 className="text-2xl lg:text-5xl">Thibaut Hellinckx</h1>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="w-[90%] md:w-[100%] lg:w-[75%] border-2 bg-black border-white h-16 lg:h-24 flex justify-center items-center"
          >
            <h1 className="text-2xl lg:text-5xl">A web developer</h1>
          </motion.div>
        </motion.div>
        <div
          ref={ref}
          className="absolute z-40 left-[47%] top-[42%] lg:top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:left-[65%] md:top-[55%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[50%] " // PC
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
            {MainImages(h!, w!)}
          </motion.div>
        </div>
        <div className="grid w-[100%] overflow-hidden p-6 md:w-[600px] -translate-y-2/3 md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 grid-cols-12 gap-12 absolute">
          {dots}
        </div>
        <div className="hidden md:grid -translate-y-1/2 -translate-x-1/2 top-1/2 right-0 grid-cols-3 gap-12 absolute">
          {dots}
        </div>
        <Lines></Lines>
      </div>


      <Section>
          <Title title="Work"></Title>
        <Work></Work>
      </Section>
      <Section>
        <Title title="about"></Title>
      </Section>
    </>
  );
}

const WorksList = [
  {
    image: "/image1.png",
    url: "https://www.aerodeco.be",
  },
  {
    image: "/image3.png",
    url: "https://berkay-portfolio.netlify.app/Home",
  },
];

const Work = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {WorksList.map((work) => (
        <Link target="_blank" href={work.url}>
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

const MainImages = (h: number, w: number) => {
  const matches = useMediaQuery("(min-width:1025px)");

  const Testoffdset = 6;
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

  return (
    <>
      {matches ? (
        <>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 0) / 4}px`,
              left: Testoffdset + "%",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `calc(60% + ${Testoffdset * 2}%) -${
                (0 * h!) / 4 + 250
              }px`,
              backgroundRepeat: "no-repeat",
            }}
            className={`absolute w-full left-0 bg-mainimg z-10`}
          ></motion.div>
          <motion.div
            variants={childVariants2}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 1) / 4}px`,
              left: "",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `60% -${(1 * h!) / 4 + 250}px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 2) / 4}px`,
              left: Testoffdset + "%",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `calc(60% + ${Testoffdset * 2}%) -${
                (2 * h!) / 4 + 250
              }px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
          <motion.div
            variants={childVariants2}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 3) / 4}px`,
              left: "",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `60% -${(3 * h!) / 4 + 250}px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
        </>
      ) : (
        <>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 0) / 4}px`,
              left: Testoffdset + "%",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `calc(50% + ${Testoffdset * 2}%) -${
                (0 * h!) / 4 + 100
              }px`,
              backgroundRepeat: "no-repeat",
            }}
            className={`absolute w-[100%] left-[15%] bg-mainimg z-10`}
          ></motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 1) / 4}px`,

              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `50% -${(1 * h!) / 4 + 100}px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 2}px`,
              top: `${(h! * 2) / 4}px`,
              left: Testoffdset + "%",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `calc(50% + ${Testoffdset * 2}%) -${
                (2 * h!) / 4 + 100
              }px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
          <motion.div
            variants={childVariants}
            transition={{ duration: animDuration, delay: animDelay }}
            style={{
              height: `${h! / 4 - 5}px`,
              top: `${(h! * 3) / 4}px`,
              left: "",
              backgroundSize: w! * 1.5 + "px",
              backgroundPosition: `50% -${(3 * h!) / 4 + 100}px`,
              backgroundRepeat: "no-repeat",
            }}
            className="absolute w-full left-0 bg-mainimg z-10 "
          ></motion.div>
        </>
      )}
    </>
  );
};

const Lines = () => {
  const matches = useMediaQuery("(min-width:768px)");

  const w = matches ? 24 : 16;

  return (
    <div className="flex flex-col gap-12 absolute -left-8 w-fit top-1/3 md:top-1/2 ">
      <motion.span
        key={"1"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        key={"2"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.2 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        key={"3"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.4 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        key={"4"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.6 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        key={"5"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 0.8 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
      <motion.span
        key={"6"}
        initial={{ width: "0", transform: "Rotate(0)" }}
        animate={{ width: w + "rem", transform: "Rotate(-30deg)" }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white block w-96 h-px -rotate-[30deg]"
      ></motion.span>
    </div>
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
