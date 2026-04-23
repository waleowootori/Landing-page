import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-28 px-6">
      <p className="text-sm text-gray-500 mb-4">Freelance Frontend Developer</p>

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Build Fast, Modern & High-Converting Websites
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        I’m Wale Owootori — I help startups build fast, modern,
        conversion-focused web apps that perform well across all devices.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-black text-white px-7 py-3 rounded-xl">
          View Work
        </a>

        <a href="#contact" className="border px-7 py-3 rounded-xl">
          Hire Me
        </a>
      </div>
    </motion.div>
  );
}
