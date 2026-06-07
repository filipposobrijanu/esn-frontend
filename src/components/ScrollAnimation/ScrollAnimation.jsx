import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "0px", // No margin - triggers exactly at viewport edge
      }}
      transition={{
        duration: 0.25, // Very fast
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
