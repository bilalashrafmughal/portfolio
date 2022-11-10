import React from "react";
import { useSelector } from "react-redux";
import { getContactIcons } from "shared/data";
import Paper from "shared/Paper";
import { P5 } from "theme/Typos";

export default function Footer() {
  const contactIcons = getContactIcons();
  const mode = useSelector((state) => state.mode.mode);
  return (
    <Paper>
      <div className="flex justify-between items-center py-24">
        <div className="nav-logo w-32">
          <img
            src={
              mode === "light"
                ? "/assets/icons/logo-light.png"
                : "/assets/icons/logo-dark.png"
            }
            alt="nav logo"
          />
        </div>

        <div className="text-side flex justify-between">
          <P5> +923436156233 </P5>
          <P5 className="mx-14"> bilalashraf6233@gmail.com </P5>
          <div className="icons-list flex items-center">
            {contactIcons.map((icon) => (
              <div key={icon.name} className="single-icon mx-3">
                <img src={`${icon.icon}`} alt={icon.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
}
