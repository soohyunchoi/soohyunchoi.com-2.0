import { motion } from "framer-motion";
import React from "react";

interface AnimatedImageProps {
  src: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src }) => {
  const borderVariants = {
    initial: { width: 0, height: 0 },
    topRight: { width: "100%" },
    bottomRight: { height: "100%" },
    bottomLeft: { width: 0 },
    topLeft: { height: 0 },
  };

  return (
    <div className="relative">
      <img src={src} alt="Dynamic square" className="w-64 h-64" />

      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-red-500"
        initial="initial"
        animate="topRight"
        variants={borderVariants}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0 w-1 bg-red-500"
        initial="initial"
        animate="bottomRight"
        variants={borderVariants}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>

      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 right-0 h-1 bg-red-500"
        initial="initial"
        animate="bottomLeft"
        variants={borderVariants}
        transition={{ duration: 1, delay: 2 }}
      ></motion.div>

      {/* Left border */}
      <motion.div
        className="absolute bottom-0 left-0 w-1 bg-red-500"
        initial="initial"
        animate="topLeft"
        variants={borderVariants}
        transition={{ duration: 1, delay: 3 }}
      ></motion.div>
    </div>
  );
};

export default AnimatedImage;