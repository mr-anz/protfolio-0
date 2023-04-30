import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Anees K A, and I am passionate about creating
            digital content for the web3. My interest in Blockchain development was
            sparked in 2022 .I am a skilled blockchain developer in developing         
            decentralized web apps on EVM blockchain platform.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in developing
            blockchain applications that delight clients and exceed their
            expectations.
            
          </p>

          <p className="about-grid-info-text">
            
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project such as DAO.
         
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Vite</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Solidity</li>
            <li className="about-grid-info-list-item">Hardhat</li>
            <li className="about-grid-info-list-item">NFTs</li>
            <li className="about-grid-info-list-item">Hardhat</li>
            <li className="about-grid-info-list-item">Ethers.js</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Anees.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
