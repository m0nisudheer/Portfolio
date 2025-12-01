import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Linked({data, isActive, setSelectedIndicator}) {
  
    const { title, href, index} = data;
     const slide = {
      initial: {x: 80},
      enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
      exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
  }
  
   const scale = {
      open: {scale: 1, transition: {duration: 0.3}},
      closed: {scale: 0, transition: {duration: 0.4}}
  }
  
    return (
      <motion.div 
        className={styles.link} 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className={styles.indicator}>
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}