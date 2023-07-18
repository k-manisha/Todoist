import React from "react";
import {
  FaInbox,
  FaRegCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar_content">
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

      <div className="sidebar_middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>

      <div className="sidebar_projects">Add project component here!</div>
    </div>
  );
};
