import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type toolcardProps = {
  icon: string;
};
export default function ToolCard({ icon }: toolcardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [0, 1], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-17.5deg", "17.5deg"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e == null) {
      return;
    }

    // Assuming 'e.currentTarget' is the element to get the boundaries of
    const element = e.currentTarget as HTMLDivElement;
    const boundaries = element.getBoundingClientRect();
    const w = boundaries.width;
    const h = boundaries.height;

    const mouseX = e.clientX - boundaries.left;
    const mouseY = e.clientY - boundaries.top;
    const xPct = mouseX / w;
    const yPct = mouseY / h;

    x.set(xPct);
    y.set(yPct);
  };

  const onMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };
  return (
    <motion.div
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="m-auto bg-black border-[1px]  w-36 h-36 flex justify-center items-center"
    >
      <div style={{ transform: "translateZ(75px)" }}>
        <Image alt="icon" src={icon} width={100} height={100}></Image>
      </div>
    </motion.div>
  );
}
