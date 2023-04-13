import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <article>
      <VStack>
        <Avatar src="https://i.pravatar.cc/150?img=7" name="Pete" size="2xl" zIndex="base"></Avatar>
        <div>{greeting}</div>
        <Heading pt="10" textAlign="center" lineHeight="4rem">
          {bio1}<br />
          {bio2}
        </Heading>
      </VStack>
    </article>
  </FullScreenSection>
);

export default LandingSection;
