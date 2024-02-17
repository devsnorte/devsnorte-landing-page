"use client";
//menu fechado

// <svg
//   width="60"
//   height="60"
//   viewBox="0 0 60 60"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <rect width="60" height="60" fill="#5ED29E" />
//   <path d="M15 23H45" stroke="#111111" stroke-linecap="round" />
//   <path d="M15 30L45 30" stroke="#111111" stroke-linecap="round" />
//   <path d="M25 37L45 37" stroke="#111111" stroke-linecap="round" />
// </svg>;

// // menu aberto
// <svg
//   width="60"
//   height="60"
//   viewBox="0 0 60 60"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <rect width="60" height="60" fill="#5ED29E" />
//   <path
//     d="M40.2133 40.4171L19.0001 19.2039"
//     stroke="#111111"
//     stroke-linecap="round"
//   />
//   <path
//     d="M19.4919 41.2039L38.5071 18"
//     stroke="#111111"
//     stroke-linecap="round"
//   />
// </svg>;

import { AnimatedPresence } from "framer-motion";
import { useState } from "react";
import { Burguer } from "./Burguer";
import Stairs from "./Stairs/Stairs";
import Menu from "./Menu";


export default function MenuIcon() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <Burguer openMenu={() => {setMenuIsOpen(true)}} />
      <AnimatedPresence mode="wait">
        {menuIsOpen &&
          <>
        
          <Stairs />
          
          <Menu closeMenu={() => {setMenuIsOpen(false)}} />
          </> 
        }
      </AnimatedPresence>
    </div>
  );
}
