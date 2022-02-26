import { motion } from 'framer-motion';
import Link from 'next/link';

const Test = () => {
  return (
    <motion.div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{
        scaleX: 1,
        scaleY: 1,
        // rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      exit={{ scaleX: 0, scaleY: 0 }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
      }}
      layout={true}
    >
      <Link href="/">To Home</Link>
    </motion.div>
  );
};

export default Test;
