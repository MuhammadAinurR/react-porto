import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

function Crud() {
  const [projectList, setProjectList] = useState([]);
  const projectsCollectionRef = collection(db, "projects");
  useEffect(() => {
    const getProjectList = async () => {
      try {
        const data = await getDocs(projectsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        setProjectList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProjectList();
  }, []);
  return projectList;
}

export { Crud };
