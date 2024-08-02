import React from 'react';
import { motion, useInView } from 'framer-motion';
import earthDesktop from '../images/desktop/image-deep-earth.jpg';
import curiosityDesktop from '../images/desktop/image-curiosity.jpg';
import fisheyeDesktop from '../images/desktop/image-fisheye.jpg';
import gridDesktop from '../images/desktop/image-grid.jpg';
import nightarcadeDesktop from '../images/desktop/image-night-arcade.jpg';
import auraDesktop from '../images/desktop/image-pocket-borealis.jpg';
import soccerDesktop from '../images/desktop/image-soccer-team.jpg';
import fromAboveDesktop from '../images/desktop/image-from-above.jpg';

import earthMobile from '../images/mobile/image-deep-earth.jpg';
import curiosityMobile from '../images/mobile/image-curiosity.jpg';
import fisheyeMobile from '../images/mobile/image-fisheye.jpg';
import gridMobile from '../images/mobile/image-grid.jpg';
import nightarcadeMobile from '../images/mobile/image-night-arcade.jpg';
import auraMobile from '../images/mobile/image-pocket-borealis.jpg';
import soccerMobile from '../images/mobile/image-soccer-team.jpg';
import fromAboveMobile from '../images/mobile/image-from-above.jpg';

const images = [
  { desktop: earthDesktop, mobile: earthMobile, label: "Deep EARTH" }, 
  { desktop: nightarcadeDesktop, mobile: nightarcadeMobile, label: "NIGHT ARCADE" },
  { desktop: soccerDesktop, mobile: soccerMobile, label: "SOCCER TEAM" },
  { desktop: gridDesktop, mobile: gridMobile, label: "THE GRID" },
  { desktop: fromAboveDesktop, mobile: fromAboveMobile, label: "FROM UP ABOVE VR" },
  { desktop: auraDesktop, mobile: auraMobile, label: "POCKET BOREALIS" },
  { desktop: curiosityDesktop, mobile: curiosityMobile, label: "CURIOSITY" },
  { desktop: fisheyeDesktop, mobile: fisheyeMobile, label: `MAKE IT FISHEYE` }
];

const itemVariants = { 
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const bounceTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20
};

const GridItem = ({ desktop, mobile, label }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      className='relative overflow-hidden'
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      transition={{ duration: 0.2 }}
    >
      <motion.img 
        src={desktop} 
        alt={label} 
        className='hidden md:block w-full h-full object-cover'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.img 
        src={mobile} 
        alt={label} 
        className='block md:hidden w-full h-full object-cover'
        whileHover={{ scale: 3 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <h1 className='absolute bottom-[30px] left-4 text-2xl font-medium'>{label}</h1>
    </motion.div>
  );
};

const Grid = () => (
  <div className='px-[1rem] mt-[4rem] md:px-[10rem]'>
    <div className='p-9 flex items-center justify-between'>
      <h1 className='text-4xl md:text-6xl'>OUR CREATION</h1>
      <button className='border border-black px-9 py-2 hidden md:flex  hover:bg-black hover:text-white'>SEE ALL</button>
    </div>
    <motion.div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-white'>
      {images.map((item, index) => (
        <GridItem key={index} desktop={item.desktop} mobile={item.mobile} label={item.label} /> 
      ))}
    </motion.div>
    <div className='text-center'>
      <button className='border border-black px-7 py-2 flex mt-9 md:hidden hover:bg-black text-white'>SEE ALL</button> 
    </div>
  </div>
);

export default Grid;
