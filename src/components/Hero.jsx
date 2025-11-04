import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const texts = ["Zulfiqar Khan", "Software Engineer"];
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseAfterTyping = 2000;
  const pauseAfterDeleting = 500;

  // track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start sticky at top, end when section scrolls out
  });

  // gradient animates from left to right as you scroll - colors flow across the name
  const bgPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        timeout = setTimeout(() => {
          // Start typing next text after pause
        }, pauseAfterDeleting);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section ref={ref} className="relative h-[200vh]"> 
      
      <div className="sticky top-0 flex flex-col items-start justify-center h-screen px-8 md:px-16 lg:px-24">
        <motion.div
          style={{ opacity, scale, y }}
          className="space-y-6 md:space-y-8"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 leading-tight"
            style={{
              backgroundSize: "200% auto",
              backgroundPositionX: bgPosition,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {displayText}
            <span className={`inline-block w-0.5 h-[0.9em] ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} style={{ 
              background: 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 191, 36))',
              transition: 'opacity 0.3s ease'
            }}>|</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

