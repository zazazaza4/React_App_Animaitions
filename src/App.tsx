import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import { Home } from "./sections";

import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
          <main className="App" ref={containerRef} data-scroll-container>
            <Home />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
