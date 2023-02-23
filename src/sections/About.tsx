import { FC } from "react";
import styled from "styled-components";

import { aboutImgs, speedImgs } from "../assets/images/about";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;

  @media (max-width: 40em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 3;

  @media (max-width: 64em) {
    font-size: ${({ theme }) => `calc(${theme.fontBig} - 5vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontxxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 3;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;

    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${({ theme }) => `rgba(${theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${({ theme }) => theme.fontsm};
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    position: absolute;
    width: 40%;
    right: 50%;
    bottom: 10%;
  }

  .small-img-2 {
    position: absolute;
    width: 40%;
    left: 80%;
    bottom: 10%;
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }

    .small-img-2 {
      width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%;
    }
  }
`;

export const About: FC = () => {
  return (
    <Section id="about">
      <Title
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-2"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-target="#about" data-scroll-sticky>
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellary pieces. Fashion is
        an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is easy for everyone.
      </Left>
      <Right>
        {aboutImgs.map((item, index) => (
          <img
            data-scroll
            data-scroll-speed={speedImgs[index]}
            className={`small-img-${index}`}
            key={item}
            src={item}
            alt="About Us"
          />
        ))}
      </Right>
    </Section>
  );
};
