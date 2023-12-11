import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

function Crud() {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    // console.log("test");

    const getProjectList = async () => {
      setIsLoading(true);
      try {
        const data = await getDocs(projectsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        setProjectList(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    getProjectList();
  }, []);

  return [projectList, isLoading];
}

export { Crud };
