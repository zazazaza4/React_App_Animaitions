import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import { About, Home, Shop } from "./sections";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import { ScrollTriggerProxy } from "./components";

function App() {
  const containerRef = useRef<HTMLElement | null>(null);

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
          <AnimatePresence>
            <main className="App" ref={containerRef} data-scroll-container>
              <Home />
              <About />
              <Shop />
              <ScrollTriggerProxy />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
