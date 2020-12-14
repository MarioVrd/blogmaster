import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #32c338;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

a {
  color: var(--primary-color);
}

`;

export default GlobalStyle;
