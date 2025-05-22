import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <img
          src="image/cover/computer/1.svg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
