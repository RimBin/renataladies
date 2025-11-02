import { motion } from 'framer-motion';

export function ActionIcon() {
  return (
    <motion.div
      className="absolute z-10 flex items-center justify-center w-16 h-16 rounded-full pointer-events-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className="w-full h-full rounded-full bg-white/50 backdrop-blur-sm shadow-lg"></div>
      <svg
        className="absolute w-8 h-8 text-rlText"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5 4.5L21 16.5m0 0L16.5 12M21 16.5H3"
        />
      </svg>
    </motion.div>
  );
}
