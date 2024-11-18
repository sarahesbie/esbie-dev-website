"use client";
import React, { useEffect, useState } from "react";

const RandomMessage = () => {
  const messages = [
    "spending time with my family in nature.",
    "making a mess in the kitchen with my toddler.",
    "sketching ideas for my next big project.",
    "rewatching The Office for the seventeenth time.",
    "playing board games with my friends.",
    "doing a bakery crawl through the Adelaide Hills.",
    "playing resource management computer games.",
    "chit-chatting with my local barista.",
    "at the gym lifting heavy things and putting them down again.",
    "getting inspired at a tech conference.",
    "watching live local music and/ or theatre.",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return <span>{currentMessage}</span>;
};

export default RandomMessage;
