import React from "react";
import Footer from "./components/Footer";
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
      <Footer>Franziska Klaus 2021</Footer>
    </>
  );
}

export default App;
