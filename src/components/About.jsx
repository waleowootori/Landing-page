import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About</h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        I help businesses create modern websites that perform well across all
        devices.
      </p>
    </motion.div>
  );
}
