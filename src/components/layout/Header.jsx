import React, { useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { AddTask } from "../AddTask";
export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="images/logo.png" alt="Todoist" width={30} height={30} />
        </div>
        <div className="settings">
          <ul>
            <li
              className="settings_add"
              onClick={() => {
                setShouldShowMain(true);
                setShowQuickAddTask(true);
              }}
            >
              +
            </li>
            <li className="settings__darkmode">
              <button type="button" onClick={() => setDarkMode(!darkMode)}>
                <FaPaintBrush />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
