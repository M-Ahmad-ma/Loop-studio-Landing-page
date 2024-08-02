import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heroImage from '../images/desktop/image-hero.jpg';

function Hero() {
  const texts = ["IMPRESSIVE", "EXPERIENCE", "THAT DELIVER"];  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width: '100vw',
        height: '100vh', // Adjust the height as needed
      }}
      className="flex items-center justify-center text-white"
    >
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative w-[700px] h-76 border-solid border-2 border-white flex flex-col p-7 md:-ml-[25rem] md:mt-10 md:-mb-[10rem]"
      >
        {texts.map((text, index) => (
          <motion.div
            key={index}
            className="text-4xl font-bold mb-2 overflow-hidden relative h-[50px] md:text-6xl"
            variants={itemVariants}
          >
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center"
            >
              {text}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center text-red-500"
            >
              {text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
