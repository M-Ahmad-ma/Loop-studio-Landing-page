import React from 'react';
import { motion } from 'framer-motion';
import Image from '../images/desktop/image-interactive.jpg';

function VrImage() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='flex flex-col w-[100vw] h-[500px] p-3 md:flex-row md:ml-[12rem] md:mt-9'>
      <div>
        <img src={Image} alt="Interactive VR" /> 
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='text-center p-4 md:max-w-[600px] md:absolute left-[48rem] bottom-[-39rem] bg-white md:h-[340px] md:text-left md:pl-20 md:pt-10'
      >
        <motion.h1 className='text-4xl' variants={itemVariants}>
          THE LEADER IN <br /> INTERACTIVE VR
        </motion.h1> 
        <motion.p className='pt-4' variants={itemVariants}>
          Founded in 2021, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe. 
          Our award-winning creations have transformed businesses through experiences that bind to their brand.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default VrImage;
