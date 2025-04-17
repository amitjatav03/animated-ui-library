import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

  return (
    <motion.div className="fixed top-0 left-0 w-12 h-12 border-2 border-zinc-400  rounded-full pointer-events-none z-[9999]"
    animate={{
      x: position.x - 12,
      y: position.y - 12,
    }}
    transition={{
      type: "linear",
      stiffness: 100,
      duration: .1
    }}></motion.div>
  )
}

export default Cursor