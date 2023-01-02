import React from "react";
import styled from "styled-components";
import Paper from "shared/Paper";
import { H2, P1, P4, P4UB } from "theme/Typos";
export const projectsList = [
  {
    image: "project-01",
    title: "Style Craft",
    description:
      "This website is a portfolio website for a small glass and aluminum business which offers its services in UAE. This business offers glass partition, glass door shower glass door and aluminum doors etc.",
    preview: "https://stylecrafts.netlify.app/",
    tech: "HTML, CSS, Javascript, Bootstrap",
  },
  {
    image: "project-05",
    title: "Meezam Impex",
    description:
      "This is a full stack web application which deals in garments and sports products. This is a an E-commerce web application. User can generate query about products which he like to import and this admin panel as well. ",
    preview: "https://meezamimpex.netlify.app/",
    tech: "React js, Node js, Express js, MongoDB",
  },
  {
    image: "project-02",
    title: "Lal Techonologies",
    description:
      "This website is offers its services for medical fields. This is a multiple pages website contains sliders manes, routing, animation etc. These services are Doc. Management, Eligibility & Auth, and Call Center Services.  ",
    preview: "https://laltechnologies.com/",
    tech: "React js, Material UI, Bootstrap, React-Bootstrap",
  },
  {
    image: "project-03",
    title: "AHD Alabrar",
    description:
      "This is React js web application for glass and aluminium business. This business offers stair work, glass partition, glass door shower glass door and aluminum doors, swimmer glass, welding service, paint work etc. ",
    preview: "https://www.ahdalabrar.com/",
    tech: "React js, Tailwind CSS, Styled-components",
  },
  {
    image: "project-04",
    title: "Social App",
    description:
      "This is full stack social app. This project covers authentication, singup, create posts, update posts, delete posts and view list of posts.Further more follow and unfollow and like and comments on any post. ",
    preview: "https://portfolio-social-app.netlify.app/",
    tech: "React js, bootstrap, Node js, Express js, MongoDB",
  },
  {
    image: "project-06",
    title: "Strada",
    description:
      "This is enterprise property manager system which was built in CodeFulcurm team. This system consist of modules like budget calender, handling unpaid charges, invoices, and Cois.",
    preview: "https://www.strada.ai/",
    tech: "React js, bootstrap, Python, SQL",
  },
];

export const Project = ({ project }) => {
  return (
    <ProjectCard key={project.image} data-aos="fade-down">
      <div className="image-wrapper">
        <img src={`assets/projects/${project.image}.png`} alt={project.image} />
      </div>
      <div className="info-part">
        <P1 className="mb-4"> {project.title} </P1>
        <P4> {project.description} </P4>
        <P4 className="my-6">
          <span className="font-semibold">Tech Stack:</span> {project.tech}
        </P4>
        <div className="bottom-bar flex items-center">
          <img src="assets/icons/attachment.png" alt="att" />
          <a href={project.preview} target="_blank" rel="noreferrer">
            {" "}
            <P4UB> Live Preview </P4UB>
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

      <div className="projects-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
  overflow: hidden;
  border-radius: 20px;
  height: auto;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  margin-bottom: 62px;
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
    .bottom-bar {
      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
    }
  }
`;
