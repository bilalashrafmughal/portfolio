import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavPaper from "shared/NavPaper";
import { Bars, Cross } from "shared/SvgIcons";
import styled from "styled-components";
import { P4 } from "theme/Typos";
import { useDispatch } from "react-redux";
import { navLinks } from ".";
import { darkTheme, lightTheme } from "shared/store/modeSlice";

export default function MobileNavBar() {
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleThemeChange = () => {
    if (mode === "dark") {
      dispatch(lightTheme());
      return;
    }
    dispatch(darkTheme());
  };
  return (
    <NavPaper>
      <StyledMobileNav>
        <div className="accordian">
          <div className="nav-logo w-14">
            <img
              src={
                mode === "light"
                  ? "/assets/icons/logo-light.png"
                  : "/assets/icons/logo-dark.png"
              }
              alt="nav logo"
            />
          </div>

          {open ? (
            <div className="button" onClick={() => setOpen(false)}>
              <Cross mode={mode} />
            </div>
          ) : (
            <div className="button" onClick={() => setOpen(true)}>
              <Bars mode={mode} />
            </div>
          )}
        </div>

        <div className="accordian-summary">
          {open && (
            <div className="nav-links">
              {navLinks.map((navLink) => (
                <div key={navLink.name} className="single-link">
                  <Link to={navLink.path} onClick={() => setOpen(false)}>
                    {" "}
                    <P4> {navLink.name} </P4>{" "}
                  </Link>
                </div>
              ))}

              <div className="single-link" onClick={handleThemeChange}>
                <P4> {mode === "light" ? "Dark Theme" : "Light Theme"} </P4>
              </div>
            </div>
          )}
        </div>
      </StyledMobileNav>
    </NavPaper>
  );
}

const StyledMobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  .accordian {
    padding: 40px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .accordian-summary {
    .nav-links {
      .single-link {
        padding: 20px 0;
        cursor: pointer;
        a,
        p {
          text-align: center;
          p {
          }
        }
      }
      .single-link:hover {
        background-color: #d1d1d1;
      }
    }
  }
`;
