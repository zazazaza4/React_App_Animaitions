import { FC } from "react";
import styled from "styled-components";

import { CoverVideo, Logo, NavBar } from "../components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

export const Home: FC = () => {
  return (
    <Section id="home">
      <CoverVideo />
      <Logo />
      <NavBar />
    </Section>
  );
};
