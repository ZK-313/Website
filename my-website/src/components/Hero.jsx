import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Starfield from "./Starfield";

export default function Hero() {
  const ref = useRef(null);

  // track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start sticky at top, end when section scrolls out
  });

  // gradient moves from left (0%) to right (100%) as you scroll
  const bgPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[300vh]"> 
      <Starfield starCount={700} />
      
      <div className="sticky top-0 flex items-center justify-left h-screen pl-25">
        <motion.h1
          className="text-6xl md:text-9xl font-inter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
          style={{
            backgroundSize: "200% auto",
            backgroundPositionX: bgPosition,
          }}
        >
          Zulfiqar Khan
        </motion.h1>
      </div>
    </section>
  );
}

