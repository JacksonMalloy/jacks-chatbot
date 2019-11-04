import styled from 'styled-components';
import { animated as anim } from 'react-spring';
import {
  tabletMax,
  mobileMax,
  backgroundcolor,
  highlightcolor,
  subprimary,
  primary
} from '../../globals';

export const Page = styled(anim.section)`
  height: 100vh;
  width: 100vw;

  .RHS {
    position: absolute;
    width: 50vw;
    height: 100%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${tabletMax}) {
    display: flex;
    flex-direction: column;
  }
`;

export const InfoPanel = styled(anim.div)`
  position: fixed;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 35%;
  max-height: 90%;
  z-index: 2;

  button {
    background-color: ${highlightcolor};
    font-size: 15px;
    padding: 10px 15px;
    margin-bottom: 0;
    font-weight: 800;
    border: solid 5px transparent;
    line-height: 100%;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${primary};
    position: relative;
    cursor: pointer;
    transition: ease 0.5s;
    text-transform: uppercase;

    &:hover {
      border: 5px solid ${subprimary};
      background: white;
      transition: ease 0.5s;
      color: ${subprimary};
    }
  }

  @media (max-width: ${mobileMax}) {
    width: 100%;
    top: 25%;
    text-align: left;
    transform: translateY(0%);

    button {
      background-color: ${highlightcolor};
      font-size: 11px;
      padding: 7px 12px;
      font-weight: 800;
      letter-spacing: 2px;
      bottom: 20px;
    }
  }

  @media (max-width: ${tabletMax}) {
    width: 100%;
    top: 25%;
    text-align: left;
    transform: translateY(0%);
  }
`;

export const PageSplit = styled.div`
  position: fixed;
  height: 110%;
  top: 50%;
  transform: translateY(-50%);
  width: 50vw;
  background-image: linear-gradient(to right, ${backgroundcolor}, ${primary});
  z-index: 1;
  box-shadow: 0px 0px 10px ${subprimary};

  @media (max-width: ${tabletMax}) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 400px;
  height: 600px;
  position: absolute;
  top: 0;

  bottom: 0;
  left: auto;
  margin: auto;

  @media (max-width: ${tabletMax}) {
    display: none;
  }
`;

export const Opposite = styled.div`
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  width: 50vw;
  z-index: 0;
  overflow-x: hidden;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${tabletMax}) {
    position: relative;
    bottom: 0px;
    top: 0;
    left: 0%;
    transform: translate(0%);
  }

  @media (max-width: ${mobileMax}) {
    overflow-x: visible;
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateY(0%);
    width: 100%;
    z-index: 0;
    overflow-x: hidden;
  }
`;

export const Blob = styled.div`
  & > div {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: ${highlightcolor};
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    opacity: 0.6;
  }

  & > div:nth-child(1) {
    width: 150px;
    height: 150px;
  }

  & > div:nth-child(2) {
    width: 50px;
    height: 50px;
  }

  & > div:nth-child(3) {
    width: 120px;
    height: 120px;
  }

  & > div::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & > div:nth-child(2)::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  & > div:nth-child(3)::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  & {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;