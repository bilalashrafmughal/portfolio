import React from "react";
import styled from "styled-components";
import Paper from "shared/Paper";
import { H2, P1, P4, P4UB } from "theme/Typos";
import { Carousel } from "react-responsive-carousel";
import { projectsList } from "shared/data";
import { useNavigate } from "react-router-dom";

export const Project = ({ project }) => {
  const navigate = useNavigate();
  return (
    <ProjectCard
      key={project.image}
      data-aos="fade-down"
      onClick={() => navigate(`/project/${project.project}`)}
    >
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        {project.images.map((img, key) => (
          <div key={key} className="image-wrapper">
            <img
              src={`assets/projects/${project.project}/${img}.PNG`}
              alt={project.image}
            />
          </div>
        ))}
      </Carousel>
      <div className="info-part">
        <P1 className="mb-4"> {project.title}</P1>
        <P4 className="info-description"> {project.description} </P4>
        <P4 className="my-6 info-tech">
          <span className="font-semibold">Tech Stack:</span> {project.tech}
        </P4>
        <div className="bottom-bar flex items-center">
          <img src="assets/icons/attachment.png" alt="att" />
          <a href={project.preview} target="_blank" rel="noreferrer">
            {" "}
            <P4UB>Live Preview</P4UB>
          </a>
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
          <H2 data-aos="fade-down"> Projects </H2>
          <P1 data-aos="fade-down">
            {" "}
            Technolog ies I’ve been working with recently{" "}
          </P1>
        </div>
      </StyledProjects>

      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
  max-width: 400px;
  overflow: hidden;
  height: auto;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  margin-bottom: 62px;
  transform: scale(1);
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  button {
    height: 30px;
    width: 30px;
    background: black !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute !important;
    top: 50% !important;
    margin: 6px;
  }
  button:hover {
    background: none !important;
  }
  .image-wrapper {
    height: 260px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info-part {
    padding: 28px;
    .info-description {
      min-height: 160px;
    }
    .info-tech {
      height: 80px;
    }
    .bottom-bar {
      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
    }
  }
`;
