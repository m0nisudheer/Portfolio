import styles from './style.module.scss';
import { useInView, motion, inView } from 'framer-motion';
import { useRef } from 'react';
import Rounded from '../../common/RoundedButton';
export default function index() {
     const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i) => ({
            y: "0%",
            transition: {duration: 0.5, delay: 0.01 * i}
        }),
        closed: {
            y: "100%",
            transition: {duration: 0.5}
        }
    }
    
     const opacity = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {duration: 0.5}
        },
        closed: {
            opacity: 0,
            transition: {duration: 0.5}
        }
    }

    const phrase = "Passionate Frontend Developer with strong coding skills, always exploring new technologies and optimizing solutions. I love building efficient, user-friendly experiences while helping others grow through knowledge sharing.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div id="About" ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" :"closed"}  key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" :"closed"} >The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p className=''>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
