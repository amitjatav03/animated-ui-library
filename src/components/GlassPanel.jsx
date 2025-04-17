// components/GlassPanel.jsx
import { motion } from "framer-motion";

export default function GlassPanel({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-2xl text-white shadow-lg"
    >
      {children}
    </motion.div>
  );
}
