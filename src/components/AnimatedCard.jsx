// components/AnimatedCard.jsx
import { motion } from "framer-motion";

export default function AnimatedCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-xl cursor-pointer transition-all duration-300"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </motion.div>
  );
}
