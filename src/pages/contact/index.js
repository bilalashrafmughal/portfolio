import React from "react";
import Paper from "shared/Paper";
import { H1, H1Gradient, H5 } from "theme/Typos";
import styled from "styled-components";

export default function Contact() {
  return (
    <Paper>
      <ContactWrapper>
        <H1> For any questions please mail us: </H1>
      </ContactWrapper>
    </Paper>
  );
}

const ContactWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
