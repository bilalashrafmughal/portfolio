import React from "react";
import Paper from "shared/Paper";
import ProgressBar from "shared/ProgressBar";
import styled from "styled-components";
import { H2, P1 } from "theme/Typos";

const skills = [
  {
    name: "html",
    heading: "HTML",
    strength: 80,
  },
  {
    name: "css",
    heading: "CSS",
    strength: 75,
  },
  {
    name: "js",
    heading: "JavaScript",
    strength: 90,
  },
  {
    name: "vscode",
    heading: "Visual Studio Code",
    strength: 90,
  },
  {
    name: "tailwind",
    heading: "Tailwind",
    strength: 70,
  },
  {
    name: "sass",
    heading: "SASS",
    strength: 80,
  },
  {
    name: "react",
    heading: "React js",
    strength: 90,
  },
  {
    name: "mui",
    heading: "Material UI",
    strength: 60,
  },
  {
    name: "redux",
    heading: "Redux",
    strength: 75,
  },
  {
    name: "nodejs",
    heading: "Node js",
    strength: 60,
  },
  {
    name: "mongodb",
    heading: "Mongo DB",
    strength: 50,
  },
  {
    name: "git",
    heading: "git & Github",
    strength: 70,
  },
];

const Skill = ({ skill, isFirst, isLast }) => {
  return (
    <StyledSkill key={skill.name} isFirst={isFirst} isLast={isLast}>
      <img src={`assets/skills/${skill.name}.png`} alt={skill} />
      <ProgressBar thick={10} fill={skill.strength} />
      <p> {skill.strength}% </p>
    </StyledSkill>
  );
};

export default function SkillList() {
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
  img {
    width: 110px;
    height: 110px;
    margin-bottom: 25px;
    cursor: pointer;
    filter: grayscale(30%);
    transition: ease all 0.4s;
  }
  img:hover {
    filter: grayscale(10%);
    transform: scale(110%);
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    margin-top: 3px;
    text-align: center;
    font-style: italic;
  }
`;
