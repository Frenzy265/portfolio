import React from "react";
import { Header } from "./components/Header";
import GlobalStyle from "./globalstyle";
import About from "./sections/About";
import Background from "./sections/Background";
import { Contact } from "./sections/Contact";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Background />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
