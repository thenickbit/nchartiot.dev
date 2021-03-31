import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import styles from 'styles/Home.module.css';

const Home = () => {
  return (
    <motion.div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      exit={{ scaleX: 0, scaleY: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      layout={true}
    >
      <Link href="/test">To Test</Link>
    </motion.div>
  );
};

export default Home;
