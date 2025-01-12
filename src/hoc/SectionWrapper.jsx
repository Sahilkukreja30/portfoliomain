import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { styles } from '../styles'

const SectionWrapper = (Component,idName) => {
  function HOC(){
    return(
        <motion.section id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:true,amount:0.25,}}
        className={`max-w-7xl mx-auto relative z-0`}>
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
  }
  return HOC;
}

export default SectionWrapper