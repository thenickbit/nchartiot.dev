import { motion } from 'framer-motion';
import Link from 'next/link';

const Test = () => {
  return (
    <motion.div
      style={{ width: '100vw', height: '100vh', backgroundColor: 'blue' }}
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      exit={{ scaleX: 0, scaleY: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <Link href="/">To Home</Link>
    </motion.div>
  );
};

export default Test;
