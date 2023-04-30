import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/0-C.png",
      projectName: "CrowdFunding Dapp",
      projectLink: "#",
      projectDescription:
        "A Web3 crowdfunding Dapp is a decentralized application built on blockchain technology that allows users to create, view, and donate to crowdfunding campaigns directly through the blockchain. The Dapp interacts with a smart contract deployed to the blockchain and uses a frontend UI to interact with users.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "CSS",
        "Hardhat",
        "Javascript",
        "Solidity",
        "Ethers.js",
        "Tailwind",
      ],
      projectExternalLinks: {
        github: "https://github.com/mr-anz/crowdFunding-Dapp",
        externalLink: "",
      },
    },
    {
      image: "/0-T.png",
      projectName: "Buy-me-a-Coffee",
      projectLink: "#",
      projectDescription:
        "The app would allow users to create a new Ethereum account or connect to an existing one, and then send ETH to any other Ethereum address in the world.",
      projectTech: [
        "Vite",
        "Redux Toolkit",
        "CSS",
        "Hardhat",
        "Javascript",
        "Solidity",
        "Ethers.js",
        "Tailwind",
      ],
      projectExternalLinks: {
        github: "https://github.com/mr-anz/buy-me-a-coffee",
        externalLink: "",
      },
    },
    {
      image: "/0-NM.png",
      projectName: "NFT Marketplace",
      projectLink: "#",
      projectDescription:
        "It is ablockchain-based platform for buying, selling, and discovering unique NFTs. Find one-of-a-kind NFTs from around the world, create and list your own, and receive instant payments in cryptocurrency. ",
      projectTech: [
           "React",
        "Redux Toolkit",
        "CSS",
        "Hardhat",
        "Javascript",
        "Solidity",
        "Ethers.js",
        "Tailwind",
      ],
      projectExternalLinks: {
        github: "https://github.com/mr-anz/0-NFTMarketplace",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
