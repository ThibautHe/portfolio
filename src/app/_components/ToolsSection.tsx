import ToolCard from "./ToolCard";
import reactIcon from "/public/logo/react-2.svg";
import nextIcon from "/public/logo/next-js.svg";
import tailwindIcon from "/public/logo/tailwind-css-2.svg";
import githubIcon from "/public/logo/github-icon-1.svg";
import csharpIcon from "/public/logo/c--4.svg";
import unityIcon from "/public/logo/unity-69.svg";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import { useCallback, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ToolsSection() {
  const [element, setElement] = useState<HTMLElement | null>(null);

  // Callback ref function to set the element
  const Ref = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setElement(node);
    }
  }, []);

  // Use useLayoutEffect to ensure the effect runs after the DOM is updated
  useLayoutEffect(() => {
    if (element !== null) {
      gsap.fromTo(element,{y:300}, {
        y: -400,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          markers: true,
          start: "-20% 80%", // Adjust this as needed
          end: "100% 0%",
          scrub: 3,
        },
      });
    }
  }, [element]); // Depend on `element` to run effect when `element` changes

  console.log(element);

  return (
    <div className="h-[50vh] content-center relative">
      <motion.h1 className="absolute text-black text-[25vw] text-stroke z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        TOOLS
      </motion.h1>
      <motion.div ref={Ref} className="z-50">
        <div className="grid toolsgrid-phone md:toolsgrid justify-center items-center gap-8 md:gap-36">
          <ToolCard icon={reactIcon} />
          <ToolCard icon={nextIcon} />
          <ToolCard icon={tailwindIcon} />
          <ToolCard icon={githubIcon} />
          <ToolCard icon={csharpIcon} />
          <ToolCard icon={unityIcon} />
        </div>
      </motion.div>
    </div>
  );
}
