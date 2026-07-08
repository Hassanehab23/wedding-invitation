import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="fixed inset-0 z-999 flex items-center justify-center pointer-events-none bg-black"
    >
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-yellow-400"
      >
        Mostafa ❤️ Aya
      </motion.h1>
    </motion.div>
  );
}