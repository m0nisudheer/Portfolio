"use client";
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useEffect, useRef, useState } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';

export default function index() {
    const container = useRef(null);
    const [time, setTime] = useState(new Date());
const [screenWidth, setScreenWidth] = useState(0);

useEffect(() => {
  setScreenWidth(window.innerWidth);

  const handleResize = () => setScreenWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

// Responsive Y animation values
let yStart = -500; // desktop default

if (screenWidth < 768) {
  yStart = -200;        // mobile
} else if (screenWidth < 1024) {
  yStart = -350;        // tablet
}

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    };
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
const isDesktop = screenWidth >= 1024;

const xDesktop = useTransform(scrollYProgress, [0, 1], [200, 0]);
const yDesktop = useTransform(scrollYProgress, [0, 1], [yStart, 0]);
const rotateDesktop = useTransform(scrollYProgress, [0, 1], [120, 90]);
const x = isDesktop ? xDesktop : 0;
const y = isDesktop ? yDesktop : 0;
const rotate = isDesktop ? rotateDesktop : 0;


    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div id="Contact" className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/assets/portfolioImg.jpeg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={isDesktop ? {x} : {}} className={styles.buttonContainer}>
                        <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                     <Rounded>
        <a href="mailto:sudheer102002@gmail.com" target="_blank">
            <p>sudheer102002@gmail.com</p>
        </a>
    </Rounded>

    <Rounded>
        <a href="tel:+919346240660" target="_blank">
            <p>+91 934 624 0660</p>
        </a>
    </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>{formatTime(time)}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <Link href="https://github.com/m0nisudheer" target="_blank"><p>GitHub</p></Link> 
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <Link href="https://www.instagram.com/sudheer._.chowdaryy" target="_blank"><p>Instagram</p></Link>
                        </Magnetic>
                       
                        <Magnetic>
                            <Link href="https://www.linkedin.com/in/manisudheer" target="_blank"><p>Linkedin</p></Link>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
