import React from "react";
import Paper from "shared/Paper";
import styled from "styled-components";
import { H1, H1Gradient } from "theme/Typos";

export default function Hero() {
  return (
    <Paper>
      <StyledHero className="grid grid-cols-1 md:grid-cols-2">
        <div className="right-side m-auto md:float-right">
          <div className="image-wrapper m-auto w-96 h-96">
            <img src="/assets/icons/profile_image.jpg" alt="profile" />
          </div>
        </div>
        <div className="left-side m-auto text-center md:text-left md:float-left">
          <H1> Hi 👋, </H1>
          <H1> My name is </H1>
          <H1Gradient> Bilal Ashraf </H1Gradient>
          <H1> I am MERN Stack Developer </H1>
        </div>
      </StyledHero>
    </Paper>
  );
}

const StyledHero = styled.div`
  padding: 10rem 0;
  .right-side .image-wrapper {
    border-radius: 50%;
    display: inline-flex;
    border: double 0.6rem transparent;
    border-radius: 50%;
    background-image: linear-gradient(white, white),
      radial-gradient(circle at top left, #f00, #3020ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    overflow: hidden;
    justify-content: center;
  }
`;
