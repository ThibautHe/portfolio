import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative mb-12 sm:mb-[30%] md:mb-[20%] lg:mb-[15%] sm:h-[300px] xl:h-full">
          <Dots></Dots>
          <div className="sm:absolute m-auto bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-24 w-[100%] md:w-fit ">
            <Image
              className="w-full"
              src={"/bgpic.png"}
              width={700}
              height={500}
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-[75%] m-auto relative">
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
        <p className="p-4">
          I am a frontend developer aspiring to become a fullstack developer, I
          live in Belgium close to brussels, my passion started with gaming,
          Since ever i can remember I've always liked games, so i decided to
          learn how to code them, this is when in the first year we got taught
          about web development and since i fell in love and stuck with it.
          <br /> <br /> I had to opportunity to fulfill a childhood dream and do
          my internship in a gaming company, There I finally could see how games
          were really made, And now i want to fulfill my new dream and work in
          the web industry.
        </p>
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
    </>
  );
}

const Dots = () => {
  let dots = [];

  for (let index = 0; index < 259; index++) {
    dots.push(
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.01, duration: 0.3 }}
        key={index}
        className="bg-white block w-[2px] h-[2px] rounded-full"
      ></motion.span>
    );
  }

  return (
    <motion.div className="hidden sm:grid w-[100%] h-full overflow-hidden md:w-[900px] grid-cols-16 gap-12 mx-[35%]">
      {dots}
    </motion.div>
  );
};
