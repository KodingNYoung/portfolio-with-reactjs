import React, { useState, useEffect } from 'react'
import Heading from '../Components/Heading/Heading';
import Preloader from '../Components/Preloader/Preloader';
import ProjectCard from '../Components/Cards/ProjectCard';
import useFirestore from '../firebase/hooks/useFirestore'

const ProjectCards = () => {
  const { docs } = useFirestore('projects');
  const [showPreloader, setShowPreloader] = useState(true);
  useEffect(() => {
    if(docs[0]) {
      setShowPreloader(false);
    }
  }, [docs])
  console.log(docs)
  return (
    <div className="project-cards-list">
      {showPreloader && (
        <Preloader messsage="Loadingprojects... Make sure your internet connection is turned on." />
      )}
      {docs.map((doc) => {
        return <ProjectCard key={doc.id} project={doc} />;
      })}
    </div>
  );
}

const Project = () => {
  return (
    <section className="projects">
      <Heading title="showcase section." />
      <ProjectCards />
    </section>
  )
}

export default Project;
