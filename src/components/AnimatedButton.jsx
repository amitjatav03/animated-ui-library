// components/AnimatedButton.jsx
import { motion } from "framer-motion";

export default function AnimatedButton({ label }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full shadow-lg font-semibold tracking-wide transition-all  duration-50"
    >
        <span className="text-2xl">
        {label}
        </span>
      
    </motion.button>
  );
}
