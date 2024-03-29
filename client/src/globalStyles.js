import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'AmstelvarAlpha';
  src: url('../fonts/AmstelvarAlpha-VF.ttf');
}

* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

h1 {
  color: ${(props) => props.theme.subprimary};
}

h2 {
  color: ${(props) => props.theme.subprimary};
}

html {
  overflow: hidden;
  height: 100%;
  font-size: 15px;
  background-color: ${(props) => props.theme.backgroundcolor}
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (orientation: landscape) {
  .masterContainer {
    display: none;
  }
}



.toggleNavButton {
    margin: 0;
    outline: none;
    justify-self: end;
    z-index: 101;
    position: absolute;
    top: 0px;
    right: 1vw;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navIconContainer {
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  z-index: 100;
  align-items: center;
  justify-content: center;

  .navIcon {
    width: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;

    span {
      display: block;
      position: absolute;
      height: 3.5px;
      width: 100%;
      background: ${(props) => props.theme.subprimary};
      border-radius: 19px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
      z-index: 100;
    }

    span:nth-child(1) {
      top: -9px;
    }

    span:nth-child(2) {
      top: 0px;
    }

    span:nth-child(3) {
      top: 9px;
    }
  }

  /* Nav button X */

  .navIconOpen {
    width: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;

    span {
      display: block;
      position: absolute;
      height: 3.5px;
      width: 100%;
      background: ${(props) => props.theme.subprimary};
      border-radius: 19px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
  }

  .navIconOpen span:nth-child(1) {
    top: 9px;
    width: 0%;
  }

  .navIconOpen span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .navIconOpen span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .navIconOpen span:nth-child(4) {
    top: 9px;
    width: 0%;
  }
}
`
