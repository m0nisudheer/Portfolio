"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function PageTransition() {

  const [paths, setPaths] = useState({
    initial: "",
    target: ""
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const h = window.innerHeight;

      setPaths({
        initial: `M100 0 L100 ${h} Q-100 ${h / 2} 100 0`,
        target: `M100 0 L100 ${h} Q100 ${h / 2} 100 0`
      });
    }
  }, []);

  if (!paths.initial) return null; // render nothing until calculated

  const curve = {
    initial: { d: paths.initial },
    animate: {
      d: paths.target,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: paths.initial,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </svg>
  );
}
