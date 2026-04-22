import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Fast delivery and excellent design. Highly recommend working with Wale.",
      name: "Michael A.",
      role: "Startup Founder",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      text: "Very responsive and professional. Clean code and great UI skills.",
      name: "Sarah K.",
      role: "Business Owner",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      text: "Amazing attention to detail. Delivered exactly what I needed.",
      name: "David O.",
      role: "Product Manager",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=8",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400">
        ★
      </span>
    ));
  };

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto bg-linear-to-b from-gray-50 to-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>

      <div className="relative max-w-xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-2xl shadow-md transition-all border border-gray-100 duration-700 ease-in-out">
          <p className="text-sm text-gray-400 mb-2">Sample client feedback</p>
          <div className="flex gap-1 mb-3 text-yellow-400">
            {renderStars(testimonials[index].rating)}
          </div>

          <p className="text-gray-600 mb-6 italic">
            "{testimonials[index].text}"
          </p>

          <div className="flex items-center gap-4">
            <img
              src={testimonials[index].avatar}
              className="w-12 h-12 rounded-full"
              alt="avatar"
            />
          </div>

          <div className="text-left">
            <h4 className="font-semibold">{testimonials[index].name}</h4>
            <p className="text-sm text-gray-500">{testimonials[index].role}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
