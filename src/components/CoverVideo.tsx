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

const Title = styled.div`
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
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${({ theme }) => theme.fontlg};
    text-shadow: 1px 1px 1px ${({ theme }) => theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

export const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          Inspire. Create. Belive
        </h2>
      </Title>
      <video src={MainVideo} autoPlay muted loop />
    </VideoContainer>
  );
};
