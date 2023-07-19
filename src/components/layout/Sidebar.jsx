import React, { useState } from "react";
import {
  FaInbox,
  FaRegCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { Projects } from "../Projects";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState("inbox");
  const [showProject, setShowProject] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <FaInbox />
          <span>Inbox</span>
        </li>
        <li>
          <FaRegCalendar />
          <span>Today</span>
        </li>
        <li>
          <FaCalendarAlt />
          <span>Next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProject && <Projects />}</ul>
    </div>
  );
};
