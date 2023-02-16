import styled from "styled-components";
import { CoverVideo } from "../components";

const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

export const Home = () => {
  return (
    <Section>
      <CoverVideo />
    </Section>
  );
};
