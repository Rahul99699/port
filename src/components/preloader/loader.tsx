"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";
import { cn } from "@/lib/utils";


const steps = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];

export default function Index() {
  const { isLoading, loadingPercent } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == steps.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={cn(styles.introduction, "relative overflow-hidden")}
    >
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 2.5, 
              filter: "blur(20px)",
              background: "radial-gradient(circle, rgba(255,100,0,0.8) 0%, rgba(255,50,0,0.4) 40%, rgba(0,0,0,0) 70%)"
            }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 pointer-events-none z-[-1]"
          />
        )}
      </AnimatePresence>
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {(loadingPercent - (loadingPercent % 5)).toFixed(0)} %
          </motion.p>
          <svg className="w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="currentColor"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>

  );
}