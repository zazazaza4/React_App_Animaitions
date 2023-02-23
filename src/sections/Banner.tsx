import { FC } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 48em) {
    justify-content: center;
  }
`;

const BannerComponent = styled.h2`
  font-size: ${({ theme }) => theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${({ theme }) => theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  z-index: 5;

  span {
    display: block;
    background-color: ${({ theme }) => theme.body};
    padding: 1rem 2rem;
  }

  @media (max-width: 70em) {
    font-size: ${({ theme }) => theme.fontxxl};
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontlg};
    margin: 0.5rem 0;
  }

  @media (max-width: 30em) {
    font-size: ${({ theme }) => theme.fontmd};
  }
`;

export const Banner: FC = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="8"
            data-scroll-target="#up"
            data-scroll-direction="horizontal"
          >
            Fashion is the armour
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="-6"
            data-scroll-target="#up"
            data-scroll-direction="horizontal"
          >
            to survive of everyday life.
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-target="#up"
            data-scroll-direction="horizontal"
          >
            One is never over-dressed or
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="-4"
            data-scroll-target="#up"
            data-scroll-direction="horizontal"
          >
            under-dressed
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-target="#up"
            data-scroll-direction="horizontal"
          >
            with a Little Black Dress.
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};
