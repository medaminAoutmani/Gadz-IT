import React from 'react';
import { motion } from 'framer-motion';

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
}

const SplitStringComponent = ({ inputString }) => {
  const splitStringUsingRegex = (inputString) => {
    const characters = [];
    const regex = /[\s\S]/gu;

    let match;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(match[0]);
    }

    return characters;
  };

  const characters = splitStringUsingRegex(inputString);

  return (
    <div>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          transition={{ duration: 0.35 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))
      }
    </div >
  );
};

export default SplitStringComponent;