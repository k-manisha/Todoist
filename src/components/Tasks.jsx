import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useProjectsValue, useSelectedProjectValue } from "../context";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  let projectName = "";
  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject)?.name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    const title = getTitle(projects, selectedProject);
    projectName = title?.name;
  }
  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });
  return (
    <div className="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => {
          return (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
