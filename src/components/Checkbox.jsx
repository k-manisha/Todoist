import React from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    const taskDoc = doc(getFirestore(), "tasks", id);

    updateDoc(taskDoc, {
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};
