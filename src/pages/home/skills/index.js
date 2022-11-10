import React from "react";
import Paper from "shared/Paper";
import styled from "styled-components";
import { H2, P1 } from "theme/Typos";

const skills = [
  "html",
  "css",
  "js",
  "vscode",
  "tailwind",
  "sass",
  "react",
  "mui",
  "redux",
  "nodejs",
  "mongodb",
  "git",
];

const Skill = ({ skill, isFirst, isLast }) => {
  return (
    <StyledSkill key={skill} isFirst={isFirst} isLast={isLast}>
      <img src={`assets/skills/${skill}.png`} alt={skill} />
    </StyledSkill>
  );
};

export default function Skills() {
  return (
    <Paper>
      <StyledSkills>
        <div className="heading-part">
          <H2> My Tech Stack </H2>
          <P1> Technologies I’ve been working with recently </P1>
        </div>

        <div className="skills-container grid grid-cols-6 gap-10">
          {skills.map((skill, i) => (
            <Skill
              key={skill}
              skill={skill}
              isFirst={i === 0}
              isLast={i === skills.length - 1}
            />
          ))}
        </div>
      </StyledSkills>
    </Paper>
  );
}

const StyledSkills = styled.div`
  padding: 100px 0;
  .heading-part {
    text-align: center;
  }
  .skills-container {
    width: 100%;
    margin-top: 100px;
  }
`;

const StyledSkill = styled.div`
  margin: auto;
  margin-top: 60px;
`;
