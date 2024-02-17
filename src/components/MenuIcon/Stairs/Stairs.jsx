import React from 'react';
import { motion } from 'framer-motion';
import { background, height, mountAnim } from './anim.jsx';



export function Stairs() {

  return (

    <div className={'top-0 left-0 fixed z-2 h-full flex transition-all pointer-events-none'}>

      {

        [...Array(5)].map( (_, index) => {

          return <Stair key={index} index={index}/>

        })

      }

      <Background />

    </div>

  )

}



export const Stair = ({index}) => {

  return <motion.div 

  variants={height} 

  {...mountAnim}

  custom={4 - index} 

  className={'w-1/4 h-full bg-black'}>

  </motion.div>

}



export const Background = () => {

  return <motion.div 

    variants={background} 

    {...mountAnim}

    className={'w-full h-full absolute bg-black'}>

  </motion.div>

}
