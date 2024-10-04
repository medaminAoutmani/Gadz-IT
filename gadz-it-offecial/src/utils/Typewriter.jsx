import React, { useEffect, useState } from 'react';

const Typewriter = ({ phrases }) => {

  const [currentText, setCurrentText] = useState('');
  const [curPhraseIndex, setCurPhraseIndex] = useState(0);
  const sleepTime = 100;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const typeWord = async (word) => {
    // Typing effect
    for (let i = 0; i < word.length; i++) {
      setCurrentText(word.substring(0, i + 1));
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10); // Pause before deleting

    // Deleting effect
    for (let i = word.length; i > 0; i--) {
      setCurrentText(word.substring(0, i - 1));
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5); // Pause before next word
  };

  useEffect(() => {
    const runTypewriter = async () => {
      await typeWord(phrases[curPhraseIndex]);
      setCurPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    runTypewriter();
  }, [curPhraseIndex]); // Run effect when curPhraseIndex changes

  return (
    <>
      <span className=''>{currentText}</span>
      <span className='text-white animate-[blink_1s_linear_infinite]'>|</span>
    </>
  );
};

export default Typewriter;