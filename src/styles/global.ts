import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-family: 'Poppins', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: var(--font-family);
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        overflow: hidden;
    }
`