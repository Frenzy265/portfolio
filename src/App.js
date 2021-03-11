import React from "react";
import Footer from "./sections/Footer";
import { Header } from "./components/Header";
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
        <Header />
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
