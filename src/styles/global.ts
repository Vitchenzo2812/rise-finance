import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gradient: linear-gradient(90deg, rgba(129,45,226,1) 0%, rgba(58,73,249,1) 100%);
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
        ::-webkit-scrollbar {
            display: none;
        }
    }
`