import Link from "next/link";
import Image from "next/image";
import { UrlObject } from "url";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import { motion } from "framer-motion";

type Work = {
  title: string;
  image: string;
  url: string;
};

export default function ProjectCard({ work }: { work: Work }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between letters
      },
    },
    exit: {
      transition: { staggerChildren: 0.2, staggerDirection: 1 }, // Reverse stagger
    },
  };

  const letterVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "linear",
        delay: index * 0.1, // Stagger on entrance
      },
    }),

    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "linear",
        delay: index * 0.1, // Stagger on entrance
      },
    }),

    exit: (index: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "linear",
        delay: index * 0.1, // Stagger on exit
      },
    }), // Fixed the missing closing parenthesis here
  };

  return (
    <div
      className="h-[700px] border p-6 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link target="_blank" href={work.url}>
        <Image
          className="w-full"
          src={work.image}
          width={1000}
          height={500}
          alt={work.title as string}
        />
      </Link>
      <div className="flex flex-col h-full">
        <div className="flex justify-between mt-4 h-1/2">
          <h1>{work.title}</h1>
          <p>date</p>
        </div>
        <div className="flex justify-between items-end h-1/2">
          <p>Website type</p>
          <Link
            className="px-6 py-2 rounded-xl relative "
            target="_blank"
            href={work.url}
          >
            {/* Motion wrapper */}
            <div className="relative w-full h-full flex justify-center items-center">
              {/* ">" Icon */}
              <motion.span
                key="arrow"
                initial={{ y: 0, opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {">"}
              </motion.span>

              {/* "Visit" Text with Stagger */}
              <motion.div
                key="visit"
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
                exit="exit"
                className="absolute flex space-x-1"
              >
                {"WATCH".split("").map((letter, index) => (
                  <motion.span
                    className="font-custom text-3xl font-extrabold"
                    key={index}
                    variants={letterVariants}
                    custom={index} // Pass index here
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
