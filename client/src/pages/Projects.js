import React, { useContext } from "react";
import { useSpring } from "react-spring";

import WorkGrid from "../components/projects/WorkGrid";
import SVG from "../components/SVG/SVG";
import { Page, InfoPanel, Opposite, PageSplit } from "./styles";
import { Logo } from "./styles";
import { ChatbotContext } from "../context";

export default function Projects() {
  const { showBot, setShowBot } = useContext(ChatbotContext);

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <Page style={fade}>
      <InfoPanel className="about_margin" style={fade}>
        <h1>
          Looking <br />
          to Hire?
        </h1>
        <h2>
          Please leave my personal <br /> assistant a message.
        </h2>

        <button onClick={() => setShowBot(!showBot)}>contact</button>
      </InfoPanel>
      <div className="RHS hideOnDesktop">
        <Logo className="removeClickEventMobile">
          <SVG />
        </Logo>
      </div>
      <PageSplit />
      <Opposite>
        <WorkGrid />
      </Opposite>
    </Page>
  );
}
