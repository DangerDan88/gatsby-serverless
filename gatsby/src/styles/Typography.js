import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/marker.woff";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Permanent Marker';
    src: url(${font});
  }

  html {
      font-family: 'Permanent Marker'
    
  }

  body {
      color: white;
  }
  `;

export default Typography;
