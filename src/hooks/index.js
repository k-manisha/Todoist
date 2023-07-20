import { useState, useEffect } from "react";
import { isEqual } from "lodash";
import moment from "moment";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const firestore = getFirestore();
    const tasksCollection = collection(firestore, "tasks");
    let unsubscribe = query(tasksCollection, where("userId", "==", "starVk"));

    if (selectedProject && !collatedTasksExist(selectedProject)) {
      unsubscribe = query(
        unsubscribe,
        where("projectId", "==", selectedProject)
      );
    } else if (selectedProject === "TODAY") {
      unsubscribe = query(
        unsubscribe,
        where("date", "==", moment().format("DD/MM/YYYY"))
      );
    } else if (selectedProject === "INBOX" || selectedProject === 0) {
      unsubscribe = query(unsubscribe, where("date", "==", ""));
    }

    const snapshotListener = onSnapshot(unsubscribe, (snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });

    return () => snapshotListener();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const firestore = getFirestore(firebase);
    const projectsCollection = collection(firestore, "projects");
    const projectsQuery = query(
      projectsCollection,
      where("userId", "==", "starVk"),
      orderBy("projectId")
    );

    const snapshotListener = onSnapshot(projectsQuery, (snapshot) => {
      const allProjects = snapshot.docs.map((project) => ({
        docId: project.id,
        ...project.data(),
      }));
      if (!isEqual(allProjects, projects)) {
        setProjects(allProjects);
      }
    });

    return () => snapshotListener();
  }, [projects]);

  return { projects, setProjects };
};
