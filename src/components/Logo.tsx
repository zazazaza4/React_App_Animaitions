import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${({ theme }) => theme.text};
  z-index: 2;

  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${({ theme }) => theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontsm};
  color: ${({ theme }) => theme.text};
  padding-bottom: 0.5rem;
`;

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 1.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Logo: FC = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
      </Link>
      <Link to="/">
        <Text variants={textVariants} initial="hidden" animate="visible">
          Wibe Studio
        </Text>
      </Link>
    </Container>
  );
};
