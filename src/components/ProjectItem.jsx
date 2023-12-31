import React, { useState } from "react";
import { FaTrashAlt, FaDotCircle } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

export const ProjectItem = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  const deleteProject = (docId) => {
    deleteDoc(doc(getFirestore(), "projects", docId)).then(() => {
      setProjects([...projects]);
      setSelectedProject("INBOX");
    });
  };
  return (
    <>
      <span className="sidebar__dot">
        <FaDotCircle />
      </span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === "Enter") setShowConfirm(!showConfirm);
        }}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project</p>
              <div>
                <button
                  type="button"
                  onClick={() => deleteProject(project.docId)}
                >
                  Delete
                </button>
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setShowConfirm(!showConfirm);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Cancel adding project, do not delete"
                >
                  Cancel
                </span>
              </div>
            </div>
          </div>
        )}
      </span>
    </>
  );
};
