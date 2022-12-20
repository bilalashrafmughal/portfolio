import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getContactIcons } from "shared/data";
import NavPaper from "shared/NavPaper";
import { darkTheme, lightTheme } from "shared/store/modeSlice";
import styled from "styled-components";
import { P5 } from "theme/Typos";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Tech Stack",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact-us",
  },
];
export default function Navbar() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);
  const contactIcons = getContactIcons();

  const handleThemeChange = () => {
    if (mode === "dark") {
      dispatch(lightTheme());
      return;
    }
    dispatch(darkTheme());
  };
  return (
    <NavPaper>
      <StyledNavbar mode={mode}>
        <div className="nav-logo">
          <Link to="/">
            <img
              src={
                mode === "light"
                  ? "/assets/icons/logo-light.png"
                  : "/assets/icons/logo-dark.png"
              }
              alt="nav logo"
            />
          </Link>
        </div>
        <div className="btns-side flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="single-btn mx-6 cursor-pointer"
            >
              <P5> {link.name} </P5>
            </Link>
          ))}
        </div>
        <div className="contacts-icon flex">
          {contactIcons.map((icon) => (
            <div key={icon.name} className="single-icon mx-3">
              <img src={icon.icon} alt={icon.name} />
            </div>
          ))}
        </div>
        <div className="theme-switch" onClick={handleThemeChange}>
          <img
            src={
              mode === "light"
                ? "/assets/icons/light.png"
                : "assets/icons/dark.png"
            }
            alt={mode}
          />
        </div>
      </StyledNavbar>
    </NavPaper>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  white-space: pre;
  justify-content: space-between;
  padding: 40px 0;
  @media (max-width: 768px) {
    display: none;
  }
  .nav-logo {
    width: 100px;
    min-width: 50px;
    border-radius: 50%;
    a img {
      width: 100%;
    }
  }
  .theme-switch {
    min-width: 32px;
    min-height: 32px;
    border-radius: 50%;
    background-color: #d9d9d9;
    border: 1px solid
      ${({ mode }) => (mode !== "light" ? "#D9D9D9" : "#191919")};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all ease 0.2s;
    img {
      width: 29px;
      height: 29px;
    }
    &:hover {
      transform: scale(110%) rotate(60deg);
    }
    img {
      width: 25px;
      height: auto;
    }
  }
  .contacts-icon {
    .single-icon {
      min-width: 32px;
      min-height: 32px;
    }
  }
`;
