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
    "at the gym, lifting heavy things and putting them down again.",
    "getting inspired at a tech conference.",
    "watching live local music or theatre.",
    "having a dance party in my living room.",
    "going down an internet rabbit hole.",
    "catching up on the group chat.",
    "eating a giant salad that I saw on TikTok.",
    "having a cup of tea and a biscuit.",
    "staring off into the middle distance.",
    "saying hi to a cow on the family farm.",
    "immersing myself in a large body of water.",
    "thinking about the paradoxes of time travel.",
    "cleaning my house while bingeing podcasts.",
    "picking apples, or strawberries, depending on the season.",
    "vaguing out to kids TV shows with my son.",
    "thinking about playing The Sims 4 again.",
    "going for a long, mindful walk in the wetlands.",
    "catching up with a friend for lunch.",
    "having a picnic with friends, weather permitting.",
    "splashing in puddles after the rain.",
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
