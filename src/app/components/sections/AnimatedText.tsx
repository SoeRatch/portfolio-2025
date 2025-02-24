"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = [
    "Backend Engineer",
    "Lead Software Engineer",
    "Data Engineer",
    "Full-Stack Developer",
    "System Architect",
    "Technical Mentor & Leader",
    "Machine Learning Enthusiast",
  ];
  

const scramble = (text: string) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return text
    .split("")
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join("");
};

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[2]); // Use static text initially

  useEffect(() => {
    let charIndex = 0;
    const currentWord = words[index];
    let scrambledText = scramble(currentWord);

    const interval = setInterval(() => {
      if (charIndex < currentWord.length) {
        scrambledText =
          currentWord.substring(0, charIndex + 1) + scramble(currentWord.slice(charIndex + 1));
        setDisplayText(scrambledText);
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 1500); // Pause before switching words
      }
    }, 75);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.span
      className="text-color text-2xl font-semibold"
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

export default AnimatedText;
