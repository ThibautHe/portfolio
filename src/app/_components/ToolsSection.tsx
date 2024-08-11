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

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";



export default function ToolsSection() {
  const ref = useRef(null);
  const titleref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });

  const textdisplacement = useTransform(
    scrollYProgress,
    [0, 1],
    ["-200px", "200px"]
  );

  return (
    <>
      <div className="h-[50vh] content-center relative">
        <motion.h1
          ref={titleref}
          className="absolute text-black text-[25vw] text-stroke z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          TOOLS
        </motion.h1>
        <motion.div
          ref={ref}
          style={{ translateY: textdisplacement }}
          className="z-50  "
        >
          <div className="grid toolsgrid justify-center items-center gap-36">
            <ToolCard icon={reactIcon}></ToolCard>
            <ToolCard icon={nextIcon} />
            <ToolCard icon={tailwindIcon} />
            <ToolCard icon={githubIcon} />
            <ToolCard icon={csharpIcon} />
            <ToolCard icon={unityIcon} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
