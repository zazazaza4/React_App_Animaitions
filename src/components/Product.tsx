import { motion } from "framer-motion";
import styled from "styled-components";

const Item = styled(motion.div)<{
  width: string;
  margin: string;
  index: number;
  pointer: string;
}>`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    z-index: ${({ index }) => index};
  }

  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: ${({ pointer }) => pointer};
  }

  @media (max-width: 30em) {
    width: 15rem;
  }
`;

interface IProductProps {
  img: string;
  title?: string;
  isFilter?: boolean;
  width?: string;
  margin?: string;
  zIndex?: number;
  pointer?: "none" | "pointer";
}

export const Product = ({
  img,
  title = "",
  isFilter = true,
  width = "20rem",
  margin = "0 6rem 0 0",
  zIndex = 5,
  pointer = "none",
}: IProductProps) => {
  if (isFilter) {
    return (
      <Item
        pointer={pointer}
        width={width}
        margin={margin}
        index={zIndex}
        initial={{ filter: "grayscale(100%)" }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >
        <img width="400" height="600" src={img} alt={title} />
        {title && <h1>{title}</h1>}
      </Item>
    );
  }

  return (
    <Item pointer={pointer} width={width} margin={margin} index={zIndex}>
      <img width="400" height="600" src={img} alt={title} />
      {title && <h1>{title}</h1>}
    </Item>
  );
};
