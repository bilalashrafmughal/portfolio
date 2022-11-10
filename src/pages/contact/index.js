import React from "react";
import Paper from "shared/Paper";
import { H1, H1Gradient } from "theme/Typos";
import styled from "styled-components";

export default function Contact() {
  return (
    <Paper>
      <ContactWrapper>
        <H1> For any questions please mail us: </H1>
        <H1Gradient> bilalashraf6233@gmail.com </H1Gradient>
      </ContactWrapper>
    </Paper>
  );
}

const ContactWrapper = styled.div`
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
