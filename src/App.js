import React from "react";
import Footer from "./sections/Footer";
import { Header } from "./components/Header";
import GlobalStyle from "./globalstyle";
import About from "./sections/About";
import Background from "./sections/Background";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { Wrapper } from "./components/Wrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Wrapper>
            <Header />
            <main>
              <Route path="/about" component={About} />
              <Route path="/background" component={Background} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
            </main>
            <Route path="/contact" component={Footer} />
          </Wrapper>
        </Switch>
      </Router>
    </>
  );
}

export default App;
