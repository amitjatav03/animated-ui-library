// components/LoaderSpinner.jsx
import { motion } from "framer-motion";

export default function LoaderSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      className="w-12 h-12 border-4 border-t-white border-gray-500 rounded-full mx-auto"
    />
  );
}
