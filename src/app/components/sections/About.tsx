/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";  // ✅ Import Next.js Image component

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#282828] text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center">
        
        {/* Left Side: About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a <strong>Software Engineer</strong> with over <strong>5 years of experience</strong>, specializing in 
            <strong> backend development, cloud infrastructure, and scalable architectures</strong>. 
            I focus on building <strong>high-performance systems</strong> and optimizing complex workflows across various domains, 
            including <strong>AI-driven solutions, data engineering, and full-stack development</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Beyond coding, I'm passionate about <strong>mentoring, system design, and solving engineering challenges</strong>. 
            With hands-on experience in <strong>architecting high-performance systems, optimizing databases, and integrating scalable cloud solutions</strong>, 
            I excel at building <strong>resilient and future-proof applications</strong> that drive real-world impact.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Whether it's designing <strong>event-driven architectures</strong>, optimizing databases, or integrating 
            <strong> machine learning</strong> into real-world applications, I thrive on building meaningful, future-proof solutions.
          </p>
          <p className="text-lg leading-relaxed mt-6 font-semibold">
            Always eager to collaborate and tackle new challenges. If you're looking for an experienced engineer, let's discuss how I can add value to your team!
          </p>
        </motion.div>

        {/* Right Side: Circular Developer Image with Soft Glow */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-56 md:w-64 lg:w-72 rounded-full overflow-hidden shadow-lg shadow-gray-700">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            <Image 
              src="/developer.png" 
              alt="Suraj Sharma" 
              width={288} // Adjust width based on your design (lg:w-72 → 288px)
              height={288} 
              className="w-full h-full object-cover"
              priority // ✅ Optimize loading
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
