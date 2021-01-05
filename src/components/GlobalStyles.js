import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #32c338;
  --primary-color-hover: #2dae31;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #333;
  padding-top: 60px;

  @media (max-width: 850px) {
    padding-bottom: 3rem;
  }
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 200ms ease;

  &:hover, 
  &:focus {
    color: var(--primary-color-hover)
  }
}

`;

export default GlobalStyle;
