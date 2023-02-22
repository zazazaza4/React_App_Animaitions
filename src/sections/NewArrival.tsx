import { FC, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { imagesArray } from "../assets/images/newArrival";
import { Product } from "../components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  background-color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  z-index: 3;

  box-shadow: 0 0 0 5vw ${({ theme }) => theme.text};
  border: 3px solid ${({ theme }) => theme.body};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  text-shadow: 1px 1px 1px ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 4;
`;

const Text = styled.div`
  width: 20%;
  font-size: ${({ theme }) => theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;

  z-index: 4;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NewArrival: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<HTMLElement | null>(null);
  const scrollingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingRef.current;

    let t1 = gsap.timeline();

    if (scrollingElement) {
      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: "bottom+=100% top-=100%",
            scroller: ".App",
            scrub: true,
            pin: true,
          },
          ease: "none",
        });

        t1.fromTo(
          scrollingElement,
          {
            y: "0",
          },
          {
            y: "-100%",
            scrollTrigger: {
              trigger: scrollingElement,
              start: "top top",
              end: "=+100%",
              scroller: ".App",
              scrub: 1,
            },
          }
        );

        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
    }
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrival">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrival
      </Title>
      <Container ref={scrollingRef} data-scroll>
        {imagesArray.map(({ img, title }) => (
          <Product
            key={img}
            title={title}
            img={img}
            isFilter={false}
            width="auto"
            margin="5rem 0"
            zIndex={2}
          />
        ))}
      </Container>
      <Text data-scroll data-scroll-speed="-2">
        <p>
          There is new collection available for cool clothes in all sizes. This
          collection is a great way to find a new look for you. It offers a
          variety of cool apparel styles to fit your taste, while you can also
          find some cool clothes that you can wear everyday.
          <br />
          <br />
          The first line of clothing you will see on this collection is for men.
          The collection also includes three new styles for women.
          <br />
          <br />
          Give it a try and experience a new look.
        </p>
      </Text>
    </Section>
  );
};
