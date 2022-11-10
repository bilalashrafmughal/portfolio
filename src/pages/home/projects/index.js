import React from "react";
import styled from "styled-components";
import Paper from "shared/Paper";
import { H2, P1, P4, P4UB } from "theme/Typos";
export const projectsList = [
  {
    image: "one",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
  {
    image: "two",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
  {
    image: "three",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
  {
    image: "four",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
  {
    image: "five",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
  {
    image: "six",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    preview: "",
  },
];

export const Project = ({ project }) => {
  return (
    <ProjectCard key={project.image}>
      <img src={`assets/projects/${project.image}.png`} alt={project.image} />
      <div className="info-part">
        <P1 className="mb-4"> {project.title} </P1>
        <P4> {project.description} </P4>
        <P4 className="my-6">
          <span className="font-semibold">Tech Stack:</span> HTML , JavaScript,
          SASS, React{" "}
        </P4>
        <div className="bottom-bar flex items-center">
          <img src="assets/icons/attachment.png" alt="att" />
          <P4UB> Live Preview </P4UB>
        </div>
      </div>
    </ProjectCard>
  );
};

export default function Projects() {
  return (
    <Paper>
      <StyledProjects>
        <div className="heading-part">
          <H2> Projects </H2>
          <P1> Technolog ies I’ve been working with recently </P1>
        </div>
      </StyledProjects>

      <div className="projects-list grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectsList.map((project) => (
          <Project key={project.image} project={project} />
        ))}
      </div>
    </Paper>
  );
}

const StyledProjects = styled.div`
  .heading-part {
    text-align: center;
    margin-bottom: 96px;
  }
`;

const ProjectCard = styled.div`
  max-width: 530px;
  border-radius: 20px;
  height: auto;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  margin-bottom: 62px;
  img {
    height: 260px;
    width: 100%;
  }
  .info-part {
    padding: 28px;
    .bottom-bar {
      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
    }
  }
`;
