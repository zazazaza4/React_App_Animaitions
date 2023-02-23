import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FC, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { productArray } from "../assets/images/shop";
import { Product } from "../components";

const Section = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;

  text-shadow: 1px 1px 1px ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 4;

  @media (max-width: 64em) {
    font-size: ${({ theme }) => theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${({ theme }) => theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};

  min-height: 100vh;
  z-index: 3;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    padding-top: 20%;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${({ theme }) => theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    p {
      font-size: ${({ theme }) => theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${({ theme }) => theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin: 0 2rem;
  }
`;

export const Shop: FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let t1 = gsap.timeline();

    if (scrollingElement) {
      let pinWrapWidth: number = scrollingElement?.offsetWidth;

      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: pinWrapWidth + window.innerWidth * 0.65,
            scroller: ".App",
            scrub: true,
            pin: true,
          },
          height: `${scrollingElement?.scrollWidth!}px`,
          ease: "none",
        });

        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App",
            scrub: 1,
          },
          x: -pinWrapWidth,
          ease: "none",
        });

        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
    }
    return () => {
      t1.kill();
    };
  }, []);

  return (
    <Section id="shop" ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        New Collection
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </Left>
      <Right data-scroll ref={horizontalRef}>
        {productArray.map(({ img, title }) => (
          <Product key={img} img={img} title={title} pointer="pointer" />
        ))}
      </Right>
    </Section>
  );
};
