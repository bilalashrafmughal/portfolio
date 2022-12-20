import React from "react";
import Paper from "shared/Paper";
import styled from "styled-components";
import { H1, H4, P4, P6 } from "theme/Typos";

export const experiences = [
  {
    position: "MERN Stack Developer",
    company: "CodeFulcrum",
    city: "Lahore, Pakistan",
    job_type: "Full Time",
    start_date: "March 2022 - Present",
  },
  {
    position: "React JS Developer",
    company: "Graffitecs",
    city: "Lahore, Pakistan",
    job_type: "Full Time",
    start_date: "June 2021 - March-2022",
  },
  {
    position: "React JS Developer",
    company: "Lal Technologies",
    city: "Rawalpindi, Pakistan",
    job_type: "Full Time",
    start_date: "September 2020 - June-2021",
  },
];

export const educations = [
  {
    position: "Masters of Computer Science",
    company: "Virtual University of Pakistan",
    city: "Punjab",
    job_type: "MCS",
    start_date: "Sep 2018 - Dec-2020",
  },
];

const SingleExperience = ({ exp }) => {
  return (
    <StyledExperience>
      <div className="row-one">
        <div className="left">
          {" "}
          <H4> {exp.position} </H4>
        </div>
        <div className="right">{exp.job_type}</div>
      </div>
      <div className="row-two md:flex md:justify-between">
        <div className="left md:flex">
          <div className="company-block flex items-center md:mr-9 lg:mr-20">
            <img src="/assets/icons/exp.png" alt="exp" />
            <P6> {exp.company} </P6>
          </div>
          <div className="city-block flex items-center flex-1">
            <img src="/assets/icons/location.png" alt="location" />
            <P6 className="flex-1"> {exp.city} </P6>
          </div>
        </div>
        <div className="right flex items-center">
          <img src="/assets/icons/date.png" alt="date" />
          <P6 className="ml-2"> {exp.start_date} </P6>
        </div>
      </div>
    </StyledExperience>
  );
};

export default function About() {
  return (
    <Paper>
      <StyledAbout>
        <H1 className="py-12"> About Me </H1>
        <P4>
          {" "}
          I'm a very passionate MERN stack web developer. I love problem solving
          and facing challenges because coding is one thing that always makes me
          excited every day.{" "}
        </P4>
        <H1 className="my-12"> Work Experience </H1>
        {experiences.map((exp) => (
          <SingleExperience exp={exp} />
        ))}
        <H1 className="my-12"> Education </H1>
        {educations.map((exp) => (
          <SingleExperience exp={exp} />
        ))}
      </StyledAbout>
    </Paper>
  );
}

const StyledAbout = styled.div``;

const StyledExperience = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.fifth};
  .row-one {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .right {
      width: 84px;
      height: 24px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.success};
      border-radius: 100px;

      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.successPro};
    }
  }
  .row-two {
    .left {
      /* flex: 1; */
      .company-block {
        /* width: 30%; */
      }
      img {
        margin-right: 6px;
      }
      /* display: flex;
      align-items: center; */
    }
    .right {
      /* display: flex;
      align-items: center; */
    }
  }
`;
