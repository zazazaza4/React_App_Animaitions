import { motion, Variants } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    height: 100vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }

    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${({ theme }) => `rgba(${theme.bodyRgba}, 0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${({ theme }) => theme.fontBig};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${({ theme }) => theme.fontlg};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${({ theme }) => theme.fontmd};
      margin-top: 0.5rem;
    }
  }
`;

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 4.5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const CoverVideo: FC = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={containerVariants} initial="hidden" animate="visible">
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            W
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            b
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          variants={itemVariants}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Inspire. Create. Belive
        </motion.h2>
      </Title>
      <video src={MainVideo} autoPlay muted loop />
    </VideoContainer>
  );
};
