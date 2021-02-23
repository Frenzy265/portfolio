import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    box-sizing: border-box;
  }


:root {
--primary-color: #fff; // white
--secondary-color: #000; // black
--tertiary-color: #FEDE31; // yellow
--default-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.16)
}

#root {
    height: 100%
}

html {
    width: 100%;
    height: 100%;
}

h1 {
    text-transform: lowercase;
    font-family: 'Domine', serif;
}

body {
    margin: 0;
    width: 100%;
    background: var(--primary-color);
    font-family: 'Open Sans', sans-serif;
}

input, button, li {
    font-size: 16px;
    padding: 0px;
}

`;

export default GlobalStyle;
