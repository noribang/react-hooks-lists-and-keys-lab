import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log("technologies: ", technologies)
  /* Map through technolgies array and render it to a <span> element. */
  const spanTechnologies = technologies.map((technology) => {
    return <span key={name+technology}>{technology}</span>
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {spanTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;
