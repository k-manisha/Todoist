import React from "react";
import { FaPaintBrush } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="Todoist" width={30} height={30} />
        </div>
        <div className="settings">
          <ul>
            <li className="settings_add">+</li>
            <li className="settings__darkmode">
              <FaPaintBrush />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
