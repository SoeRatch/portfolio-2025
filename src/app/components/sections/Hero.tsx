import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Hello, I'm</h1>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-500 mt-2">Suraj Sharma</h2>
      <h3 className="text-2xl sm:text-3xl text-white font-semibold mt-2"><AnimatedText /></h3>
      <p className="text-gray-300 mt-4">
        Building scalable systems, optimizing performance, and solving complex problems.  
        Passionate about <span className="text-yellow-500">backend</span>, <span className="text-yellow-500">cloud</span>, and <span className="text-yellow-500">data-driven architectures</span>.  
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/SoeRatch" target="_blank" rel="noopener noreferrer" 
          className="text-white text-2xl p-2 rounded-lg border border-gray-600 transition-transform transform hover:scale-110 hover:text-gray-300 hover:border-gray-400">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/surajs787" target="_blank" rel="noopener noreferrer" 
          className="text-white text-2xl p-2 rounded-lg border border-gray-600 transition-transform transform hover:scale-110 hover:text-[#0077b5] hover:border-[#0077b5]">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@ExDevPro" target="_blank" rel="noopener noreferrer" 
          className="text-white text-2xl p-2 rounded-lg border border-gray-600 transition-transform transform hover:scale-110 hover:text-[#FF0000] hover:border-[#FF0000]">
          <FaYoutube />
        </a>
        <a href="https://leetcode.com/SoeRatch" target="_blank" rel="noopener noreferrer" 
          className="text-white text-2xl p-2 rounded-lg border border-gray-600 transition-transform transform hover:scale-110 hover:text-[#FFA116] hover:border-[#FFA116]">
          <SiLeetcode />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 border border-yellow-500 text-yellow-500 font-semibold rounded-lg 
          hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Hero;
