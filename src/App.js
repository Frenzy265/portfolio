import React from "react";
import Footer from "./sections/Footer";
import Navigation from "./components/Navigation/Navigation";
import GlobalStyle from "./globalstyle";
import About from "./sections/About";
import Carrer from "./sections/Carrer";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navigation />
        <main>
          <About />
          <Carrer />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
