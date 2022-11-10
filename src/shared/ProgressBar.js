import React from "react";
import styled from "styled-components";

export default function ProgressBar({ fill = 50, thick = 12 }) {
  return (
    <div
      style={{ height: `${thick}px` }}
      className="relative w-full h-full bg-slate-100"
    >
      <StyledProgressBar fill={fill} thick={thick} />
    </div>
  );
}

const StyledProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: ${({ thick }) => `${thick}px`};
  width: ${({ fill }) => `${fill}%`};
  background: ${({ theme }) => theme.colors.gradientText};
  border-radius: 12px;
`;
