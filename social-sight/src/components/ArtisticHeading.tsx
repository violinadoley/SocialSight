'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ArtisticHeading: React.FC = () => {
  const [text, setText] = useState('')
  const fullText = "Unnlock\u00A0The\u00A0Power\u00A0Of\u00A0Your\u00A0Social\u00A0Media\u00A0Data"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 200)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="relative w-full h-32 overflow-hidden bg-gradient-to-r from-cyan-700 via-gray-600 to-blue-950 rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-black to-gray-500 mix-blend-multiply animate-gradient"></div>
      
      {/* Floating shapes */}
      <motion.svg
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.circle
          cx="10%"
          cy="20%"
          r="5%"
          fill="rgba(255,255,255,0.1)"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.rect
          x="80%"
          y="60%"
          width="10%"
          height="10%"
          fill="rgba(255,255,255,0.1)"
          animate={{
            rotate: [0, 45, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.polygon
          points="50,10 60,40 40,40"
          fill="rgba(255,255,255,0.1)"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      <h1 className="relative z-10 flex items-center justify-center h-full text-4xl sm:text-5xl font-bold text-white text-center px-4">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}

export default ArtisticHeading

