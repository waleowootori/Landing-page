import { motion } from "framer-motion";

export default function Features() {
  const features = [
    "Fast Performance",
    "Mobile Responsive",
    "Clean UI Design",
    "SEO Friendly",
  ];

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Features</h2>

      <div className="grid md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow-sm">
            {feature}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
