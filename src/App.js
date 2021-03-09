import React from "react";
import Footer from "./sections/Footer";
import { Header } from "./components/Header";
import GlobalStyle from "./globalstyle";
import About from "./sections/About";
import Background from "./sections/Background";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Background />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
