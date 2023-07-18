import React from "react";
import { FaPaintBrush } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="Todoist" width={30} height={30} />
        </div>
        <ul>
          <li>+</li>
          <li>
            <FaPaintBrush />
          </li>
        </ul>
      </nav>
    </header>
  );
};
