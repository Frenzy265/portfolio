import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    box-sizing: border-box;
  }


:root {
--primary-color: #edf0f1; // offwhite
--secondary-color: #000; // black
--tertiary-color: #FEDE31; // yellow
}

#root {
    height: 100vh;
    width: 100vw;
}



h1 {
    text-transform: lowercase;
    font-family: 'Domine', serif;
    font-size: 9rem;


}

body {
    margin: 0;
    background: var(--primary-color);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
}

input, button, li {
    padding: 0px;
}

ul{
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

`;

export default GlobalStyle;
