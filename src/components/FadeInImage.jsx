// components/FadeInImage.jsx
import { motion } from "framer-motion";

export default function FadeInImage({ src, alt }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-xl shadow-lg w-full max-w-sm"
    />
  );
}
