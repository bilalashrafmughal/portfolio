import React from "react";
import Paper from "shared/Paper";
import styled from "styled-components";
import { H1, H1Gradient } from "theme/Typos";

export default function Hero() {
  return (
    <Paper>
      <StyledHero>
        <div className="left-side">
          <H1> Hi 👋, </H1>
          <H1> My name is </H1>
          <H1Gradient> Bilal Ashraf </H1Gradient>
          <H1> I am MERN Stack Developer </H1>
        </div>
        <div className="right-side">
          <div className="image-wrapper">
            <img src="/assets/icons/profile_image.jpg" alt="profile" />
          </div>
        </div>
      </StyledHero>
    </Paper>
  );
}

const StyledHero = styled.div`
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right-side .image-wrapper {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    display: inline-flex;
    border: double 6px transparent;
    border-radius: 50%;
    background-image: linear-gradient(white, white),
      radial-gradient(circle at top left, #f00, #3020ff);
    background-origin: border-box;
    background-clip: content-box, border-box;
    overflow: hidden;
    justify-content: center;
    img {
      /* width: 100%;
      height: auto; */
    }
  }
`;

// 0305 9557392
