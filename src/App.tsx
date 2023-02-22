import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import { About, Banner, Footer, Home, NewArrival, Shop } from "./sections";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { Loader, ScrollTriggerProxy } from "./components";

function App() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{isLoaded ? null : <Loader />}</AnimatePresence>
          <AnimatePresence>
            <main className="App" ref={containerRef} data-scroll-container>
              <ScrollTriggerProxy />

              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrival />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
