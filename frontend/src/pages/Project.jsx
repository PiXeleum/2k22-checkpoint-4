import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [technoList, setTechnoList] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/techno`
      )
      .then((response) => {
        setTechnoList(response.data);
      });
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/project`
      )
      .then((response) => {
        setProjectList(response.data);
      });
  }, []);

  return (
    <section className="text-align-center p-1">
      <h1 className="font-bold mb-5">Project</h1>
      {projectList.map((project) => (
        <article key={project.id} className="mb-16">
          <h1 className="text-lg font-bold">{project.name}</h1>
          <p>{project.description}</p>
          <a
            href={project.link}
            target="_blanck"
            className="text-blue-700 hover:text-emerald-700"
          >
            {project.link}
          </a>
          <ul className="flex p-1 space-x-2">
            {technoList.map((techno) => (
              <li key={techno.id}>
                <picture>
                  <img className="h-8" src={techno.logo} alt={techno.name} />
                </picture>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
